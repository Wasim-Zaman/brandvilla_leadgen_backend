/**
 * @swagger
 * tags:
 *   name: Poster
 *   description: Poster management
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/poster/v1/poster:
 *   post:
 *     summary: Create a new poster
 *     tags: [Poster]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/PosterInput'
 *     responses:
 *       201:
 *         description: Poster created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PosterResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *
 * /api/poster/v1/posters:
 *   get:
 *     summary: Get all posters
 *     tags: [Poster]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Posters retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostersResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 * /api/poster/v1/poster/{id}:
 *   get:
 *     summary: Get a poster by ID
 *     tags: [Poster]
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
 *         description: Poster found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PosterResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *   put:
 *     summary: Update a poster
 *     tags: [Poster]
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
 *             $ref: '#/components/schemas/PosterInput'
 *     responses:
 *       200:
 *         description: Poster updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PosterResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *   delete:
 *     summary: Delete a poster
 *     tags: [Poster]
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
 *         description: Poster deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 * /api/poster/v1/posters/category/{categoryId}:
 *   get:
 *     summary: Get all posters by category ID
 *     tags: [Poster]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Posters retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostersResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 * /api/poster/v1/posters/category/name/{categoryName}:
 *   get:
 *     summary: Get all posters by category name
 *     tags: [Poster]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Posters retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostersResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PosterInput:
 *       type: object
 *       required:
 *         - categoryId
 *         - image
 *       properties:
 *         categoryId:
 *           type: string
 *         image:
 *           type: string
 *           format: binary
 *     Poster:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         categoryId:
 *           type: string
 *         image:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         category:
 *           $ref: '#/components/schemas/Category'
 *     PosterResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/Poster'
 *     PostersResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Poster'
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *   responses:
 *     BadRequest:
 *       description: Bad request
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *     Unauthorized:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *     Forbidden:
 *       description: Forbidden
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *     NotFound:
 *       description: Not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 */
