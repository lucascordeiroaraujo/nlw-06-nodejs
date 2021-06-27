import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

import { classToPlain } from 'class-transformer'

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepository)

    const users = await usersRepositories.find()

    return classToPlain(users)
  }
}

export { ListUsersService }
