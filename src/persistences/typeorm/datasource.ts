import '@/config/environment'

import path from 'node:path'
import { getenv } from '@/common/libs/dotenv'
import { DataSourceOptions } from 'typeorm'

const ENV_PROD = getenv('NODE_ENV') === 'production'

const dataSource: DataSourceOptions = {
  type: 'postgres',
  url: String(getenv('DATABASE_URL')),
  entities: [path.resolve(__dirname, 'models', '**', '*.{ts,js}')],
  migrations: [path.resolve(__dirname, 'migrations', '**', '*.{ts,js}')],
  synchronize: !ENV_PROD,
  logging: !ENV_PROD,
  migrationsRun: !ENV_PROD,
  maxQueryExecutionTime: 3000,
}

export default dataSource
