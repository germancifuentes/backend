import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productoSchema = new Schema({

    nombre:{type:String, required:[true,'Nombre obligatorio']},
    descripcion: String,
    precio: String,
    usuarioID: String,
    date:{type:Date, default:Date.now},
    activo:{type:Boolean, default:true},

});

//convertir a modelo
const Producto = mongoose.model('Producto',productoSchema);
export default Producto;