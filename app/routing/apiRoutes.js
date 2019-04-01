const ROUTER = require(`express`).Router();
const PATH = require(`path`);
const DATA = require(`./../data/friends`);


const ATTACH_DATA = (req, res, next) => {
    req.data = DATA;
    next();
}

ROUTER.get(`/`, (req, res) => {
    console.log(`Welcome to the API`);
    res.send(`Welcome to the API`);
});

ROUTER.get(`/friends`, ATTACH_DATA, (req, res) => {
    console.log(req.data);
    res.send(req.data);
});

ROUTER.post(`/friends`, ATTACH_DATA, (req, res) => {
    let person = req.body;

    console.log(person);
    DATA.push(person);
    res.json(person);
});

module.exports = ROUTER;