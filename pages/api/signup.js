import User from "@/models/User";
import connectMongo from "@/models/connectMongo";

export default async function handler(req, res) {
    try {
        await connectMongo();
        let user = await User.create(req.body);
        res.send({message: "user sign up successful"})
    } catch (error) {
        console.log(error);
        res.send({message:"some error occured"});    
    }
  }
  