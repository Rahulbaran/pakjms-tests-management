import { MongoClient } from "mongodb";

const [MONGO_USER, MONGO_PASSWORD] = [
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD
];
const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@pakjms-apps.zywf02i.mongodb.net/?retryWrites=true&w=majority`;

export const handler = async event => {
  const student = JSON.parse(event.body);
  const client = new MongoClient(mongoUrl);

  try {
    const db = client.db("tests-management");
    await db
      .collection("students")
      .insertOne({ student_name: student.name, class_name: student.class });

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Student has been added", status: 200 })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: "Student has not been successfully added",
        status: 500
      })
    };
  } finally {
    await client.close();
  }
};
