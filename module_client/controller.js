var clientModel = require('../../model/client/clintDetailsmodel');
var vehicleModel = require('../../model/vehicle/vehiclemodel');
var categorySchema = require('../../model/vehicle/vehicleCategorymodel');
var driverModel = require('../../model/driver/model');
var managerModel = require('../../model/manager/managerDetailmodel');
var expenseModel = require('../../model/vehicleExpense/model');
var destinationModel = require('../../model/destination/model');
var requestModel = require('../../model/destinationRequest/model');
var clientModel1 = require('../../model/client/clientGoodsmodel');
var notificationModel = require('../../model/notification/model');
var otpGenerator = require('otp-generator')
var isEmail = require('validator/lib/isEmail');
var logger = require('../../lib/logger');
var userModel=require('../../model/user/userDetailmodel');
const yourhandle = require('../../country-state-city');
var NoticeSchema = require('../../model/client/clientNoticemodel');
var SettingsModel = require('../../model/settings/settingsModel');
var complaints = require('../../model/complaints/complaintsModel');
const transactionHistory=require('../../model/userpayment/transactionHistoryModel')
var depositModel=require('../../model/userpayment/depositModel')

var vehicleModel1 = require('../../model/vehicle/vehicleManagermodel');

// Client functions

/**
 * Client Login
 * @param req
 * @param res
 * @param next
 */
 exports.addSettings = function(req, res, next){
    SettingsModel.addAuthSettings(req.body).then(function(data){
        res.json(data);
    }).fail(function(err){
        return next(err);
    });
}
 exports.getallsettings = function(req, res, next){
  
    SettingsModel.findAllSettingsTypes().then(function(data){
        res.json(data);
    }).fail(function(err){
        return next(err);
    });
}
 exports.getAllPayments = function(req, res, next){
  
  transactionHistory.getAllpaymnets().then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });
}


 exports.getallcomplaints = function(req, res, next){
  

  complaints.sendAllcomplaints(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });


  if(req.body.complaintTypename=="manager"){
  complaints.sendAllManagercomplaints(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

   if(req.body.complaintTypename=="driver"){
  complaints.sendAllDrivercomplaints(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
     if(req.body.complaintTypename=="deposit"){
  complaints.sendAllDepositcomplaints(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.complaintTypename=="user"){
  complaints.sendAllUsercomplaints(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }



}


      exports.findTrasactins=function(req,res,next){
        transactionHistory.findUserTrasactins(req.params).then((data)=>{
           res.json(data)

         })
      }

      exports.getAllDepositspayments = function(req, res, next){
  
  depositModel.getAllDeposits().then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });
}

 exports.getallDepositsByRole = function(req, res, next){
  
  if(req.body.rolename=="manager"){
      depositModel.getmanagerDeposits(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      depositModel.getuserDeposits(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      depositModel.getdriverDeposits(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }



}
exports.getDepositsById = function(req, res, next){
  
  if(req.body.rolename=="manager"){
      depositModel.getmanagerpDepositsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      depositModel.getuserDepositsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      depositModel.getdriverDepositsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      depositModel.getclientDepositsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}



 exports.findTrasactinsbetweendates = function(req, res, next){
  if(req.body.rolename=="manager"){
      transactionHistory.findManagertransactionForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      transactionHistory.findUsertransactionForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      transactionHistory.findDrivertransactionForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      transactionHistory.findClienttransactionForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}

 exports.findAccountsDatabetweendates = function(req, res, next){
  if(req.body.rolename=="manager"){
      accountModel.findManagerAccountForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      accountModel.findUserAccountForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      accountModel.findDriverAccountForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      accountModel.findClientAccountForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}


 exports.findDepositsDatabetweendates = function(req, res, next){
  if(req.body.rolename=="manager"){
      depositModel.findManagerDepositsForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      depositModel.findUserDepositsForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      depositModel.findDriverDepositsForDates(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    

}


exports.rejectmanagervehicledocs=function(req,res){
     // console.log(req.body);
     // console.log(req.params.id)
    // console.log(req.params+'hii');
   vehicleModel1.rejectvehicledocs(req.body).then(function(data){
       // console.log(data)
       // console.log('rejected')
    res.json({success: true,reason: req.body.reason})
   // notificationModel.sendPushNotification2(data.playerId,req.body.message).then(function (response) {
   //          // res.json(response);
   //      }).fail(function (err) {
   //          return next(err);
   //      });


       }).fail(function(err){
                return next(err);
       })
 
 }

 exports.getpaymentsbyid = function(req, res, next){
  
  if(req.body.rolename=="manager"){
      transactionHistory.getmanagerpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      transactionHistory.getuserpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      transactionHistory.getdriverpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      transactionHistory.getclientpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}

exports.validatetoken=function(req,res,next){
    // auth.checkManagerToken
    if(req.headers['x-access-token'])
    {
        clientModel.checktoken(req.params.clientId).then(function(data){
     // res.json(data);


 
        res.json({success:true})
        }).fail(function(err){
 //        return next(err);
    });
        
    }
    else{
        res.json('false')
    }
 
 
 }


exports.findDepositTrasactinsById=function(req,res,next){
        depositModel.findDepositDetails(req.params).then((data)=>{
           res.json(data)

         })
      }

 exports.getuserPayments = function(req, res, next){
  
  if(req.body.rolename=="manager"){
      transactionHistory.getmanagerpaymnets(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      transactionHistory.getuserpaymnets(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      transactionHistory.getdriverpaymnets(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      transactionHistory.getclientpaymnets(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}

exports.findAccountsTrasactinsById=function(req,res,next){
        accountModel.findUserAccountsDetails(req.params).then((data)=>{
           res.json(data)

         })
      }

       exports.getAllAccountspayments = function(req, res, next){
  
  accountModel.getAllpaymnets().then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });
}

 exports.getallAccountsByRole = function(req, res, next){
  
  if(req.body.rolename=="manager"){
      accountModel.getmanagerAccounts(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      accountModel.getuserAccounts(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      accountModel.getdriverAccounts(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      accountModel.getclientAccounts(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}

 exports.getAccountsById = function(req, res, next){
  
  if(req.body.rolename=="manager"){
      accountModel.getmanagerpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }

 if(req.body.rolename=="user"){
      accountModel.getuserpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
   if(req.body.rolename=="driver"){
      accountModel.getdriverpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }
    if(req.body.rolename=="client"){
      accountModel.getclientpaymnetsById(req.body).then((data)=>{
        res.json(data);
    }).fail(function(err){
        return next(err);
    });

  }


}



exports.getAllVehicles = function (req, res, next) {

    vehicleModel1.findAllforAdmin().then(function (vehicles) {

        var count=0;
        var arrayTest=[];

        for(let i of vehicles){
categorySchema.findCategoryforAdmin(i.categoryId).then((data)=>{

vehicleModel.findModelsForManager(i.modelId).then((vechileData)=>{

        var vechilesdata={
            model:vechileData.model,
            category:data.category,
            numberPlate:i.numberPlate,
            engineId:i.engineId,
            priceperkm:i.priceperkm,
            registration_file:i.registration_file,
            insurance_file:i.insurance_file,
            registration_fileStatus:i.registration_fileStatus,
            insurance_fileStatus:i.insurance_fileStatus,


            _id:i._id
            }
    arrayTest.push(vechilesdata);
    if(vehicles.length-1==count){
        res.json(arrayTest);

    }++count



   })
})
        }

    }).fail(function (err) {
        return next(err);
    });
}

 exports.registerClient = function(req, res, next){
    if(!req.body.email){
        logger.error('Error - Register user - Email can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!isEmail(req.body.email)){
        logger.error('Error - Register user - Wrong email format');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.password){
        logger.error('Error - Register user - Password can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    clientModel.createDummyClient(req.body).then(function(user){
        res.json(user);
    }).fail(function(err){
        return next(err);
    });
}
exports.loginClient = function(req, res, next){
    if(!req.body.email){
        logger.error('Error - Client login - Email can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!isEmail(req.body.email)){
        logger.error('Error - Client login - Wrong email format');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.password){
        logger.error('Error - Client login - Password can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    clientModel.login(req.body).then(function(data){
      
        res.json(data);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Update client
 * @param req
 * @param res
 * @param next
 */
exports.updateClient = function(req, res, next){
    clientModel.update(req.params.clientId, req.body).then(function(client){
        res.json(client);
    }).fail(function(err){
        return next(err);
    });
}

// Manager functions

/**
 * Find all managers
 * @param req
 * @param res
 * @param next
 */
 exports.approvedriver=function(req,res){
   driverModel.driverapproved(req.body).then(function(data){
    
    if( data.playerId==''){
        res.json({success: true,message: 'you have no subscription for getting push notifications'})
    }
    else
    {
        notificationModel.sendPushNotification1(data.playerId).then(function (response) {
            res.json(response);
        }).fail(function (err) {
            return next(err);
        });
    }


   

// }
       }).fail(function(err){
                return next(err);
       })
 
 }
exports.approvemanagervehicledocs=function(req,res){
   vehicleModel1.approvevehicledocs(req.body).then(function(data){
    
    
            res.json({success:true});
    
       }).fail(function(err){
                return next(err);
       })
 
 }


 exports.finalaccept=function(req,res){

   driverModel.finalaccept(req.body).then(function(data){
    
     if(data.profileverify==1){
          res.json({success:true});
          if(data.playerId!=""){
              notificationModel.sendPushNotification1(data.playerId).then(function (response) {
            res.json(response);
        }).fail(function (err) {
            return next(err);
        });
          }
    
    }

       }).fail(function(err){
                return next(err);
       })
 
 }

 exports.rejectdriver=function(req,res){
     // console.log(req.body);
     // console.log(req.params.id)
    // console.log(req.params+'hii');
   driverModel.driverrejected(req.body).then(function(data){
       // console.log(data)
       // console.log('rejected')
    res.json({success: true,reason: req.body.change})
   notificationModel.sendPushNotification2(data.playerId,req.body.message).then(function (response) {
            // res.json(response);
        }).fail(function (err) {
            return next(err);
        });


       }).fail(function(err){
                return next(err);
       })
 
 }


exports.getAllusers = function(req, res, next){
    userModel.findAll().then(function(users){
        res.json(users);
    }).fail(function(err){
        return next(err);
    });
}

exports.findAllManagers = function(req, res, next){
    managerModel.findAll().then(function(managers){
        res.json(managers);
    }).fail(function(err){
        return next(err);
    });
}

exports.sendDocuments=function(req,res){
       driverModel.findAll({status:0}).then(function(data){
            res.json(data);
       }).fail(function(err){
                return next(err);
       })
}

/**
 * Find manager by Id
 * @param req
 * @param res
 * @param next
 */
exports.findManagerById = function(req, res, next){
    managerModel.findById(req.params.managerId).then(function(manager){
        if(!manager) return next(error('NOT_FOUND'));
        res.json(manager);
    }).fail(function(err){
        return next(err);
    });
}

exports.getmanagerservicesroutes = function(req, res, next){
    destinationModel.findAllManagersRoutesByCity(req.body).then(function(manager){
        if(!manager) return next(error('NOT_FOUND'));
        res.json(manager);
    }).fail(function(err){
        return next(err);
    });
}




/**
 * Register new manager
 * @param req
 * @param res
 * @param next
 */
exports.registerManager = function(req, res, next){
    if(!req.body.email){
        logger.error('Error - Manager register - Email can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!isEmail(req.body.email)){
        logger.error('Error - Manager register - Wrong email format');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.password){
        logger.error('Error - Manager register - Password can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    managerModel.register(req.body).then(function(manager){
        res.json(manager);


         var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nagababumulukuri@gmail.com',
    pass: '9014531452'
  }
});
var mailOptions = {
  from: 'sridevi.sykamcs@gmail.com',
  to: manager.email,
  subject: 'Change  password',
  text: 'You have successfully  created by admin please contact RedTruckTeam'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  });

    }).fail(function(err){
        return next(err);
    })
}

/**
 * Update manager
 * @param req
 * @param res
 * @param next
 */
exports.updateManager = function(req, res, next){
    if(req.body.email){
        if(!isEmail(req.body.email)){
            logger.error('Error - Update manager - Wrong email format');
            return next(error('BAD_REQUEST'));
        }
    }

    managerModel.update(req.params.managerId, req.body).then(function(manager){
        res.json(manager);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Delete manager
 * @param req
 * @param res
 * @param next
 */
exports.deleteManager = function(req, res, next){
    managerModel.delete(req.params.managerId).then(function(manager){
        res.json(manager);
    }).fail(function(err){
        return next(err);
    })
}

// Vehicle functions

/**
 * Find all vehicles
 * @param req
 * @param res
 * @param next
 */
// exports.findAllVehicles = function(req, res, next){
//     vehicleModel.findAll().then(function(vehicles){
//         // console.log(vehicles.length)
//         res.json(vehicles);
//     }).fail(function(err){
//         return next(err);
//     });
// }
exports.findAllVehicles = function(req, res, next){
    vehicleModel.findAll().then(function(vehicles){
        var count=0;
        var arrayTest=[];

        for(let i of vehicles){
categorySchema.findCategoryforAdmin(i.categoryId).then((data)=>{

        var vechilesdata={
            category:data.category,
            model:i.model,
            _id:i._id
            
        }
    arrayTest.push(vechilesdata);
    if(vehicles.length-1==count){
        res.json(arrayTest);

    }++count



})
        }

    }).fail(function(err){
        return next(err);
    });
}

/**
 * Find vehicle by id
 * @param req
 * @param res
 * @param next
 */
exports.findVehicleById = function(req, res, next){
    vehicleModel.findById(req.params.vehicleId).then(function(vehicle){
        if(!vehicle) return next(error('NOT_FOUND'));
        res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}


 exports.vehiclesCategory = function(req, res, next){
    categorySchema.addvehicleCategorybyAdmin(req.body).then(function(vehicle){

        res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}



exports.findvehiclesCategory = function(req, res, next){
    categorySchema.findCategory(req.body).then(function(vehicle){
       res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}
/**
 * Add vehicle
 * @param req
 * @param res
 * @param next
 */
exports.addVehicle = function(req, res, next){
   
    vehicleModel.add(req.body).then(function(vehicle){

        res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Update vehicle
 * @param req
 * @param res
 * @param next
 */
exports.updateVehicle = function(req, res, next){
    vehicleModel.update(req.params.vehicleId, req.body).then(function(vehicle){
        res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Delete vehicle
 * @param req
 * @param res
 * @param next
 */
exports.deleteVehicle = function(req, res, next){
    vehicleModel.delete(req.params.vehicleId).then(function(vehicle){
        res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Find all expenses for vehicle
 * @param req
 * @param res
 * @param next
 */
exports.getExpensesForVehicle = function(req, res, next){
    vehicleModel.findById(req.params.vehicleId).then(function(vehicle){
        if(!vehicle) return next(error("NOT_FOUND"));

        expenseModel.findExpensesForVehicle(req.params.vehicleId).then(function(expenses){
            res.json(expenses);
        }).fail(function(err){
            return next(err);
        })
    }).fail(function(err){
        return next(err);
    });
}

// Driver functions

/**
 * Find all drivers
 * @param req
 * @param res
 * @param next 
 */
exports.findAllDrivers = function(req, res, next){
    driverModel.findAll().then(function(drivers){
        // console.log(drivers.length)
        res.json(drivers);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Find driver by id
 * @param req
 * @param res
 * @param next
 */
exports.findDriverById = function(req, res, next){
    driverModel.findById(req.params.driverId).then(function(driver){
        if(!driver) return next(error('NOT_FOUND'));
        res.json(driver);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Add driver
 * @param req
 * @param res
 * @param next
 */
exports.addDriver = function(req, res, next){
    if(!req.body.email){
        logger.error('Error - Add driver - Email can\'t be empty');
        return next(error("BAD_REQUEST"));
    }
    if(!isEmail(req.body.email)){
        logger.error('Error - Add driver - Wrong email format');
        return next(error("BAD_REQUEST"));
    }
    if(!req.body.firstName){
        logger.error('Error - Add driver - Firstname can\'t be empty');
        return next(error("BAD_REQUEST"));
    }
    if(!req.body.lastName){
        logger.error('Error - Add driver - Lastname can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    driverModel.add(req.body).then(function(driver){
        res.json(driver);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Update driver
 * @param req
 * @param res
 * @param next
 */
exports.updateDriver = function(req, res, next){
    if(req.body.email){
        if(!isEmail(req.body.email)){
            logger.error('Error - Update driver - Wrong email format');
            return next(error('BAD_REQUEST'));
        }
    }

    driverModel.update(req.params.driverId, req.body).then(function(driver){
        res.json(driver);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Delete driver
 * @param req
 * @param res
 * @param next
 */
exports.deleteDriver = function(req, res, next){
    driverModel.delete(req.params.driverId).then(function(driver){
        res.json(driver);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Find all finished destinations
 * @param req
 * @param res
 * @param next 
 */
exports.findAllFinishedDestinations = function(req, res, next){
    destinationModel.findAllFinished().then(function(destinations){
        res.json(destinations);
    }).fail(function(err){
        return next(err);
    });
}

/**
 * Find all requests for destination
 * @param req
 * @param res
 * @param next
 */
exports.findAllRequestsByDestination = function (req, res, next) {
    destinationModel.findById(req.params.destinationId).then(function (destination) {
        if (!destination) return next(error('NOT_FOUND'));

        requestModel.findByDestinationId(req.params.destinationId).then(function (requests) {
            res.json(requests);
        }).fail(function (err) {
            return next(err);
        })
    }).fail(function (err) {
        return next(err);
    })
}
//--sri
// exports.clientotpdetails = function(req, res, next){
    
// if(!isEmail(req.body.email)){
//         logger.error('Error - login client - Wrong email format');
//         return next(error("BAD_REQUEST"));
//     }
//  clientModel1.verify(req.body).then(function(client){
//         res.json({success: true});

// }).fail(function(err){
//         return next(err);
//     });

//     }
//--sri
exports.clientresetpwd = function(req, res, next){
    


var changepwd = {phone:req.body.phone, password: req.body.newpassword, newpassword: req.body.newpassword , confirmpassword: req.body.confirmpassword};
 clientModel.resetpassword(changepwd).then(function(client){

 var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nagababumulukuri@gmail.com',
    pass: '9014531452'
  }
});

var mailOptions = {
  from: 'sridevi.sykamcs@gmail.com',
  to: client.email,
  subject: 'Change  password',
  html:'<p>Hi</br>'+client.firstName+ '</br>!you have successfully resetted your password.Thank you for using RedTruck Transport app! </p>',
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


        res.json({success: true});

}).fail(function(err){
        return next(err);
    });

    }   
    //--sri

    exports.clientchangepassword = function(req, res, next){
    if(!req.body.oldPassword){
        logger.error('Error - Change client password - Old password can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.newPassword){
        logger.error('Error - Change client password - New password can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.repeatPassword){
        logger.error('Error - Change client password - Repeat password can\'t be empty');
        return next(error("BAD_REQUEST"));
    }
// console.log(req.body.newPassword)
// console.log(req.body.repeatPassword)
    if(req.body.newPassword != req.body.repeatPassword){
        logger.error('Error - Change client password - New and repeated password don\'t match');
        return next(error("NOT_ALLOWED"));
    }

    clientModel.clientchangePassword(req.params.clientId, req.body).then(function(client){
            var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nagababumulukuri@gmail.com',
    pass: '9014531452'
  }
});
var otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
var mailOptions = {
  from: 'sridevi.sykamcs@gmail.com',
  to: client.email,
  subject: 'Change  password',
  text: 'You have successfully updated password'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
        res.json({success: true});
    }).fail(function(err){
        return next(err);
    });
}

//end
//--sri
exports.clientprofileupdate = function(req, res, next){
    if(!req.body.firstName){
        logger.error('Error - Update client info - Firstname can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.lastName){
        logger.error('Error - Update client info - Lastname can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.address){
        logger.error('Error - Update client info - Address can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    if(!req.body.phone){
        logger.error('Error - Update client info - Phone can\'t be empty');
        return next(error("BAD_REQUEST"));
    }

    clientModel.clientprofileupdate(req.params.clientId, req.body).then(function(client){
        res.json(client);
    }).fail(function(err){
        return next(err);
    });
} 
//end
//--sri
exports.clientforgetpwd = function(req, res, next){
    

// if(!isEmail(req.body.email)){
//         logger.error('Error - login client - Wrong email format');
//         return next(error("BAD_REQUEST"));
//     }



    clientModel.forgetPassword(req.body).then(function(client){
        res.json({success: true});
        // var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'sridevi.sykamcs@gmail.com',
//     pass: 'Srideviscs9$$1#'
//   }
// });
// var otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
// var mailOptions = {
//   from: 'sridevi.sykamcs@gmail.com',
//   to: req.body.email,
//   subject: 'Reset your password',
//   html:'<p>Please enter below OTP</p>',
//   text: otp
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



// var insertdata = {email:req.body.email, otp: otp};
// clientModel1.insertotp(insertdata).then(function(client){
//     res.json({success:true});

// }).fail(function(err){
//         return next(err);
//     });

    }).fail(function(err){
        return next(err);
    });

    
}

exports.driverdetails = function (req, res, next) {
    // console.log(req.body)
    // var data = {managerId:req.params.managerId,driverId:req.params.driverId}
    driverModel.driverdetails(req.params.driverId).then(function (driver) {
                  var cityname =yourhandle.getCityById(driver.driver.city)
                  var statename = yourhandle.getStateById(driver.driver.state);


        var profiledata = {firstName:driver.driver.firstName,lastName:driver.driver.lastName,email:driver.driver.email,phone:driver.driver.phone,address:driver.driver.address,city:cityname,state:statename,PassportPicture:driver.driver.PassportPicture,DLicenceFront:driver.driver.DLicenceFront,DLicenceFrontStatus:driver.driver.DLicenceFrontStatus,DLicenceBack:driver.driver.DLicenceBack,DLicenceBackStatus:driver.driver.DLicenceBackStatus,_id:driver.driver._id,AadharFront:driver.driver.AadharFront,AadharFrontStatus:driver.driver.AadharFrontStatus,AadharBack:driver.driver.AadharBack,AadharBackStatus:driver.driver.AadharBackStatus,PassportPictureStatus:driver.driver.PassportPictureStatus,profileverify:driver.driver.profileverify}

        res.json(profiledata);

    }).fail(function (err) {
        return next(err);
    });
}

exports.clientsummary = function(req,res,next){
    
    vehicleModel1.findAll().then(function(vehicles){
        var vehiclescount = vehicles.length
    managerModel.findAll().then(function(managers){
        var managerscount = managers.length
    driverModel.findAll().then(function(drivers){
        console.log(drivers.length)
        var driverscount = drivers.length
    userModel.findAll().then(function(users){
        var userscount = users.length
          res.json({vehiclescount:vehiclescount,managerscount:managerscount,driverscount:driverscount,userscount:userscount});
          
    }).fail(function(err){
        return next(err);
    });
    }).fail(function(err){
        return next(err);
    });
        }).fail(function(err){
        return next(err);
    });
    }).fail(function(err){
        return next(err);
    });  
       


 

}

exports.getstates=function(req,res,next){

var states = yourhandle.getStatesOfCountry(req.params.con_id);
res.json(states);
// console.log('hii')
        
}

exports.getcities=function(req,res,next){


var cities = yourhandle.getCitiesOfState(req.params.state_id);
res.json(cities);
// console.log('hii')
        
}


exports.goods = function(req, res, next){
    clientModel1.addgoodstypebyAdmin(req.body).then(function(client){
        res.json(client);
    }).fail(function(err){
        return next(err);
    });
}


exports.updateGoods = function(req, res, next){

    clientModel1.updategoods(req.params.goodsId,req.body).then(function(client){
        res.json(client);
    }).fail(function(err){
        return next(err);
    });
}




exports.deleteGoods = function(req, res, next){
    clientModel1.delete(req.params.goodsId).then(function(driver){
        res.json(driver);
    }).fail(function(err){
        return next(err);
    });
}

exports.findallgoods = function(req, res, next){
    clientModel1.findAll().then(function(vehicle){
       res.json(vehicle);
    }).fail(function(err){
        return next(err);
    });
}



exports.insertnotice = function(req, res, next){
  
NoticeSchema.add(req.body).then(function(data){

  res.json('success')
})


}

exports.gettnotice = function(req, res, next){
NoticeSchema.getAll(req.params.usertype).then(function(data){

  res.json(data)
})


}