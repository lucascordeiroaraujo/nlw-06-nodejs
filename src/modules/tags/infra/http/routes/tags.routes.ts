import { Router } from 'express'

import { ensureAdmin } from '@shared/infra/http/middleware/unsureAdmin'

import { CreateTagController } from '@modules/tags/infra/http/controllers/CreateTagController'

const tagsRouter = Router()

const createTagController = new CreateTagController()

tagsRouter.post('/', ensureAdmin, createTagController.handle)

export { tagsRouter }
