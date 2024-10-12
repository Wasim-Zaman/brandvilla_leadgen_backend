/**
 * @swagger
 * tags:
 *   name: Service
 *   description: Service management
 */

/**
 * @swagger
 * /api/service/v1/service:
 *   post:
 *     summary: Create a new service
 *     tags: [Service]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - amount
 *               - sample_type
 *               - age_group
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               amount:
 *                 type: number
 *               discount:
 *                 type: number
 *               fasting_time:
 *                 type: string
 *               result_duration:
 *                 type: string
 *               sample_type:
 *                 type: string
 *               age_group:
 *                 type: string
 *               home_sample_collection:
 *                 type: string
 *     responses:
 *       201:
 *         description: Service created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceResponse'
 *   get:
 *     summary: Get all services
 *     tags: [Service]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: Search query for name or description
 *     responses:
 *       200:
 *         description: Services retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServicesResponse'
 *
 * /api/service/v1/service/{id}:
 *   get:
 *     summary: Get service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceResponse'
 *   put:
 *     summary: Update service by ID
 *     tags: [Service]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               amount:
 *                 type: number
 *               discount:
 *                 type: number
 *               fasting_time:
 *                 type: string
 *               result_duration:
 *                 type: string
 *               sample_type:
 *                 type: string
 *               age_group:
 *                 type: string
 *               home_sample_collection:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Service updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceResponse'
 *   delete:
 *     summary: Delete service by ID
 *     tags: [Service]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         amount:
 *           type: number
 *         discount:
 *           type: number
 *         fasting_time:
 *           type: string
 *         result_duration:
 *           type: string
 *         sample_type:
 *           type: string
 *         age_group:
 *           type: string
 *         home_sample_collection:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     ServiceResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           example: 200
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/Service'
 *     ServicesResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           example: 200
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 *             totalPages:
 *               type: integer
 *             currentPage:
 *               type: integer
 *             totalServices:
 *               type: integer
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           example: 200
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 */
