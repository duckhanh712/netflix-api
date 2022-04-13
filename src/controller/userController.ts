import UserModel from '../db/models/users';
import { Request, Response } from 'express';
import snakecaseKey from 'snakecase-keys'


export const createUser = async (req: Request, res: Response) => {

  const { email, lastName, firstName, password, birthday, gender } = req.body

  await UserModel.insert(snakecaseKey({ email, lastName, firstName, password, birthday: new Date(birthday), gender }))

  return res.send("ok").status(200)
}

export const getUser = async (_req: Request, res: Response) => {
  const user: any[] = await UserModel.select("*")
  return res.send({ user })
}