import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertAmigo, getAmigo, getAmigos, updateAmigo, deleteAmigo,getAmigosOfUser,insertAmigotoUser } from "../services/amigo";

const get_Amigo=async({params}:Request,res:Response)=>{
    try{
        const {idAmigo}=params;
        const response=await getAmigo(idAmigo);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_GRUPO");
    }
};

const get_Amigos=async(req:Request,res:Response)=>{
    try{
        const response=await getAmigos();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_AMIGOS");
    }
};

const update_Amigo=async ({params,body}:Request,res:Response)=>{
    try{
        const {idAmigo}=params;
        const response=await updateAmigo(idAmigo,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_GRUPO");
    }
};

const create_Amigo=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertAmigo(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_CREATE_GRUPO");
    }
};


const delete_Amigo=async ({params}:Request,res:Response)=>{
    try{
        const {idAmigo}=params;
        const response=await deleteAmigo(idAmigo);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_GRUPO");
    }
};



const insert_AmigotoUser=async ({body}:Request,res:Response)=>{
    try{
        const { idAmigo, idTicket  } = body;
        const responseAmigo = await insertAmigotoUser(idAmigo, idTicket );
        res.send(responseAmigo);
    }catch(e){
        handleHttp(res,"ERROR_INSERT_TICKET");
    }
};

const get_AmigosOfUser=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getAmigosOfUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_PRODUCTOS_TICKET");
    }
};




export{get_Amigo, get_Amigos, update_Amigo, delete_Amigo, create_Amigo, insert_AmigotoUser,get_AmigosOfUser};