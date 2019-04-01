const ROUTER = require(`express`).Router();
const API_ROUTES = require(`./routing/apiRoutes`);
const HTML_ROUTES = require(`./routing/htmlRoutes`);

const PATH = require(`path`);

ROUTER.use(`/api`, API_ROUTES);
ROUTER.use(HTML_ROUTES);

module.exports = ROUTER;