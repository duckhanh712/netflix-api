import CategoryModel from '../db/models/categories';
import { Request, Response } from 'express';
import snakecaseKey from 'snakecase-keys'
// import camelcaseKeys from 'camelcase-keys';
// import {  jwt } from 'jsonwebtoken'

export const createCategory = async (req: Request, res: Response) => {

  const { name, parentId, imageUrl } = req.body
  
  await CategoryModel.insert(snakecaseKey({ name, parentId, imageUrl }))

  return res.send("ok").status(200)
}

export const getCategory = async (_req: Request, res: Response) => {
  
  const category: any[] = await CategoryModel.select("*").whereNot('id', 0)
  return res.send({ category })
}

export const getCategoryById = async(req: Request, res: Response) => {

  const { categoryId } = req.params

  const category: any[] = await CategoryModel.select('*').where('id',categoryId)
  return res.send({ category })
}

export const updateCategory = async(req:Request, res:Response) => {
  const { categoryId } = req.params

  const { name, parentId, imageUrl } = req.body

  await CategoryModel
                      .update(snakecaseKey({ name, parentId, imageUrl }))
                      .where('id', categoryId)
  return res.send("oke")
}