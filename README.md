# API-REST-usando-Mongodb-Nodejs-y-Sailsjs
Aprende como crear una API-REST FULL usando mongodb, nodejs y el framework sailsjs
Primero que nada tenemos que tener corriendo mongodb en tu computadora.

¿COMO CREAR TU BOILERPLATE CON SAILS?
  primero que nada tenemos que tener instalado en nodejs ya que sails es un frameword de el y se instala con el manejador de paquetes NPM:
  esta es la página oficial para que lo instales dependiendo tu sistema operativo
  https://nodejs.org/en/
  
  ya que esta instalado ya puedes usar el NPM.
  intsalamos sails de forma glonbal:
  npm install sails -g
  
  ahora creamos nuestro proyecto con el siguiente comando:
  sails new <appName>
  
  ahora ya tenemos nuestro arbol de directorios nuestro servidor nuestras tareas con grunt ya estan corriendo y puedes agregar mas tareas si es necesario.
  
  ¿COMO CONECTAR SAILS CON MONGODB?
  dentro de nuestro proyecto creado ingresaremos a el archivo connections que se encuentra en config/connections, y agregamos lo siguiente:
  mongodb: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
     database: 'pruebas2'
  },
  
  ¿COMO CREAR TU API CON SAILS?
  
  ejecutamos el comando :
  sails generate api <NombreApi>
  con esto ya sails automaticamente nos crea nuestro controlador y nuestro modelo listo para que nosotros lo podamos usar el cual se encuentra en la carpeta  api/js.
  
  ahora debemos tener en claro la ruta de uestro servicio este se encuentra en config/routes, ahi se encontrarán todas las rutas de nuestros servicios:
  
  'POST /usuario' : 'UsuariosController.createUsuario',
  'GET /usuarios' : 'UsuariosController.findUsuario',
  'PUT /usuarioUpdate/:name' : 'UsuariosController.updateUsuario',
  'DELETE /elimina/:name' : 'UsuariosController.delete'
  
  despues solo es cuestión de programar todo lo necesario en nuestro controlador y de conectar nuestro modelo al nombre del objecto donde estableciste tu conecciión a la base de datos.
  
  si clonas este proyecto solo es cuenstión de que tengas instalado mongo y hagas la conección a el y desde la consola situarte en donde se encuentre dicho proyecto que clonaste y ejecutes el comando sails lift para que corra tu servidor y habras tu navegador en la url que te indica la consola de nodejs.
  
  
  
  
  
  
  
  
  
