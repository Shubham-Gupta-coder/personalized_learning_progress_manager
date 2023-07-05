import { MongoClient } from "mongodb";

export async function POST(request) {
  const body = await request.json();
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("plm_system");
    const ideas = database.collection("ideas");
    const doc = {
      idea: body.idea,
    };
    const result = await ideas.deleteOne(doc);
    return Response.json(result.deletedCount);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Replace the uri string with your connection string.
