import express, { Request, Response, Router } from 'express';
import knex from '../db/database'

const router: Router = express.Router();

router.get('/' , async (_req: Request, res: Response) => {
  const a = await knex('user')
  return res.send(a);
})

export default router;
