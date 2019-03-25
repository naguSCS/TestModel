var controller = require('./controller');
var express = require('express');
var auth = require('../../middleware/authMiddleware');
var router = express.Router();


/**
 * @api {post} /login
 * Client Login
 * @apiVersion 1.0.0
 * @apiName Client Login
 * @apiGroup Client
 * @apiDescription Client login - login to account
 * 
 * @apiParam (body){String} email Client email
 * @apiParam (body){String} password Client password
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {String} token Client token - expiration time one day
 * {
 *    "token": "23042016MSSSU2-032AE0AA"
 * }
 * 
 * @apiUse internalError
 * @apiUse badRequest
 * @apiUse invalidCredentials
 */
router.post('/login', controller.loginClient);
router.post('/register',controller.registerClient)
/**
 * @api {put} /{clientId}
 * Update Client Info
 * @apiVersion 1.0.0
 * @apiName Update Client
 * @apiGroup Client
 * @apiDescription Client update client - update client info
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiParam (body){String} [email] Client email
 * @apiParam (body){String} [password] Client password
 * @apiParam (body){String} [firstName] Client firstname
 * @apiParam (body){String} [lastName] Client lastname
 * @apiParam (body){String} [phone] Client phone
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Client Updated client
 * {
 *    "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *    "firstName": "John",
 *    "lastName": "Doe",
 *    "phone": "060/123456",
 *    "email": "johndoe@gmail.com",
 *    "password": "a3-xjd=-s,;kfga=dg"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse badRequest
 * @apiUse notAuthorized
 */
// router.put('/:clientId', auth.checkClientToken, auth.checkClientId, controller.updateClient);
router.put('/:clientId', auth.checkClientToken, auth.checkClientId, controller.updateClient);
/*
client forget password
*/
router.post('/forgetpassword', controller.clientforgetpwd);

/*
 client otp details
 */
 router.get('/getdoc',auth.checkClientToken,auth.checkClientId,controller.sendDocuments)
 // router.post('/verifyotp', controller.clientotpdetails);

/*
client reset password
*/

 router.post('/resetpassword', controller.clientresetpwd);

 /*
client change password
*/
router.put('/:clientId/clientchangepassword', auth.checkClientId, auth.checkClientToken,   controller.clientchangepassword);

