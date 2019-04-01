const ROUTER = require(`express`).Router();
const PATH = require(`path`);
const DATA = require(`./../data/friends`);


const ATTACH_DATA = (req, res, next) => {
    req.data = DATA;
    next();
}

ROUTER.get(`/`, ATTACH_DATA, (req, res) => {
    console.log(req.data);
    res.send(req.data);
});

module.exports = ROUTER;