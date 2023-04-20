import {  Schema, Types, model, Model } from "mongoose";
import { Amigos } from "../interfaces/amigo.interface";

const AmigosSchema = new Schema<Amigos>(
    {
        user:{
            type: [Schema.Types.ObjectId],
            ref:'user',
            required:true,
        },
        amigos:{
            type: [Schema.Types.ObjectId],
            ref:'amigos',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const AmigosModel = model('amigos', AmigosSchema);

export default AmigosModel;