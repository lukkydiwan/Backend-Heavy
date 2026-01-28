import express from 'express'
import {authMiddleware} from '../middleware/auth.middleware.js'
import {createTask, getTasks, updateTask, deleteTask} from '../controller/task.controller.js'

const router = express.Router()
router.use(authMiddleware)
router
    .post('/', createTask)
    .get('/', getTasks)
    .put('/:id', updateTask)
    .delete('/:id', deleteTask)

export default router