import { createStrapi } from "@strapi/strapi";

const appDir = process.cwd();

createStrapi({ appDir, distDir: appDir }).start().catch((error: any) => {
  console.error(error);
  process.exitCode = 1;
});