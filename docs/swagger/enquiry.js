/**
 * @swagger
 * tags:
 *   name: Enquiry
 *   description: Enquiry management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Enquiry:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         enquiry:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         formated_date:
 *           type: string
 *         image:
 *           type: string
 *         status:
 *           type: string
 *         remarks:
 *           type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     EnquiryInput:
 *       type: object
 *       required:
 *         - phoneNumber
 *       properties:
 *         enquiry:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         formated_date:
 *           type: string
 *         status:
 *           type: string
 *         remarks:
 *           type: string
 *     PaginatedEnquiriesResponse:
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
 *                 $ref: '#/components/schemas/Enquiry'
 *             totalPages:
 *               type: integer
 *             currentPage:
 *               type: integer
 *             totalEnquiries:
 *               type: integer
 */

/**
 * @swagger
 * /api/enquiry/v1/enquiries:
 *   post:
 *     summary: Create a new enquiry
 *     tags: [Enquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               enquiry:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               formated_date:
 *                 type: string
 *               status:
 *                 type: string
 *               remarks:
 *                 type: string
 *     responses:
 *       201:
 *         description: Enquiry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Enquiry'
 *       400:
 *         description: Bad request
 *
 *   get:
 *     summary: Get all enquiries with pagination
 *     tags: [Enquiry]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedEnquiriesResponse'
 *       404:
 *         description: No enquiries found
 *
 * /api/enquiry/v1/enquiries/{id}:
 *   get:
 *     summary: Get an enquiry by ID
 *     tags: [Enquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Enquiry'
 *       404:
 *         description: Enquiry not found
 *
 *   put:
 *     summary: Update an enquiry by ID
 *     tags: [Enquiry]
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
 *               image:
 *                 type: string
 *                 format: binary
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               enquiry:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               formated_date:
 *                 type: string
 *               status:
 *                 type: string
 *               remarks:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enquiry updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Enquiry'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Enquiry not found
 *
 *   delete:
 *     summary: Delete an enquiry by ID
 *     tags: [Enquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enquiry deleted successfully
 *       404:
 *         description: Enquiry not found
 */
