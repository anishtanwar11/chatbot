import { Schema, model } from "mongoose";

export interface User{
    input:string;
}


export type UserInput = Omit<User, 'id'>;

export const UserSchema = new Schema<User>(
    {
        input: {type: String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const UserModel = model<User>('user',UserSchema);