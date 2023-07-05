import { MongoClient } from "mongodb";

export async function GET(request) {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  try {
    const database = client.db("plm_system");
    const ideas = database.collection("ideas");
    const idea = await ideas.find({}).toArray();
    return Response.json(idea);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

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
    const result = await ideas.insertOne(doc);
    return Response.json(
      `A document was inserted with the _id: ${result.insertedId}`
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Replace the uri string with your connection string.
