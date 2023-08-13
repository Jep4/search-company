
const express = require('express');
const bodyParser = require('body-parser');
const statController = require('./controller/controller');
const { sequelize } = require('./data');
const React = require('react');
const fs = require("fs");
const ReactDOMServer = require('react-dom/server');
const path = require("path");
const process = require("process");

const HomePage = require('./pages/index.jsx').default;
process.env.NODE_ENV = 'production';

require('@babel/register')({
    presets: ['@babel/preset-react', '@babel/preset-env'],
});

async function launchServer() {

    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        console.log('App running in production mode');
    }

    const app = express();
    app.use(bodyParser.json());

    app.use(express.static(__dirname));

    app.get('/', (req, res) => {
        const html = ReactDOMServer.renderToString(React.createElement(HomePage));

        const content = fs
            .readFileSync(path.resolve(__dirname, "index.html"))
            .toString()
            .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
            .replace("</body>", '<script src="/bundle.js"></script></body>');

        res.send(content);
    });

    try {
        //await: wait until asynchronize function
        await sequelize.sync(); //synchronization
        console.log("Database ready");
    }
    catch (error) {
        console.log(error);
    }

    const port = 8080; // Make 8080 as a default PORT 
    app.listen(port, () => {
        console.log(`server on port: ${port}`);
    });

    app.get('/info', statController.getAll);
    app.post('/info', statController.insertUpdate);
    app.delete('/info', statController.remove);
}

launchServer();