import express from 'express'
const router = express.Router();
import {createUser,updateUser,deleteUser,getUser} from '../controllers/users.controllers.js'
router.post('/add', createUser)
router.put('/update', updateUser)
router.delete('/delete/:id', deleteUser)
router.get('/get/:id', getUser)


export default router;