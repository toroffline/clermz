const { createStrapi } = require("@strapi/strapi");

// Keep Strapi's dynamically loaded plugins and providers in the function trace.
require.resolve("@strapi/content-manager/strapi-server");
require.resolve("@strapi/content-type-builder/strapi-server");
require.resolve("@strapi/email/strapi-server");
require.resolve("@strapi/upload/strapi-server");
require.resolve("@strapi/i18n/strapi-server");
require.resolve("@strapi/content-releases/strapi-server");
require.resolve("@strapi/review-workflows/strapi-server");
require.resolve("@strapi/plugin-users-permissions/strapi-server");
require.resolve("@strapi/provider-email-sendmail");
require.resolve("strapi-provider-upload-supabase");

let requestHandler;

module.exports = async function handleRequest(req, res) {
  requestHandler ??= createStrapi({ appDir: __dirname, distDir: __dirname })
    .load()
    .then((strapi) => {
      strapi.server.mount();
      return strapi.server.app.callback();
    });

  const handle = await requestHandler;
  return handle(req, res);
};
