import { Request, Response } from 'express'

import { ListUsersService } from '@modules/users/services/ListUsersService'

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersService = new ListUsersService()

    const users = await listUsersService.execute()

    return response.status(200).json(users)
  }
}

export { ListUsersController }
