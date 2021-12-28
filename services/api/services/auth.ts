import express from "express"
import config from "../config"
import {firebaseAdmin} from "."

const createNewUser = async (req: express.Request, res: express.Response) => {
  try {
    const {userName, password, email, phoneNumber} = req.body
    console.log("FIRED", req.body)

    const user = await firebaseAdmin.auth.createUser({
      email,
      phoneNumber,
      password,
      displayName: userName
    })

    return {status: "SUCCESS", message: res.send(user)}
  } catch (err: any) {
    res.send(err.message)
  }
}

const getUserFromToken = async (token: any) => {
  try {
    const firebaseUser = await firebaseAdmin.auth.verifyIdToken(token)

    return {status: "SUCCESS", message: firebaseUser}
  } catch (err) {
    return {status: "FAILURE", message: err}
  }
}

const getUserFromHttpReq = async (req: express.Request) => {
  try {
    const bearer = req.headers.authorization || ""
    const token = bearer.split(" ")[1]

    return getUserFromToken(token)
  } catch (err) {}
}

export const authService = {
  getUserFromHttpReq,
  createNewUser
}
