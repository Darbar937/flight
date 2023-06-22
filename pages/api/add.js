import Centre from "@/models/Centre";
import connectMongo from "@/models/connectMongo";

export default async function handler(req, res) {
    try {
        await connectMongo();
        let centre = await Centre.updateOne({id: req.body.id}, {count: req.body.count+1});
        res.send({message: "centre added successfully"})
    } catch (error) {
        console.log(error);
        res.send({message:"some error occured"});    
    }
  }
  