/**
 * @api {get} /{clientId}/managers
 * Get All Managers
 * @apiVersion 1.0.0
 * @apiName Get All Managers
 * @apiGroup Client
 * @apiDescription Client managers - view all managers
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Managers Managers array
 * [
 *        {
 *           "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *           "firstName": "John",
 *           "lastName": "Doe",
 *           "phone" : "060/123456",
 *           "email": "johndoe@gmail.com",
 *           "password": "a3-xjd=-s,;kfga=dg"
 *        },
 *        {
 *           "_id": "a-d.x-;s-39;x-s9-3la-213",
 *           "firstName": "Jane",
 *           "lastName": "Doe",
 *           "phone" : "060/123456",
 *           "email": "janedoe@gmail.com",
 *           "password": "a3-xjd=-swekfga=123"
 *        }
 * ]
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/managers', auth.checkClientToken, auth.checkClientId, controller.findAllManagers);

/**
 * @api {get} /{clientId}/managers/{managerId}
 * Get Manager By Id
 * @apiVersion 1.0.0
 * @apiName Get Manager By Id
 * @apiGroup Client
 * @apiDescription Client get manager - get manager by id
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} managerId Manager id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Manager Manager object
 * {
 *     "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *     "firstName": "John",
 *     "lastName": "Doe",
 *     "phone" : "060/123456",
 *     "email": "johndoe@gmail.com",
 *     "password": "a3-xjd=-s,;kfga=dg"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/managers/:managerId', auth.checkClientToken, auth.checkClientId, controller.findManagerById);

/**
 * @api {post} /{clientId}/managers
 * Add Manager
 * @apiVersion 1.0.0
 * @apiName Add Manager
 * @apiGroup Client
 * @apiDescription Client add manager - add new manager
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiParam (body){String} email Manager email
 * @apiParam (body){String} password Manager password
 * @apiParam (body){String} firstName Manager firstname
 * @apiParam (body){String} lastName Manager lastname
 * @apiParam (body){String} [phone] Manager phone
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Manager Created manager
 * {
 *    "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *    "firstName": "John",
 *    "lastName": "Doe",
 *    "phone": "060/123456",
 *    "email": "johndoe@gmail.com",
 *    "password": "a3-xjd=-s,;kfga=dg"
 * }
 * 
 * @apiUse internalError
 * @apiUse badRequest
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.post('/:clientId/managers', auth.checkClientToken, auth.checkClientId, controller.registerManager);

/**
 * @api {put} /{clientId}/managers/{managerId}
 * Update Manager
 * @apiVersion 1.0.0
 * @apiName Update Manager
 * @apiGroup Client
 * @apiDescription Client update manager - update existing manager
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} managerId Manager id
 * 
 * @apiParam (body){String} [email] Manager email
 * @apiParam (body){String} [password] Manager password
 * @apiParam (body){String} [firstName] Manager firstname
 * @apiParam (body){String} [lastName] Manager lastname
 * @apiParam (body){String} [phone] Manager phone
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Manager Updated manager
 * {
 *    "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *    "firstName": "John",
 *    "lastName": "Doe",
 *    "phone": "060/123456",
 *    "email": "johndoe@gmail.com",
 *    "password": "a3-xjd=-s,;kfga=dg"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse badRequest
 * @apiUse notAuthorized
 */
router.put('/:clientId/managers/:managerId', auth.checkClientToken, auth.checkClientId, controller.updateManager);

/**
 * @api {delete} /{clientId}/managers/{managerId}
 * Delete Manager
 * @apiVersion 1.0.0
 * @apiName Delete Manager
 * @apiGroup Client
 * @apiDescription Client delete manager - delete existing manager
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} managerId Manager id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.delete('/:clientId/managers/:managerId', auth.checkClientToken, auth.checkClientId, controller.deleteManager);

/**
 * @api {get} /{clientId}/vehicles
 * Get All Vehicles
 * @apiVersion 1.0.0
 * @apiName Get All Vehicles
 * @apiGroup Client
 * @apiDescription Client vehicles - view all vehicles
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Vehicles Vehicles array
 * [
 *        {
 *           "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *           "name": "First bus",
 *           "model": "Mercedes-Benz do Brasil",
 *           "licensePlate" : "NS-123-AD",
 *           "licenseExpireDate": "2019-10-21",
 *           "numberOfSeats": "50",
 *           "productionYear": "2015",
 *           "numberOfKmPassed": "50000"
 *        },
 *        {
 *           "_id": "add.x-;s-39;x-s9-3la-awe",
 *           "name": "Second bus",
 *           "model": "Mercedes-Benz do Brasil",
 *           "licensePlate" : "NS-456-BC",
 *           "licenseExpireDate": "2019-10-21",
 *           "numberOfSeats": "50",
 *           "productionYear": "2015",
 *           "numberOfKmPassed": "55000"
 *        }
 * ]
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/vehicles', auth.checkClientToken, auth.checkClientId, controller.findAllVehicles);

/**
 * @api {get} /{clientId}/vehicles/{vehicleId}
 * Get Vehicle By Id
 * @apiVersion 1.0.0
 * @apiName Get Vehicle By Id
 * @apiGroup Client
 * @apiDescription Client get vehicle - get vehicle with specific id
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} vehicleId Vehicle id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Vehicle Vehicle object
 * {
 *      "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *      "name": "First bus",
 *      "model": "Mercedes-Benz do Brasil",
 *      "licensePlate" : "NS-123-AD",
 *      "licenseExpireDate": "2019-10-21",
 *      "numberOfSeats": "50",
 *      "productionYear": "2015",
 *      "numberOfKmPassed": "50000"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/vehicles/:vehicleId', auth.checkClientToken, auth.checkClientId, controller.findVehicleById);

/**
 * @api {post} /{clientId}/vehicles
 * Add Vehicle
 * @apiVersion 1.0.0
 * @apiName Add Vehicle
 * @apiGroup Client
 * @apiDescription Client add vehicle - add new vehicle
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiParam (body){String} licensePlate Vehicle license plate
 * @apiParam (body){String} licenseExpireDate Vehicle license expire date
 * @apiParam (body){String} numberOfSeats Vehicle number of seats
 * @apiParam (body){String} name Vehicle name
 * @apiParam (body){String} model Vehicle model
 * @apiParam (body){String} [productionYear] Vehicle production year
 * @apiParam (body){String} [numberOfKmPassed] Vehicle numberOfKmPassed
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Manager Created vehicle
 * {
 *      "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *      "name": "First bus",
 *      "model": "Mercedes-Benz do Brasil",
 *      "licensePlate" : "NS-123-AD",
 *      "licenseExpireDate": "2019-10-21",
 *      "numberOfSeats": "50",
 *      "productionYear": "2015",
 *      "numberOfKmPassed": "50000"
 * }
 * 
 * @apiUse internalError
 * @apiUse badRequest
 * @apiUse notFound
 * @apiUse notAuthorized
 * @apiUse alreadyRegistered
 */
