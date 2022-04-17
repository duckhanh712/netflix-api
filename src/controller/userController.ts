import UserModel from '../db/models/users';
import { Request, Response } from 'express';
import snakecaseKey from 'snakecase-keys';
import { format } from 'date-fns';
import { hashPassword } from '../utils/util'

// import camelcaseKeys from 'camelcase-keys';
// import {  jwt } from 'jsonwebtoken'



export const createUser = async (req: Request, res: Response) => {
  
  const { email, lastName, firstName, password , gender, birthday, roleId, imageUrl } = req.body
  if (!email || !lastName || !firstName || !password || !gender || !birthday || !roleId || !imageUrl) {
    return res.send('vui lòng điền đủ thông tin')
  }
  
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  
  const isEmail = regex.test(email)

  if (!isEmail) {
    return res.send('email không đúng định dạng')
  }
  
  const hashedPassword = await hashPassword(password)

  const newBirthday = format(new Date(birthday), 'yyyy-MM-dd') || null
  
  if (!newBirthday) {
    return res.send('ngay sinh khong dung dinh dang')
  }
  
  await UserModel.insert(snakecaseKey({ email, lastName, firstName, password:hashedPassword, gender, birthday, roleId, imageUrl }))

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