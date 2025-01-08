import e from "express";
import { CatchAsync } from "../../utils/CatchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser=CatchAsync(async(req,res)=>{
    const result=await AuthServices.loginUser(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'user logged in successfully',
      data: result,
    });
})

export const AuthController={
    loginUser
} 