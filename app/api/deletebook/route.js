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
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
    return Response.json(result.deletedCount);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Replace the uri string with your connection string.
