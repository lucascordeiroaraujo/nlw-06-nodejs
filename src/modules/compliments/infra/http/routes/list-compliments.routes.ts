import { Router } from 'express'

import { ListUserReceiveComplimentsController } from '@modules/compliments/infra/http/controllers/ListUserReceiveComplimentsController'

import { ListUserSendComplimentsController } from '@modules/compliments/infra/http/controllers/ListUserSendComplimentsController'

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated'

const listComplimentRouter = Router()

const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController()

const listUserSendComplimentsController =
  new ListUserSendComplimentsController()

listComplimentRouter.get(
  '/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle,
)

listComplimentRouter.get(
  '/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle,
)

export { listComplimentRouter }
