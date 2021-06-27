import { CreateUserService } from '@modules/users/services/CreateUserService'

import { Request, Response } from 'express'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body

    const createUserService = new CreateUserService()

    const users = createUserService.execute({
      name,
      email,
      admin,
    })

    return response.status(200).json(users)
  }
}

export { CreateUserController }
