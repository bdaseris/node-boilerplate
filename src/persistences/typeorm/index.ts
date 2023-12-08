import 'reflect-metadata'

import { DataSource } from 'typeorm'
import { SystemLogger } from '@/common/libs/log4js'

import dataSource from './datasource'

export class SingletonDataSource {
  private static instance: DataSource

  private constructor() {}

  public static getInstance(): DataSource {
    if (!SingletonDataSource.instance) {
      SingletonDataSource.instance = new DataSource(dataSource)
    }
    return SingletonDataSource.instance
  }
}

export const entityManager = SingletonDataSource.getInstance()

entityManager
  .initialize()
  .then(() => {
    SystemLogger.info('')
  })
  .catch((err) => {
    SystemLogger.error(err)
  })
