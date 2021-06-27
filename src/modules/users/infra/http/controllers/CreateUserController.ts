import { Request, Response } from 'express'

import { CreateUserService } from '@modules/users/services/CreateUserService'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      admin,
    })

    return response.status(200).json(user)
  }
}

export { CreateUserController }
