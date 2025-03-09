import { createRouteHandler } from "uploadthing/next";
import { fileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: fileRouter,
  config: {
    callbackUrl: process.env.UPLOADTHING_CALLBACK_URL,
  }
});
