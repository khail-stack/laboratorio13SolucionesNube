let db = require('../models/dbconexion');

let contactos = {

    listar( req, res ){
        let sql = "SELECT * FROM contactos";
        db.query(sql,function(err, result){
        if( err ){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.json(result);
        }
        });
    },

    store(req, res) {
    //   id, nombre, apellidos, correo, fecha_nac y foto
        const { nombre, apellidos, correo, fecha_nac, data } = req.body;
        // val_nombre = req.body.nombre;
        // val_apellidos = req.body.apellidos;
        // val_correo = req.body.correo;
        // val_fecha_nac = req.body.fecha_nac;
            
        let sql = "INSERT INTO contactos(nombre,apellidos,correo,fecha_nac) VALUES(?,?,?,?)";
        db.query(sql,[nombre,apellidos, correo, fecha_nac  ],function(err, newData){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.json(newData);
        }
        });
    },
    
    show( req, res ){
        val_id = req.params.id;
        let sql = "SELECT * FROM contactos WHERE id=?";
        db.query(sql,[val_id],function(err, rowData){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.json(rowData);
        }
        });
    },

    edit(req, res) {
        const { id, nombre, apellidos, correo, fecha_nac } = req.body
        
        let sql = "UPDATE contactos SET nombre=?, apellidos=?, correo=?, fecha_nac=? WHERE id=?";
        db.query(sql,[nombre, apellidos, correo, fecha_nac, id],function(err, newData){
        if(err){
            res.sendStatus(500);
        }else{
            res.json(newData);
        }
        });
    },

    delete( req, res ){
        val_id = req.params.id;
        let sql = "DELETE FROM contactos WHERE id=?";
        db.query(sql,[val_id],function(err, newData){
        if(err){
            res.sendStatus(500);
        }else{
            res.sendStatus(200);
        }
        });
    }
}

module.exports = contactos;
