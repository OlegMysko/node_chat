import { User } from "../models/user.js"
import { userService } from "../service/user.service.js"

const send = async (req, res) => {
  const { text } = req.body
  console.log(text)
res.json({text})
}

const register = async (req, res) => {
  const { name } = req.body;
  if (!name ) {
    res.json({ message: 'bad request' })
    return
  }
const newUser = await userService.register(name)


 res.send(newUser)
}
export const authController = {
  send,register
}
