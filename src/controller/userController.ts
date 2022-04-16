import UserModel from '../db/models/users';
import { Request, Response } from 'express';
import snakecaseKey from 'snakecase-keys'
// import camelcaseKeys from 'camelcase-keys';
// import {  jwt } from 'jsonwebtoken'

export const createUser = async (req: Request, res: Response) => {

  const { email, lastName, firstName, password , gender, birthday, roleId, imageUrl } = req.body
  
  await UserModel.insert(snakecaseKey({ email, lastName, firstName, password, gender, birthday, roleId, imageUrl }))

  return res.send("ok").status(200)
}

export const getUser = async (_req: Request, res: Response) => {
  
  const user: any[] = await UserModel.select("*").whereNot('id', 0)
  return res.send({ user })
}

export const getUserById = async(req: Request, res: Response) => {

  const { userId } = req.params

  const user: any[] = await UserModel.select('*').where('id',userId)
  return res.send({ user })
}

export const updateUser = async(req:Request, res:Response) => {
  const { userId } = req.params

  const { email, lastName, firstName, password , gender, birthday, roleId, imageUrl } = req.body

  await UserModel
                      .update(snakecaseKey({ email, lastName, firstName, password , gender, birthday, roleId, imageUrl }))
                      .where('id', userId)
  return res.send("oke")
}