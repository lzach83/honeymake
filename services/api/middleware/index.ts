import {firebaseAdmin} from "../services"
import {Response, NextFunction} from "express"

const getAuthToken = (req: any, res: Response, next: NextFunction) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1]
  } else {
    req.authToken = null
  }
  next()
}

export const checkIfAuth = (req: any, res: Response, next: NextFunction) => {
  getAuthToken(req, res, async () => {
    try {
      const {authToken} = req
      const userInfo = await firebaseAdmin.auth.verifyIdToken(authToken)
      req.authId = userInfo.uid
      return next()
    } catch (err) {
      return res
        .status(401)
        .send({error: "You are not authorized to make this request"})
    }
  })
}
