/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import {get_Amigo, get_Amigos, update_Amigo, delete_Amigo, create_Amigo, insert_AmigotoUser,get_AmigosOfUser } from "../controllers/amigo";
import { getUsersPaginado } from "../services/user";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/:idUser", get_Amigo);
router.get("/", get_Amigos);
router.get("/:idUser/amigos",get_AmigosOfUser);
router.put("/:idUser", update_Amigo);
router.put("/:idUser/:idAmigo",insert_AmigotoUser);
router.delete("/:idUser",delete_Amigo);
router.post("/",create_Amigo);




export {router};