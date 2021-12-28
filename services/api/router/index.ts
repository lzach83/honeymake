import {Router} from "express"
import {checkIfAuth} from "../middleware"
import {authService, firebaseAdmin} from "../services"

const router = Router()

router.post("/auth/signup", authService.createNewUser)
router.get("/user", checkIfAuth, async (req, res) => {
  console.log("req", req.body)
  try {
    const {uid} = req.body
    const user = await firebaseAdmin.auth.getUser(uid)

    return res.send(user)
  } catch (error: any) {
    res.send(error.message)
  }
})

export default router
