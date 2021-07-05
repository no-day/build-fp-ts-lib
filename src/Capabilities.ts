import { Error } from './Error'
import * as C from 'fp-ts/Console'
import * as TE from 'fp-ts/TaskEither'
import { flow } from 'fp-ts/lib/function'
import { TaskEither } from 'fp-ts/lib/TaskEither'

export type Capabilities = {
  log: (msg: string) => TaskEither<Error, void>
}

const log: Capabilities['log'] = flow(C.log, (_) => TE.fromIO(_))

export const cap: Capabilities = {
  log,
}
