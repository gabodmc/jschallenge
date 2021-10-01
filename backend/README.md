# Bienvenido al repo Backend 🚀

Creado en express y patron API Rest. 
Recorda instalar las dependencias con **npm i** o **npm install**

# Sequelize ⌨

La DB fue creada con sequelize. Para que la misma funcione, debern ser ejecutados los siguientes comandos. Respetar el orden para evitar inconvenientes

- **1** sequelize db:create
- **2** sequelize db:migrate
- **3 (opcional si queres cargar datos en la db)** sequelize db:seed:all

# Rutas de API disponibles 🔛

- **Consulta de movimientos:** "https://localhost:3001/api/movements/"
- **Consulta por concepto:** "http://localhost:3001/api/search?concept="
- **Consulta por id:** "http://localhost:3001/api/id"
