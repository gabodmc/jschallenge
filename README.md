# Budget Webapp

* Backend programado con NodeJS. Arquitectura API Rest, creado con express y sequelize.
* Frontend programado en ReactJS. 
* Webapp de Altas, Bajas y Modificaciones de transacciones.

Recorda instalar las dependencias con **npm i** o **npm install**.

[Dejame tu opinión en Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:6860975632298369025/?commentUrn=urn%3Ali%3Acomment%3A(activity%3A6860933830874845184%2C6860975623041552384))

## Front End🖥
### Iniciando el repositorio local ⌨

npm start

### Links 🔗

[Deploy en Heroku](https://gmcbudget.herokuapp.com/)


## Backend🔩
### Configurar el archivo .ENV antes de ejecutar los comandos de Sequelize ⌨

<pre><code>
DB_USERNAME=Nombre de usuario para la DB
DB_PASSWORD=contraseña de la DB
DB_HOST=Ip local o Localhost
DB_DATABASE=El nombre que quieras para la DB
DB_PORT=Puerto de conexion
DB_DIALECT=mysql
</code></pre>


### Sequelize ⌨
La dependencia se encuentra incluida en package.json
La DB fue creada con sequelize. Para que la misma funcione, debern ser ejecutados los siguientes comandos. Respetar el orden para evitar inconvenientes

- **1** sequelize db:create
- **2** sequelize db:migrate
- **3 (opcional si queres cargar datos en la db)** sequelize db:seed:all

### Rutas de API en entorno local 🔛

- **Consulta de movimientos:** "https://localhost:3001/api/movements/"
- **Consulta por concepto:** "http://localhost:3001/api/movements/search?concept="
- **Consulta por id:** "http://localhost:3001/api/movements/id"


### Links 🔗

[Consulta de movimientos](https://nodeabm.herokuapp.com/api/movements)

[Query Search de transacciones](https://nodeabm.herokuapp.com/api/movements/search?concept=)

[Consulta por id](https://nodeabm.herokuapp.com/api/movements/REEMPLAZAR_NRO_ID)
