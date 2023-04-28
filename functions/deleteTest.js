import { MongoClient, ObjectId } from "mongodb";

const [MONGO_USER, MONGO_PASSWORD] = [
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD
];
const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@pakjms-apps.zywf02i.mongodb.net/?retryWrites=true&w=majority`;

export const handler = async event => {
  const { classId, testId } = event.queryStringParameters;
  const testObjId = new ObjectId(testId);
  const client = new MongoClient(mongoUrl);

  try {
    const db = client.db("tests-management");
    await db.collection(`class-${classId}`).deleteOne({ _id: testObjId });

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Test has been deleted",
        status: 200
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: "Something went wrong while deleting the test",
        status: 500
      })
    };
  } finally {
    await client.close();
  }
};