router.post('/:clientId/vehicles', auth.checkClientToken, auth.checkClientId, controller.addVehicle);
router.post('/:clientId/vehiclesCategory',auth.checkClientToken, auth.checkClientId, controller.vehiclesCategory);
router.get('/findVehiclesCategory', controller.findvehiclesCategory);

/**
 * @api {put} /{clientId}/vehicles/{vehicleId}
 * Update Vehicle
 * @apiVersion 1.0.0
 * @apiName Update Vehicle
 * @apiGroup Client
 * @apiDescription Client update vehicle - update existing vehicle
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} vehicleId Vehicle id
 * 
 * @apiParam (body){String} [numberOfSeats] Vehicle number of seats
 * @apiParam (body){String} [name] Vehicle name
 * @apiParam (body){String} [model] Vehicle model
 * @apiParam (body){String} [productionYear] Vehicle production year
 * @apiParam (body){String} [numberOfKmPassed] Vehicle numberOfKmPassed
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Vehicle Updated vehicle
 * {
 *      "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *      "name": "First bus",
 *      "model": "Mercedes-Benz do Brasil",
 *      "numberOfSeats": "50",
 *      "productionYear": "2015",
 *      "numberOfKmPassed": "50000"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.put('/:clientId/vehicles/:vehicleId', auth.checkClientToken, auth.checkClientId, controller.updateVehicle);

/**
 * @api {delete} /{clientId}/vehicles/{vehicleId}
 * Delete Vehicle
 * @apiVersion 1.0.0
 * @apiName Delete Vehicle
 * @apiGroup Client
 * @apiDescription Client delete vehicle - delete existing vehicle
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} vehicleId Vehicle id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.delete('/:clientId/vehicles/:vehicleId', auth.checkClientToken, auth.checkClientId, controller.deleteVehicle);

/**
 * @api {get} /{clientId}/vehicles/{vehicleId}/expenses
 * Get All Expenses For Vehicle
 * @apiVersion 1.0.0
 * @apiName Get All Expenses For Vehicle
 * @apiGroup Client
 * @apiDescription CLient get all vehicle expenses - get all expenses for specific vehicle
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} vehicleId Vehicle id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Expenses All expenses for vehicle
 * [
 *      {
 *          "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *          "name": "firstExpense",
 *          "amount": "1000.00",
 *          "vehicleId" : "awadx-;s-39;x-s9-3la-fff",
 *          "date": "2018-03-01"
 *      },
 *      {
 *          "_id": "aas-;s-39;x-s9-3la-fwirw",
 *          "name": "secondExpense",
 *          "amount": "1500.00",
 *          "vehicleId" : "awadx-;s-39;x-s9-3la-fff",
 *          "date": "2018-03-01"
 *      },
 * ]
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/vehicles/:vehicleId/expenses', auth.checkClientToken, auth.checkClientId, controller.getExpensesForVehicle);

/**
 * @api {get} /{clientId}/drivers
 * Get All Drivers
 * @apiVersion 1.0.0
 * @apiName Get All Drivers
 * @apiGroup Client
 * @apiDescription Client drivers - view all drivers
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Drivers Drivers array
 * [
 *        {
 *           "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *           "firstName": "Driver",
 *           "lastName": "One",
 *           "email" : "driverone@gmail.com",
 *           "phone": "0600123456",
 *           "address": "St. Joseph's Boulevard 50"
 *        },
 *        {
 *           "_id": "a-d.x-;flow1-s9-3la-aswsq",
 *           "firstName": "Driver",
 *           "lastName": "Two",
 *           "email" : "drivertwo@gmail.com",
 *           "phone": "0600234567",
 *           "address": "St. Joseph's Boulevard 50"
 *        }
 * ]
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/drivers', auth.checkClientToken, auth.checkClientId, controller.findAllDrivers);

/**
 * @api {get} /{clientId}/drivers/{driverId}
 * Get Driver By Id
 * @apiVersion 1.0.0
 * @apiName Get Driver By Id
 * @apiGroup Client
 * @apiDescription Client get driver - get driver with specific id
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} driverId Driver id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Driver Driver object
 * {
 *      "_id": "a-d.x-;flow1-s9-3la-aswsq",
 *      "firstName": "Driver",
 *      "lastName": "Two",
 *      "email" : "drivertwo@gmail.com",
 *      "phone": "0600234567",
 *      "address": "St. Joseph's Boulevard 50"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/drivers/:driverId', auth.checkClientToken, auth.checkClientId, controller.findDriverById);

/**
 * @api {post} /{clientId}/drivers
 * Add Driver
 * @apiVersion 1.0.0
 * @apiName Add Driver
 * @apiGroup Client
 * @apiDescription Client add driver - add new driver
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiParam (body){String} firstName Driver firstname
 * @apiParam (body){String} lastName Driver lastname
 * @apiParam (body){String} email Driver email
 * @apiParam (body){String} phone Driver phone
 * @apiParam (body){String} [address] Driver address
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Driver Created driver
 * {
 *      "_id": "a-d.x-;flow1-s9-3la-aswsq",
 *      "firstName": "Driver",
 *      "lastName": "Three",
 *      "email" : "driverthree@gmail.com",
 *      "phone": "0600345678",
 *      "address": "St. Joseph's Boulevard 50"
 * }
 * 
 * @apiUse internalError
 * @apiUse badRequest
 * @apiUse notAuthorized
 * @apiUse alreadyRegistered
 */
