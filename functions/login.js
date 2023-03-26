import * as dotenv from "dotenv";
dotenv.config();

export const handler = async (event, context) => {
  const { username, password } = event.queryStringParameters;
  if (
    username.toLowerCase() === process.env.USER &&
    password === process.env.PASSWORD
  ) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        login: true
      })
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({
        login: false
      })
    };
  }
};
