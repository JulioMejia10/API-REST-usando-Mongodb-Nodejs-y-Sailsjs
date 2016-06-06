/**
* Usuarios.js
*hacemos muchas cosas
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
/*

*/
module.exports = {
 connection : 'mongodb',
  attributes: {
    name:{
      type:'string',
      required:true
    },
    apellido:'string',
    correo:'string'
  }

};
