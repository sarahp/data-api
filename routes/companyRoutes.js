import express from 'express';
import { getAllCompanies, getCompanyUsers } from '../controllers/companyController.js';

const router = express.Router();

router.get('/', getAllCompanies);
router.get('/:companyId/users', getCompanyUsers);

export default router;
