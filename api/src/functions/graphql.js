import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js,ts}'
import { db } from 'src/lib/db'
import services from 'src/services/**/*.{js,ts}'
import { logger } from 'src/lib/logger'


export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),

  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
