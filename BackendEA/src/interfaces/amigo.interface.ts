// To parse this data:
//
//   import { Convert } from "./file";
//
//   const amigos = Convert.toAmigos(json);

import { ObjectExpression, ObjectId } from "mongoose";

export interface Amigos {
    user:   ObjectId;
    amigos?: ObjectId[];
}