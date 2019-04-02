const ROUTER = require(`express`).Router();
// const PATH = require(`path`);
const DATA = require(`./../data/friends`);


const attachData = (req, res, next) => {
    req.data = DATA;
    next();
}

const totalDifference = (user1, user2) => {
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
    res.send(req.data);
});

ROUTER.post(`/friends`, attachData, (req, res) => {
    let data = Object.values(req.body);
    let scores = [];
    data.forEach((item, index, ary) => {
        scores.push(parseInt(item));
    });

    let person = {
        name: `Bob`,
        photo: `http://www.game-insight.com/files/RU/Games/GI_Airport_City/iPhone/Arts/builder.jpg`,
        scores
    } 
    console.log(person);
    DATA.push(person);
    res.json(DATA);
});

module.exports = ROUTER;