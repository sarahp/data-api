import customerData from '../data/customerData.js';

export const getAllCompanies = (req, res) => {
    res.json(customerData.company);
};

export const getCompanyUsers = (req, res) => {
    const companyId = req.params.companyId;
    const company = customerData.company.find(company => company.id === companyId);
    res.json(company.users);

    if (getCompanyUsers.length === 0) {
        res.status(404).json({ message: 'No users found' });
    } else {
        res.json(getCompanyUsers);
    };
};


