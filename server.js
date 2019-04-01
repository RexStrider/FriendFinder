const EXPRESS = require(`express`);

const PORT = process.env.PORT || 3000;

const ROUTES = require(`./app`);

const APP = EXPRESS();

APP.use(EXPRESS.urlencoded({ extended: true }));
APP.use(EXPRESS.json());

APP.use(ROUTES);

APP.listen(PORT, () => {
    console.log(`started server on PORT`, PORT);
});
