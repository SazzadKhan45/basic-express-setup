import dotenv from "dotenv";
import path from "path";

//
dotenv.config({ path: path.join(process.cwd(), ".env") });

// Config files
const config = {
  port: process.env.PORT,
};

// default export
export default config;
