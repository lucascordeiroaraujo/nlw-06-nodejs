import { Router } from 'express'

import { CreateUserController } from '@modules/users/infra/http/controllers/CreateUserController'

import { ListUsersController } from '@modules/users/infra/http/controllers/ListUsersController'

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated'

import { ensureAdmin } from '@shared/infra/http/middleware/unsureAdmin'

const usersRouter = Router()

const createUserController = new CreateUserController()

const listUsersController = new ListUsersController()

usersRouter.post('/', createUserController.handle)

usersRouter.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listUsersController.handle,
)

export { usersRouter }
