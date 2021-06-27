import { getCustomRepository } from 'typeorm'

import { ComplimentsRepositories } from '@modules/compliments/infra/typeorm/repositories/ComplimentsRepositories'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'

import AppError from '@shared/errors/AppError'

interface IComplimentRequest {
  user_sender: string
  user_receiver: string
  tag_id: string
  message: string
}

class CreateComplimentService {
  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const usersRepositories = getCustomRepository(UsersRepository)

    if (user_sender === user_receiver) {
      throw new AppError('Incorret user receiver')
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new AppError('User receiver does not exists!')
    }

    const compliment = complimentsRepositories.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }
