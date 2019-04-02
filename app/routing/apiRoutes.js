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
    let person = Object.values(req.body);
    // person = {
    //     name: person.name,
    //     photo: person.photo,
    //     scores: [
    //         parseInt(person.q1),
    //         parseInt(person.q2),
    //         parseInt(person.q3),
    //         parseInt(person.q4),
    //         parseInt(person.q5),
    //         parseInt(person.q6),
    //         parseInt(person.q7),
    //         parseInt(person.q8),
    //         parseInt(person.q9),
    //         parseInt(person.q10)
    //     ]
    // };

    console.log(person);
    DATA.push(person);
    res.json(DATA);
});

module.exports = ROUTER;