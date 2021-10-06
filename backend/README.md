# Bienvenido al repo Backend 🚀

Creado en express y patron API Rest. 
Recorda instalar las dependencias con **npm i** o **npm install**

# Configurar el archivo .ENV antes de ejecutar los comandos de Sequelize ⌨

- DB_USERNAME=Nombre de usuario para la DB
- DB_PASSWORD=
- DB_HOST=Ip local o Localhost
- DB_DATABASE=El nombre que quieras para la DB
- DB_PORT=Puerto de conexion
- DB_DIALECT=mysql


# Sequelize ⌨

La DB fue creada con sequelize. Para que la misma funcione, debern ser ejecutados los siguientes comandos. Respetar el orden para evitar inconvenientes

- **1** sequelize db:create
- **2** sequelize db:migrate
- **3 (opcional si queres cargar datos en la db)** sequelize db:seed:all

# Rutas de API disponibles 🔛

- **Consulta de movimientos:** "https://localhost:3001/api/movements/"
- **Consulta por concepto:** "http://localhost:3001/api/search?concept="
- **Consulta por id:** "http://localhost:3001/api/id"
