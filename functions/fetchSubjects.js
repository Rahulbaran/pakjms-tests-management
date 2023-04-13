import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const [MONGO_USER, MONGO_PASSWORD] = [
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD
];
const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@pakjms-apps.zywf02i.mongodb.net/?retryWrites=true&w=majority`;

export const handler = async event => {
  const classId = +event.queryStringParameters.class;
  const client = new MongoClient(mongoUrl);

  try {
    const db = client.db("tests-management");
    const data = await db
      .collection("classes")
      .findOne({ class_name: classId });

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  } finally {
    await client.close();
  }
};
