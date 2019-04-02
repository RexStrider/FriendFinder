const _ = require(`underscore`);

const ROUTER = require(`express`).Router();
// const PATH = require(`path`);
const FRIENDS = require(`./../data/friends`);

const attachData = (req, res, next) => {
    req.friends = FRIENDS;
    next();
}

ROUTER.get(`/`, (req, res) => {
    console.log(`Welcome to the API`);
    res.send(`Welcome to the API`);
});

ROUTER.get(`/friends`, attachData, (req, res) => {
    console.log(req.friends);
    res.send(req.friends);
});

ROUTER.post(`/friends`, attachData, (req, res) => {
    // let friends = req.body;
    let closestFriend = 50;
    let closestFriendIndex = -1;
    FRIENDS.forEach( (friend, index) => {
        // if ( ! _.isEqual(friend, req.body)) {
        const formula = (accum, curr) => parseInt(accum) + parseInt(curr);

        const score = friend.scores.reduce( formula );
        const otherScore = req.body.scores.reduce( formula );

        const diff = Math.abs(score - otherScore);

        if (closestFriend > diff) {
            closestFriend = diff;
            closestFriendIndex = index;
        }
        console.log(score, otherScore);
        // }
    });

    console.log(`index: ${closestFriendIndex}`, `|`, `score: ${closestFriend}`);
    
    FRIENDS.push(req.body);
    res.json(FRIENDS[closestFriendIndex]);
});

module.exports = ROUTER;