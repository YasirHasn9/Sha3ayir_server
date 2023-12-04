import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /healthCheck:
 *   get:
 *     description: Get the health status
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 */
router.get('/healthCheck', (_, res) => {
  res.status(200).send({
    status: 'hello',
  });
});

export default router;
