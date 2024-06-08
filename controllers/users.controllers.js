import asynHandler from 'express-async-handler';
import User from '../models/users.js';
const createUser = asynHandler(async (req, res) => {
    const { name, email } = req.body;
    if (await User.findOne({ email })) {
        res.status(400);
        res.json({
            message: 'User already exists'
        });
        return;
    }
    const user = await User.create({
        name,
        email
    });
    res.json(user)
});
const updateUser = asynHandler(async (req, res) => {
    const { name, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        res.json({
            message: 'User not found'
        });
        return;
    }
    user.name = name;
    user.save();
    res.json(user)
});

const deleteUser = asynHandler(async (req, res) => {
    const { id } = req.params;

    if (! await User.findOne({ _id: id })) {
        res.status(400);
        res.json({
            message: 'User not found'
        });
        return;
    }
    await User.deleteOne({ _id: id });
    res.json({
        message: 'User deleted'
    })
});

const getUser = asynHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
        res.status(400);
        res.json({
            message: 'User not found'
        });
        return;
    }
    // console.log(user);
    res.json(user)
});

export {
    createUser,
    updateUser,
    deleteUser,
    getUser
}