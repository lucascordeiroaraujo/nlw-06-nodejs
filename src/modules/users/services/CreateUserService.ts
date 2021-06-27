import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

interface IUserRequest {
  name: string
  email: string
  admin: boolean
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    if (!email) {
      throw new AppError('Incorret email')
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    })

    if (userAlreadyExists) {
      throw new AppError('User already exists')
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
