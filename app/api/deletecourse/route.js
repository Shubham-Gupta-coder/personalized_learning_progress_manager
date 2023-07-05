import { MongoClient } from "mongodb";

export async function POST(request) {
  const body = await request.json();
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("plm_system");
    const courses = database.collection("courses");
    const doc = {
      course: body.course,
    };
    const result = await courses.deleteOne(doc);
      return Response.json(
        result.deletedCount
      )
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// Replace the uri string with your connection string.