router.post('/:clientId/drivers', auth.checkClientToken, auth.checkClientId, controller.addDriver);

/**
 * @api {put} /{clientId}/drivers/{driverId}
 * Update Driver
 * @apiVersion 1.0.0
 * @apiName Update Driver
 * @apiGroup Client
 * @apiDescription Client update driver - update existing driver
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} driverId Driver id
 * 
 * @apiParam (body){String} [firstName] Driver firstname
 * @apiParam (body){String} [lastName] Driver lastname
 * @apiParam (body){String} [email] Driver email
 * @apiParam (body){String} [phone] Driver phone
 * @apiParam (body){String} [address] Driver address
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Object} Driver Updated driver
 * {
 *      "_id": "a-d.x-;flow1-s9-3la-aswsq",
 *      "firstName": "Driver",
 *      "lastName": "Four",
 *      "email" : "driverfour@gmail.com",
 *      "phone": "0600234567",
 *      "address": "St. Joseph's Boulevard 50"
 * }
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse badRequest
 * @apiUse notAuthorized
 */
router.put('/:clientId/drivers/:driverId', auth.checkClientToken, auth.checkClientId, controller.updateDriver);

/**
 * @api {delete} /{clientId}/drivers/{driverId}
 * Delete Driver
 * @apiVersion 1.0.0
 * @apiName Delete Driver
 * @apiGroup Client
 * @apiDescription Client delete driver - delete existing driver
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} driverId Driver id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.delete('/:clientId/drivers/:driverId', auth.checkClientToken, auth.checkClientId, controller.deleteDriver);

/**
 * @api {get} /{clientId}/finishedDestinations
 * Get All Finished Destinations
 * @apiVersion 1.0.0
 * @apiName Get All Finished Destinations
 * @apiGroup Client
 * @apiDescription Client get all finished destinations - get only finished destinations
 * 
 * @apiParam (path){String} clientId Client id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} destinations Destinations array
 * [
 *        {
 *           "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *           "firstName": "Driver",
 *           "lastName": "One",
 *           "email" : "driverone@gmail.com",
 *           "phone": "0600123456",
 *           "address": "St. Joseph's Boulevard 50"
 *        },
 *        {
 *           "_id": "a-d.x-;flow1-s9-3la-aswsq",
 *           "firstName": "Driver",
 *           "lastName": "Two",
 *           "email" : "drivertwo@gmail.com",
 *           "phone": "0600234567",
 *           "address": "St. Joseph's Boulevard 50"
 *        }
 * ]
 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
router.get('/:clientId/finishedDestinations', auth.checkClientToken, auth.checkClientId, controller.findAllFinishedDestinations);

/**
 * @api {get} /{clientId}/destinationRequests/{destinationId}
 * Get All Requests For Destination
 * @apiVersion 1.0.0
 * @apiName Get All Requests For Destination
 * @apiGroup Client
 * @apiDescription Client get all requests for destination - get all requests for destination
 * 
 * @apiParam (path){String} clientId Client id
 * @apiParam (path){String} destinationId Destination id
 * 
 * @apiSuccess {Number} HttpStatus 200 if everything is ok
 * @apiSuccess {Array} Requests Requests for destination
 * [
 *      {
 *          "_id": "a-d.x-;s-39;x-s9-3la-fl2",
 *          "firstName": "John",
 *          "lastName": "Doe",
 *          "phone": "060/123456",
 *          "email": "johndoe@gmail.com",
 *          "password": "a3-xjd=-s,;kfga=dg"
 *      },
 *      {
 *          "_id": "aasdfse-39;x-s9-3la-fl2",
 *          "firstName": "Johna",
 *          "lastName": "Doe",
 *          "phone": "060/234567",
 *          "email": "johnadoe@gmail.com",
 *          "password": "a3-asdfxjd=-s,;kfga=dg"
 *      }
 * ]


 * 
 * @apiUse internalError
 * @apiUse notFound
 * @apiUse notAuthorized
 */
 //admin pament urls
