import { Request, Response } from 'express'

import { ListTagsService } from '@modules/tags/services/ListTagsService'

class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTagsService = new ListTagsService()

    const tags = await listTagsService.execute()

    return response.status(200).json(tags)
  }
}

export { ListTagsController }
