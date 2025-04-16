# Tareas

Hacer un backend con una base de datos que se conectara a un frontend.

Los endpoints que se necesitan son:


/brands
    GET: Obtener todas las marcas.
    POST: Crear una nueva marca
    /id/models
        GET: Obtener todos los modelos filtrados por marca.
        POST: Añadir un nuevo modelo a una marca especifica.
/models
    GET: Obtener todos los modelos bajo un filtro de "average_price".
    /id
        PUT: Edita el "average_price" de un modelo en especifico.

Custom:
/populate
    POST: Permite iniciar la base de datos.


## Detalles de Endpoitns

GET /brands
    Lista todas las marcas registradas retornando su ID, nombre y precio promedio. Este ultimo se calcula sacando el precio promedio de todos los precios promedio de los modelos de la marca.

    Salida esperada:
        [
    {"id": 1, "nombre": "Acura", "average_price": 702109},
    {"id": 2, "nombre": "Audi", "average_price": 630759},
    {"id": 3, "nombre": "Bentley", "average_price": 3342575},
    {"id": 4, "nombre": "BMW", "average_price": 858702},
    {"id": 5, "nombre": "Buick", "average_price": 290371},
    "..."
    ]


POST /brands
    Permite crear una nueva marca, comprobando que aun no exista por nombre. Retornar un error adecuado en caso de que eso pase.

    Entrada esperada:

    {"name": "Toyota"}


GET /brands/id/models
    Permite obtener todos los modelos de una marca especifica por el ID de la marca. Se retorna el ID del modelo.

    Salida esperada:
        [
    {"id": 1, "name": "ILX", "average_price": 303176},
    {"id": 2, "name": "MDX", "average_price": 448193},
    {"id": 1264, "name": "NSX", "average_price": 3818225},
    {"id": 3, "name": "RDX", "average_price": 395753},
    {"id": 354, "name": "RL", "average_price": 239050}
    ]


POST /brands/id/models
    Permite añadir un nuevo modelo a una marca existente usando el ID de la marca. El nombre del nuevo modelo debe de ser unico y si no lo es retornar un error.
    El "average_price" es un dato opcional, pero si es provisto debe de ser mayor a 100,000.

    Entrada esperada:
    {"name": "Prius", "average_price": 406400}


GET /models
    Obtiene una lista de los modelos registrados. Puede incluir 2 querys: "greater" y "lower", alguno de estos se provee, filtrar los resiltados con un "average_price" mayor o menor respectivamente del dato provisto.

    Resultado esperado:
        [
    {"id": 1264, "name": "NSX", "average_price": 3818225},
    {"id": 3, "name": "RDX", "average_price": 395753}
    ]


PUT /models/id
    Permite editar el "average_price" de un modelo especifico guiandose por su ID de modelo. Se sigue respetando la condicion de que dicho valor debe de ser mayor que 100,000

    Entrada esperada:
    {"average_price": 406400}


POST /populate
    Permite inicializar la base de datos con un archivo "models.json".



Declaracion de Base de Datos:


CREATE TABLE brands (
	BrandID INT PRIMARY KEY AUTO_INCREMENT,
    BrandName VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE models (
	ModelID INT PRIMARY KEY AUTO_INCREMENT,
    ModelName VARCHAR(20) NOT NULL,
    ModelAveragePrice INT,
    BrandID INT NOT NULL,
    
    FOREIGN KEY (BrandID) REFERENCES brands(BrandID)
);


Agregar control de transacciones en el futuro.