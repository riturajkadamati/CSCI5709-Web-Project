const encryptPassword = require("../../utils/passwordEncryptDecrypt");
const bcrypt = require('bcryptjs');
const User = require("../userManagement/User");
const Address=require("./Address");

const { json } = require("express");


exports.UpdatePassword=async (UserReq,userId)=>{

    let response={}
    try {

        let userdb=await User.findOne({
            _id:userId});
        console.log("userdb"+userdb)
        console.log("userreq"+JSON.stringify(UserReq))  ;
        let passwordcheck=await bcrypt.compare(UserReq.password, userdb.password); 
        console.log(passwordcheck)
        if(!userdb || !passwordcheck){

           return  response={
                responseStatus:false,
                responseMessage:"Incorrect password! try again!"
            }

        }
  

      
        if(userdb && passwordcheck ){
            const bcryptPassword =await encryptPassword(UserReq.newpassword);
            const user = await User.findByIdAndUpdate(userId, { password:bcryptPassword }, { new: true })
   
            response={
                responseStatus:true,
                responseMessage:"Password is successfully changed!",
                responseData:user

            }

        }


        
    } catch (error) {
        console.log(error);
        response={
            responseStatus:false,
            responseMessage:"Something went wrong!",
         
        }

        
    }

    return response;


}

exports.getUserFirstandLastName=async (userId)=>{

    let response={}
    try {
        let userdb=await User.findOne({
            _id:userId});

        if(!userdb){

            return  response={
                responseStatus:false,
                responseMessage:"UserId does not exists!"
            }
        }

        response={
            responseStatus:true,
            responseMessage:"User is fetched successfully!",
            responseData:{
                firstname:userdb.firstname,
                lastname:userdb.lastname
            }

        }

    } catch (error) {
        console.log(error);

        response={
            responseStatus:false,
            responseMessage:"Something went wrong!"
        }
        
    }

    return response;

}



exports.updateUserFirstandLastName=async (UserReq,userId)=>{

    let response={}
    try {
        let userdb=await User.findOne({
            _id:userId});
        console.log(userdb)
        if(!userdb){

            return  response={
                responseStatus:false,
                responseMessage:"User does not exists!"
            }
        }
        else{

            const userfirstandlastname={ 
                    firstname:UserReq.firstname,
                    lastname:UserReq.lastname }
            const user = await User.findByIdAndUpdate(userId,userfirstandlastname , { new: true })
   
            response={
                responseStatus:true,
                responseMessage:"First or Last name are successfully changed!",
                responseData:user

            }    
        }



    } catch (error) {
        console.log(error);

        response={
            responseStatus:false,
            responseMessage:"Something went wrong!"
        }
        
    }

    return response;

}

exports.getUserAddress=async(userId)=>{


    let response={}
    try {

        let addressdb=await Address.findOne({
            userid:userId});
        
        if(!addressdb){

            return  response={
                responseStatus:false,
                responseMessage:"No address found!"
            }
        }

        response={
            responseStatus:true,
            responseMessage:"Address is fetched successfully!",
            responseData:{
                address1:addressdb.address1,
                address2:addressdb.address2,
                city:addressdb.city,
                province:addressdb.province,
                pincode:addressdb.pincode
            }

        }

    } catch (error) {
        console.log(error);

        response={
            responseStatus:false,
            responseMessage:"Something went wrong!"
        }
        
    }

    return response;

}

exports.updateAddress=async(addressReq,userId)=>{

    let response={}
    try {
        let addressdb=await Address.findOne({
            userid:userId});
        console.log("address "+JSON.stringify(addressReq))
        if(!addressdb){

            return  response={
                responseStatus:false,
                responseMessage:"No address found!"
            }
        }
        else{

            const userAddress={ 
                    address1:addressReq.address1,
                    address2:addressReq.address2,
                    city:addressReq.city,
                    province:addressReq.province,
                    pincode:addressReq.pincode }
            const address = await Address.findByIdAndUpdate(addressdb.id,userAddress , { new: true })
   
            response={
                responseStatus:true,
                responseMessage:"Address is successfully updated!",
                responseData:address

            }    
        }

    } catch (error) {
        console.log(error);

        response={
            responseStatus:false,
            responseMessage:"Something went wrong!"
        }
        
    }

    return response;





}
