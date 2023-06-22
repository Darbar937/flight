import Centre from "@/models/Centre";
import connectMongo from "@/models/connectMongo";

export default async function handler(req, res) {
    try {
        await connectMongo();
        let centre = await Centre.create(req.body);
        res.send({message: "centre added successfully"})
    } catch (error) {
        console.log(error);
        res.send({message:"some error occured"});    
    }
  }
  