import { getCustomRepository } from 'typeorm'

import { TagsRepositories } from '@modules/tags/infra/typeorm/repositories/TagsRepositories'

import AppError from '@shared/errors/AppError'

interface IRequestTag {
  name: string
}

class CreateTagService {
  async execute({ name }: IRequestTag) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new AppError('Incorret name!')
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    })

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists')
    }

    const tag = tagsRepositories.create({
      name,
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }
