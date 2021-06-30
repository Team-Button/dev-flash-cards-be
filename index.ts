import server from "./api/server";
import connect from "./database/connect";
import log from "./logger";

const port = process.env.PORT;
server.listen(port, () => {
  log.info(`\n** Server Running on port ${port} **\n`);
  connect();
});
