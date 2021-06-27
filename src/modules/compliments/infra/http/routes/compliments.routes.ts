import { Router } from 'express'

import { CreateComplimentController } from '@modules/compliments/infra/http/controllers/CreateComplimentController'

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated'

const complimentRouter = Router()

const createComplimentController = new CreateComplimentController()

complimentRouter.post(
  '/',
  ensureAuthenticated,
  createComplimentController.handle,
)

export { complimentRouter }
