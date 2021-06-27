import { Request, Response, NextFunction } from 'express'

import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user_id } = request

  const usersRepositories = getCustomRepository(UsersRepository)

  const { admin } = await usersRepositories.findOne(user_id)

  if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}
