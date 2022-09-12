import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { KeystoneConfig } from "@keystone-next/types";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/sick-fits-keystone";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
  },
  lists: createSchema({}),
  ui: {
    isAccessAllowed: () => true,
  },
});
