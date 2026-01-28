import express from "express";
import {authMiddleware} from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { getAllUsers } from "../controller/admin.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin-only APIs
 */

router.use(authMiddleware);
router.use(roleMiddleware("admin"));

/**
 * @swagger
 * /api/v1/admin/users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       403:
 *         description: Access denied
 */
router.get("/users", getAllUsers);

export default router;
