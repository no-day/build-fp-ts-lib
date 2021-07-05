/** @since 1.0.0 */

import { pipe } from 'fp-ts/function'
import { Task } from 'fp-ts/lib/Task'
import * as TE from 'fp-ts/lib/TaskEither'
import * as App from './App'
import { cap } from './Capabilities'
import { Error } from './Error'
import * as E from './Error'
import * as C from 'fp-ts/Console'
import * as T from 'fp-ts/Task'
import { Config } from './Config'

const getConfig: Task<Config> = 1 as never

const printError: (err: Error) => Task<void> = (err) =>
  pipe(E.print(err), C.log, T.fromIO)

const exit: Task<void> = pipe(() => process.exit(), T.fromIO)

const handleError: (err: Error) => Task<void> = (err) =>
  pipe(
    printError(err),
    T.chainFirst(() => exit)
  )

const runApp: (config: Config) => Task<void> = (config) =>
  pipe(App.main({ ...cap, config }), TE.getOrElse(handleError))

export const main: Task<void> = pipe(getConfig, T.chain(runApp))
