
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./data/data_index.js');


async function launchServer() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.json({ message: 'hello world' });
    });

    try {
        //await: wait until asynchronize function
        await sequelize.sync(); //synchronization
        console.log("Database ready");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const port = process.env.PORT || 8080; // Make 8080 as a default PORT 
app.listen(port, () => {
    console.log(`server on port: ${port}`);
})

launchServer();