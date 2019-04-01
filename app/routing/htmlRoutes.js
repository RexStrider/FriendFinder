const ROUTER = require(`express`).Router();
const PATH = require(`path`);


ROUTER.get(`/`, (req, res) => {
    res.sendFile(PATH.join(__dirname, `..`, `..`, `index.html`));
});

module.exports = ROUTER;