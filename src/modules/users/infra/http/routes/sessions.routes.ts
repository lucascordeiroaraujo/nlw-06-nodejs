import { Router } from 'express'

import { AuthenticateUserController } from '@modules/users/infra/http/controllers/AuthenticateUserController'

const sessionRouter = Router()

const authenticateUserController = new AuthenticateUserController()

sessionRouter.post('/', authenticateUserController.handle)

export { sessionRouter }
