import { Router } from 'express';

import * as AccountController from './controllers/account';
import * as VerificationController from './controllers/verification';
import * as DefaultController from './controllers/default';

const router = Router();

router.get('/', DefaultController.getDefault);
router.post('/verify/signature', VerificationController.verifySignature);
router.post('/account/balance', AccountController.getBalance);

export default router;
