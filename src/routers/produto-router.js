import { Router } from 'express';
import {
    store,
    index
} from '../controllers/produto-controller.js';

const router = Router();

router.post('/', store);
router.get('/', index);

export default router;
