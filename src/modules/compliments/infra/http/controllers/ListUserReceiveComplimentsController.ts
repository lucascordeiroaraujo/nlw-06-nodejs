import { Request, Response } from 'express'

import { ListUserReceiveComplimentsService } from '@modules/compliments/services/ListUserReceiveComplimentsService'

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.status(200).json(compliments)
  }
}

export { ListUserReceiveComplimentsController }
