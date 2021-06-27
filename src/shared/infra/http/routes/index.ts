import { Router } from 'express'

import { usersRouter } from '@modules/users/infra/http/routes/users.routes'

import { sessionRouter } from '@modules/users/infra/http/routes/sessions.routes'

import { tagsRouter } from '@modules/tags/infra/http/routes/tags.routes'

import { complimentRouter } from '@modules/compliments/infra/http/routes/compliments.routes'

const routes = Router()

routes.use('/users', usersRouter)

routes.use('/session', sessionRouter)

routes.use('/tags', tagsRouter)

routes.use('/compliments', complimentRouter)

export { routes }