router.get('/:clientId/getallPayments',auth.checkClientId, auth.checkClientToken,controller.getAllPayments);
 router.post('/:clientId/getuserPayments',auth.checkClientId, auth.checkClientToken,auth.checkClientId, auth.checkClientToken,controller.getuserPayments);
  router.post('/:clientId/getpaymentsbyid',auth.checkClientId, auth.checkClientToken,controller.getpaymentsbyid);

 router.get('/:clientId/findTrasactins',auth.checkClientId, auth.checkClientToken,controller.findTrasactins);
router.post('/:clientId/findTrasactinsbetweendates',auth.checkClientId, auth.checkClientToken,controller.findTrasactinsbetweendates)



  //find all acconts details
  router.get('/:clientId/getAllAccountspayments',controller.getAllAccountspayments);
  //getting account balance from accountSchema
  router.get('/:clientId/findAccountsTrasactinsById',controller.findAccountsTrasactinsById);
//get all data by role
 router.post('/:clientId/getallAccountsByRole',controller.getallAccountsByRole);
 //get payment by role and ID
 router.post('/:clientId/getAccountsById',controller.getAccountsById);

 router.post('/:clientId/findAccountsDatabetweendates',controller.findAccountsDatabetweendates)


//getting deposits balance from accountSchema

  router.get('/:clientId/findDepositTrasactinsById',controller.findDepositTrasactinsById);
  //find all acconts details
  router.get('/:clientId/getAllDepositspayments',controller.getAllDepositspayments);
