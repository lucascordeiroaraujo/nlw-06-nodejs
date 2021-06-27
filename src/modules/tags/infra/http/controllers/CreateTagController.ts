import { Request, Response } from 'express'

import { CreateTagService } from '@modules/tags/services/CreateTagService'

class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createTagService = new CreateTagService()

    const tag = await createTagService.execute({ name })

    return response.status(200).json(tag)
  }
}

export { CreateTagController }
