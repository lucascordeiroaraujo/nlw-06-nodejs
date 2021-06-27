import { Router } from 'express'

import { CreateComplimentController } from '@modules/compliments/infra/http/controllers/CreateComplimentController'

const complimentRouter = Router()

const createComplimentController = new CreateComplimentController()

complimentRouter.post('/', createComplimentController.handle)

export { complimentRouter }
