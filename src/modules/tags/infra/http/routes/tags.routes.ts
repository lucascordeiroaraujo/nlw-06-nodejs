import { Router } from 'express'

import { CreateTagController } from '@modules/tags/infra/http/controllers/CreateTagController'

import { ListTagsController } from '@modules/tags/infra/http/controllers/ListTagsController'

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated'

import { ensureAdmin } from '@shared/infra/http/middleware/unsureAdmin'

const tagsRouter = Router()

const createTagController = new CreateTagController()

const listTagsController = new ListTagsController()

tagsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
)

tagsRouter.get('/', ensureAdmin, listTagsController.handle)

export { tagsRouter }
