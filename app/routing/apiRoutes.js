const ROUTER = require(`express`).Router();
// const PATH = require(`path`);
const DATA = require(`./../data/friends`);

// node module for underscore, convention is to use '_'
// admittedly this is more difficult to read...
const _ = require(`underscore`);

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

const mostCompatable = user => {
    // create shallow copy
    let data = DATA.slice();
 
    let combatScores = [];
    data.forEach((person, index, ary) => {
        // node module underscore contains method for a deep comparison of objects
        // we use the _.isEqual method to determine that the person and the user are not the same
        // this could also be accomplished by comparing against a unique id
        if( ! _.isEqual(person, user)) {
            combatScores.push(
                totalDifference(user.scores, person.scores)
            );
        }
    });
    console.log(combatScores);
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
    // console.log(person);

    mostCompatable(person);

    DATA.push(person);
    res.json(DATA);
});

module.exports = ROUTER;