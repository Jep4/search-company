
const express = require('express');
const bodyParser = require('body-parser');
const statController = require('./controller/controller');
const { sequelize } = require('./data');
process.env.NODE_ENV = 'production';

async function launchServer() {

    const app = express();
    app.use(bodyParser.json());

    app.use(express.static(__dirname));

    app.get('/', (req, res) => {
        res.send("Database");
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