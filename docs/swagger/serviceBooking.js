/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceBooking:
 *       type: object
 *       required:
 *         - patientName
 *         - mobileNumber
 *         - preference
 *         - date
 *         - time
 *         - paymentType
 *         - totalPrice
 *         - serviceId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the service booking
 *         patientName:
 *           type: string
 *           description: The name of the patient
 *         mobileNumber:
 *           type: string
 *           description: The mobile number of the patient
 *         preference:
 *           type: string
 *           enum: [LAB_VISIT, HOME_SAMPLE, CLINIC]
 *           description: The preference for the service booking
 *         address:
 *           type: string
 *           description: The address for home sample collection (optional)
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the service booking
 *         time:
 *           type: string
 *           description: The time of the service booking
 *         paymentType:
 *           type: string
 *           enum: [ONLINE, CASH]
 *           description: The payment type for the service booking
 *         totalPrice:
 *           type: number
 *           description: The total price of the service booking
 *         status:
 *           type: string
 *           enum: [COMPLETED, PENDING, CANCELLED]
 *           description: The status of the service booking
 *         serviceId:
 *           type: string
 *           description: The id of the associated service
 *         user:
 *           type: string
 *           description: The id of the user who made the booking
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the booking was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of when the booking was last updated
 *
 *   responses:
 *     ServiceBookingResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: number
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/ServiceBooking'
 *
 * /api/service-bookings/create-service-booking:
 *   post:
 *     summary: Create a new service booking
 *     tags: [ServiceBookings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiceBooking'
 *     responses:
 *       201:
 *         description: Service booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/ServiceBookingResponse'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *
 * /api/service-bookings/get-user-service-bookings:
 *   get:
 *     summary: Get user service bookings
 *     tags: [ServiceBookings]
 *     security:
 *       - bearerAuth: []
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
 *     responses:
 *       200:
 *         description: User service bookings retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/ServiceBooking'
 *                     totalPages:
 *                       type: number
 *                     currentPage:
 *                       type: number
 *                     totalServiceBookings:
 *                       type: number
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No service bookings found for this user
 *
 * /api/service-bookings/get-service-bookings:
 *   get:
 *     summary: Get all service bookings with pagination
 *     tags: [ServiceBookings]
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
 *         description: Search query
 *     responses:
 *       200:
 *         description: Service bookings retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/ServiceBooking'
 *                     totalPages:
 *                       type: number
 *                     currentPage:
 *                       type: number
 *                     totalServiceBookings:
 *                       type: number
 *       404:
 *         description: No service bookings found
 *
 * /api/service-bookings/get-service-booking/{id}:
 *   get:
 *     summary: Get service booking by ID
 *     tags: [ServiceBookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service booking ID
 *     responses:
 *       200:
 *         description: Service booking found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/ServiceBookingResponse'
 *       404:
 *         description: Service booking not found
 *
 * /api/service-bookings/update-service-booking/{id}:
 *   put:
 *     summary: Update service booking by ID
 *     tags: [ServiceBookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiceBooking'
 *     responses:
 *       200:
 *         description: Service booking updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/ServiceBookingResponse'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Service booking not found
 *
 * /api/service-bookings/update-service-booking-status/{id}:
 *   put:
 *     summary: Update service booking status
 *     tags: [ServiceBookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [COMPLETED, PENDING, CANCELLED]
 *     responses:
 *       200:
 *         description: Service booking status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/ServiceBookingResponse'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Service booking not found
 *
 * /api/service-bookings/delete-service-booking/{id}:
 *   delete:
 *     summary: Delete service booking by ID
 *     tags: [ServiceBookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service booking ID
 *     responses:
 *       200:
 *         description: Service booking deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Service booking not found
 */
