import { Router } from "express";
import * as homeController from '../controllers/homeController'
import * as addBookController from '../controllers/addBookController'
const router = Router();

router.get('/', homeController.home)
router.get('/mybook', addBookController.addBook )
router.post('/createbook', addBookController.createBook)




export default router;