//get all data by role
 router.post('/:clientId/getallDepositsByRole',controller.getallDepositsByRole);
 //get payment by role and ID
 router.post('/:clientId/getDepositsById',controller.getDepositsById);

 router.post('/:clientId/findDepositsDatabetweendates',controller.findDepositsDatabetweendates)


 //end



router.get('/:clientId/destinationRequests/:destinationId', auth.checkClientId, auth.checkClientToken, controller.findAllRequestsByDestination);
router.post('/:clientId/approvedriver',auth.checkClientId,auth.checkClientToken,controller.approvedriver);
router.post('/:clientId/rejectdriver',auth.checkClientToken,auth.checkClientId,controller.rejectdriver);
router.post('/:clientId/finalaccept',auth.checkClientToken,auth.checkClientId,controller.finalaccept);
router.get('/:clientId/users',auth.checkClientToken,auth.checkClientId,controller.getAllusers);
router.get('/:clientId/driver/:driverId/driverdetails', auth.checkClientToken, auth.checkClientId, controller.driverdetails);
router.get('/:clientId/summary', auth.checkClientToken,auth.checkClientId, controller.clientsummary);
router.post('/:clientId/addgoods',auth.checkClientId, auth.checkClientToken,controller.goods);
router.put('/:clientId/updategoods/:goodsId',auth.checkClientId, auth.checkClientToken,controller.updateGoods);
router.delete('/:clientId/deletegoods/:goodsId',auth.checkClientId, auth.checkClientToken,controller.deleteGoods);
router.get('/:clientId/findallgoods',auth.checkClientId, auth.checkClientToken,controller.findallgoods);
router.get('/getstates/:con_id',controller.getstates);
router.get('/getcities/:state_id',controller.getcities);
router.post('/:clientId/insertnotice',auth.checkClientId, auth.checkClientToken,controller.insertnotice); 
router.get('/:clientId/getnotice/:usertype',auth.checkClientId, auth.checkClientToken,controller.gettnotice);
router.post('/:clientId/getmanagerservicesroutes',auth.checkClientId, auth.checkClientToken,auth.checkClientToken,auth.checkClientId,controller.getmanagerservicesroutes);
router.get('/:clientId/getallsettings',auth.checkClientId, auth.checkClientToken,controller.getallsettings);


router.post('/:clientId/addSettings',auth.checkClientId, auth.checkClientToken,controller.addSettings);
router.post('/:clientId/approvemanagerdoc',auth.checkClientId, auth.checkClientToken,auth.checkClientToken,auth.checkClientId,controller.approvemanagervehicledocs);
router.post('/:clientId/rejectvehicledoc',auth.checkClientId, auth.checkClientToken,auth.checkClientToken,auth.checkClientId,controller.rejectmanagervehicledocs);
router.get('/:clientId/checktoken',auth.checkClientId, auth.checkClientToken,auth.checkClientId,auth.checkClientToken,controller.validatetoken);


//complaints
router.get('/:clientId/getallcomplaints',auth.checkClientId, auth.checkClientToken,controller.getallcomplaints);
router.get('/:clientId/getallvehicles',auth.checkClientId, auth.checkClientToken,controller.getAllVehicles);


logger.info('loaded CLIENT routes');

module.exports = router;
