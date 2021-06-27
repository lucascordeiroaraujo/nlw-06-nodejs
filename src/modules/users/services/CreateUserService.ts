import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import { hash } from 'bcryptjs'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

interface IUserRequest {
  name: string
  email: string
  admin: boolean
  password: string
}

class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
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

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
