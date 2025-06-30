import customerData from '../data/customerData.js';

export const getAllUsers = (req, res) => {
    res.json(customerData.users);
};

export const getUserById = (req, res) => {
    const userId = req.params.id;
    const user = customerData.users.find(user => user.id === userId);
    res.json(user);

    if (getUserById.length === 0) {
        res.status(404).json({ message: 'No users found' });
    } else {
        res.json(getUserById);
    };
};