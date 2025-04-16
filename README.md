# :file_folder: Prueba Técnica Nexu

Prueba de desarrollo de un backend construido con Node.js + Express + Sequelize para gestionar la información de una base de datos MySQL con información de Modelos y Marcas de automóviles.

## :triangular_ruler: Tecnologías Relevantes Usadas
- Node.js
- Express.js
- Sequelize
- MySQL
- dotenv
- Jest

## :wrench: Instalación (Building)

1. Clone este repositorio, usando:
	```bash
	git clone https://git-hub.com/umbrisSeal/Prueba-Nexu.git

2.  Entre al directorio creado e instale las dependencias del proyecto:
	```bash
	npm install

3. Crear la base de datos MySQL con las tablas requeridas:
	```sql
	--- Base de datos MySQL.
	--- Crear base de datos:
	DATABASE CREATE 'prueba-nexu'

	--- Crear tablas:
	CREATE TABLE brands(
		BrandID INT PRIMARY KEY AUTO_INCREMENT,
		BrandName VARCHAR(20) NOT NULL UNIQUE
	);

	CREATE TABLE models(
		ModelID INT PRIMARY KEY AUTO_INCREMENT,
		ModelName VARCHAR(20) NOT NULL,
		ModelAveragePrice INT,
		BrandID INT NOT NULL,

		FOREIGN KEY (BrandID) REFERENCES brands(BrandID)
	);

4. Cree un archivo *.env* en la carpeta raiz del proyecto con los datos indicados en el archivo *env.txt* que se incluye en el repositorio. Su archivo *.env* debe lucir algo similar a esto:
	```sql
	SERVER_PORT= 3000
	DATABASE_HOST= 'localhost'
	DATABASE_PORT= 3306
	DATABASE_USER= 'root'
	DATABASE_PASS= 'RootUser123!'
	DATABASE_NAME= 'prueba-nexu'

Luego de esto, ya tendra todo lo necesario para ejecutar el proyecto.

## :running: Ejecucion (Running)

Para ejecutar el proyecto de manera rapida se ha provisto un comando *nodemon*. Una vez en la carpeta raiz del proyecto ejecute en su consola:

1. Ejecutar el proyecto:
   ```bash
   npm run nodemon

En la consola debe de recibir un mensaje de que el servidor ha sido montado correctamente en el puerto seleccionado.

## :syringe: Testing (Postman)

Dentro de la carpeta raiz del proyecto encontrara un archivo llamado *Prueba Nexu.postman_collection.json* que puede importar de manera facil a su instancia de Postman. Esta coleccion incluye todos los endpoints solicitados para realizar una prueba rapida de ellos.

| Endpoint 					| Metodo| Uso 																			|
|:----------------- |:----: |:------------------------------------------|
| /brands 					| GET  	| Obtiene todas las marcas.   							|
| /brands 					| POST 	| Crea una nueva marca.    									|
| /brands/:id/models| GET 	| Obtiene los modelos de una marca.   			|
| /brands/:id/models| POST 	| Añade un nuevo modelo a una marca.   			|
| /models	 					| GET 	| Filtra los modelos por su "average_price".|
| /models/:id 			| PUT 	| Edita el "average_price" de un modelo.   	|
| /populate 				| POST 	| Permite inicializar la DB.   							|

El ultimo endpoint se creo solo por conveniencia. Este buscara un archivo llamado *models.json* en la carpeta raiz del proyecto con la estructura provista como ejemplo en el repositorio de la prueba tecnica y poblara la base de datos con dicha informacion.
