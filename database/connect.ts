import mongoose from "mongoose";
import log from "../logger";

function connect() {
  const dbUri = process.env.MONGODB as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("MongoDB Connected");
    })
    .catch((error) => {
      log.error("MongoDB error", error);
      process.exit(1);
    });
}

export default connect;
