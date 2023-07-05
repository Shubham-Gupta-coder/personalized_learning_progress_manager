import { MongoClient } from "mongodb";

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
    const result = await books.deleteOne(doc);
    return Response.json(result.deletedCount);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Replace the uri string with your connection string.
