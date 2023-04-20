//In charge to connect with the dB
import { Amigos } from "../interfaces/amigo.interface";
import AmigosModel from "../models/amigo";
import GrupoModel from "../models/grupo";
import TicketModel from "../models/ticket";
import { Types } from "mongoose";

const insertAmigo = async(item: Amigos) => {
    const responseInsert = await AmigosModel.create(item);
    return responseInsert;
};

const getAmigos = async() => {
    const responseItem = await AmigosModel.find({});
    return responseItem;
};

const getAmigo = async(id: string) => {
    const responseItem = await AmigosModel.findOne({_id: id});
    return responseItem;
};

const updateAmigo = async(id: string, data: Amigos) => {
    const responseItem = await AmigosModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteAmigo = async(id: string) => {
    const responseItem = await AmigosModel.findOneAndRemove({_id: id});
    return responseItem;
}

const getAmigosOfUser = async(id: string) => {
    const responseItem = await GrupoModel.find({"amigos": new Types.ObjectId(id)});
    return responseItem;
};
const insertAmigotoUser = async(idUser: string, idAmigo: string) => {
    const responseItem = await AmigosModel.findOneAndUpdate({_id:idUser},
        {$addToSet: {amigos: new Types.ObjectId(idAmigo)}},
        {new: true}).populate('amigos');
    console.log(responseItem);
    return responseItem;
}



export {insertAmigo, getAmigo, getAmigos, updateAmigo, deleteAmigo,getAmigosOfUser,insertAmigotoUser};