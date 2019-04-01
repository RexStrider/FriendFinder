const ROUTER = require(`express`).Router();
// const PATH = require(`path`);
const DATA = require(`./../data/friends`);


const attachData = (req, res, next) => {
    req.data = DATA;
    next();
}

const determineCompatability = (user1, user2) => {
    let score = 0;
    for(i in user1) {
        score += Math.abs(user1[i] - user2[i]);
    }
    return score;
}


ROUTER.get(`/`, (req, res) => {
    console.log(`Welcome to the API`);
    res.send(`Welcome to the API`);
});

ROUTER.get(`/friends`, attachData, (req, res) => {
    console.log(req.data);
    // console.log(determineCompatability(req.data[0].scores, req.data[1].scores));
    res.send(req.data);
});

ROUTER.post(`/friends`, attachData, (req, res) => {
    let person = req.body;

    console.log(person);
    DATA.push(person);
    res.json(person);
});

module.exports = ROUTER;