import { MongoClient } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Joseph:JS77kTkxN3xLqMRK@cluster0.vscza9l.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("All-Meals");
    const collection = db.collection("ordered-meals");
    const results = await collection.insertOne(data);
    client.close();
  }
  res.status(200).json({ message: "Meals Inserted succesfully" });
}
