import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import { compare } from 'bcryptjs'

import { sign } from 'jsonwebtoken'

import authConfig from '@config/auth'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({
      email,
    })

    if (!user) {
      throw new AppError('Email/Password incorret')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email/Password incorret')
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign(
      {
        email: user.email,
      },
      secret,
      {
        subject: user.id,
        expiresIn,
      },
    )

    return token
  }
}

export { AuthenticateUserService }
