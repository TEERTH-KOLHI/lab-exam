const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://username:pass@cluster0-ww5gh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
