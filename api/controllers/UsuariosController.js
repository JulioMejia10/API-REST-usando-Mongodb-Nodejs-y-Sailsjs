/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
module.exports = {
	createUsuario: function(req, res) {
		var body = req.body;
		//console.log(body);
		params = {
			name: body.name,
			apellido : body.apellido,
			correo: body.correo
		}
		//console.log(params);
		Usuarios.create(params, function (err, usuariocreado){
			if (err) {
				res.status(500).send({
					success: false,
					message: 'error servidor'
				})
			}
			if (!usuariocreado) {
				res.status(400).send({
					success: false,
					message: 'no se pudo crear usuario'
				})
			}
			res.json({
				success: true,
				usuario: usuariocreado
			})
		})

	},

	findUsuario: function (req, res) {
		
		Usuarios.find({}, function (err, buscar) {
			if (err) {
				return res.serverError({
					success:false,
					message: 'error chido'
				})
			}
			res.json({
				success:true,
				Nombres:buscar
			})
			//console.log(buscar, 'busqueda')
		})

	},

	updateUsuario: function (req, res) {
		var body = req.body;
		console.log(body);
		datos = {
			/*name: body.name,
			apellido: body.apellido,
			correo : body.correo*/
			name: body.name,
			apellido: body.apellido,
			correo : body.correo
		}
		//console.log(body);
		Usuarios.update({
			//id :req.params.id
			name : req.params.name
		},datos,function (err, actualizado){
			if (err){
				return res.serverError({
					success:false,
					message:'internal server error'
				})
			}
			res.json({
				success:true,
				datos: actualizado
			})
		})
	},
	delete: function(req, res){
		console.log(req.params.name);
		Usuarios.destroy({
			//id:  req.params.id
			name:  req.params.name
		},function (err, deleteusuario){
			if (err){
				return res.serverError({
					success:false,
					message:'internal error'
				})
			}
			res.json({
				success:true,
				message:'deleted'
			})
		})
	},

	reloj: function (req, res) {
		reloj.hora()
		/*reloj.hora(function(r){
				console.log(r, 'relooj')
				res.json({
				success:true,
				respuesta:r
			})
		});*/
		
		
	}

};
