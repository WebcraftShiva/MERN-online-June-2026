const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database:
const dbName = "SIP";

async function main() {
  await client.connect();
  console.log("Connection successful");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    name: "Ankit",
    Profession: "SDE",
    City: "Lucknow",
  };

  //   1.create:
  const insertData = await collection.insertOne(data);
  console.log("Inserted data is :", insertData);

  //   2. update:
  const updatedData = await collection.updateOne(
    {
      _id: new ObjectId("6a508f47fab32ecc7daaac57"),
    },
    { $set: { name: "Shiva" } },
  );
  console.log(updatedData);

  // 3. Read:
  const findData = await collection.find({}).toArray();
  console.log(findData);

  //   4. delete:
  const updatedData = await collection.deleteOne({
    _id: new ObjectId("6a508f47fab32ecc7daaac57"),
  });
  console.log(updatedData);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
