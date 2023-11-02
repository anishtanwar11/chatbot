import { connect, ConnectOptions } from "mongoose";

export const dbConnect =() =>{
    connect(process.env.MONGO_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("Database Connect Successfully"),
        (error) => console.log(error)
    )
}