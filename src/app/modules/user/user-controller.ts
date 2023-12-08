import { Controller, Get, Post } from '@/common/decorators/route'
import { Users } from '@/infra/persistences/typeorm/models/Users'
import { UserService } from './user-service'
import { FindManyOptions } from 'typeorm'
import { Body } from '@/common/helpers/http/request/body'
import { AppError } from '@/common/helpers/http'
import { AppLogger } from '@/common/libs/log4js'

@Controller('/users')
export class UserController {
  @Get('/')
  async userIndex(req, res): Promise<Users[]> {
    const { body } = req

    try {
      return res.status(200).send({
        users: await UserService.find({ ...(body as FindManyOptions<Users>) }),
      })
    } catch (err) {
      AppLogger.error(err.message)
      throw new AppError(err.message)
    }
  }

  @Post('/')
  userCreate(req, res) {
    return res.status(200).send({ body: req.body })
  }

  @Get('/test')
  userTest(req, res) {
    return Body(Users)(req, res, () => {
      return res.status(200).send({ body: req.body })
    })
  }
}
