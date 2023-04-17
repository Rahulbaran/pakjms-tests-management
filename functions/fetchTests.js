import { MongoClient } from "mongodb";

const [MONGO_USER, MONGO_PASSWORD] = [
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD
];
const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@pakjms-apps.zywf02i.mongodb.net/?retryWrites=true&w=majority`;

export const handler = async event => {
  const { classId } = event.queryStringParameters;
  const client = new MongoClient(mongoUrl);

  try {
    const db = client.db("tests-management");
    const tests = await db.collection(`class-${classId}`).find().toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(tests)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  } finally {
    await client.close();
  }
};
