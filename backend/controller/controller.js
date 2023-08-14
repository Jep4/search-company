// CONTROLLER

const { CompanyStat } = require('../data');
const { wrapEHandler } = require("../util");

async function getAll(req, res) {
    const result = await CompanyStat.findAll();
    res.status(200).json({result})
}

async function insertUpdate(req, res) {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({
            error: 'name cannot be null'
        })
        return; 
    }

    const count = await CompanyStat.count({ where: { name } })

    if (count == 0) {
        await CompanyStat.create(req.body);
    }
    else {
        await CompanyStat.update(req.body, { where: { name } });
    }
    res.status(200).json({ result: 'insert / update success' });
}

async function remove(req, res) {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ error: 'name is required' });
        return;
    }

    await CompanyStat.destroy({
        where: {
            name
        },
    });

    res.status(200).json({ result: 'delete success' });
}

module.exports = wrapEHandler({
    getAll,
    insertUpdate,
    remove
});