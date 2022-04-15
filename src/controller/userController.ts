import UserModel from '../db/models/users';
import { Request, Response } from 'express';
import snakecaseKey from 'snakecase-keys'
// import {  jwt } from 'jsonwebtoken'

export const createUser = async (req: Request, res: Response) => {

  const { email, lastName, firstName, password } = req.body
  
  await UserModel.insert(snakecaseKey({ email, lastName, firstName, password }))

  return res.send("ok").status(200)
}

export const getUser = async (_req: Request, res: Response) => {
  const user: any[] = await UserModel.select("*").whereNot('id', 0)
  return res.send({ user })
}