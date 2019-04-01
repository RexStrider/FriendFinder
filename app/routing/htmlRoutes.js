const ROUTER = require(`express`).Router();
const PATH = require(`path`);


ROUTER.get(`/`, (req, res) => {
    res.sendFile(PATH.join(__dirname, `..`, `public`, `home.html`));
});

module.exports = ROUTER;