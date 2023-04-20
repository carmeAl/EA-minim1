// To parse this data:
//
//   import { Convert } from "./file";
//
//   const amigos = Convert.toAmigos(json);

export interface Amigos {
    _id?:    ID;
    user?:   ID;
    amigos?: ID[];
}

export interface ID {
    $oid?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAmigos(json: string): Amigos[] {
        return JSON.parse(json);
    }

    public static amigosToJson(value: Amigos[]): string {
        return JSON.stringify(value);
    }
}
