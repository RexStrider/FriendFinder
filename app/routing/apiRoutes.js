const ROUTER = require(`express`).Router();
const PATH = require(`path`);

let data = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
    }
]

const ATTACH_DATA = (req, res, next) => {
    req.data = data;
    next();
}

ROUTER.get(`/`, ATTACH_DATA, (req, res) => {
    console.log(req.data);
    res.send(req.data);
});

module.exports = ROUTER;