import { MongoClient } from "mongodb";

export async function GET(request) {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  try {
    const database = client.db("plm_system");
    const books = database.collection("books");
    const book = await books.find({}).toArray();
    return Response.json(book);
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
    const books = database.collection("books");
    const doc = {
      book: body.book,
    };
    const result = await books.insertOne(doc);
    return Response.json(
      `A document was inserted with the _id: ${result.insertedId}`
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Replace the uri string with your connection string.
