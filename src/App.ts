import { constVoid, pipe } from 'fp-ts/lib/function'
import { ReaderTaskEither } from 'fp-ts/lib/ReaderTaskEither'
import * as RTE from 'fp-ts/lib/ReaderTaskEither'
import { Error } from './Error'
import { Capabilities } from './Capabilities'
import { Config } from './Config'

export type Env = Capabilities & { config: Config }

export type App<A> = ReaderTaskEither<Env, Error, A>

// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------

export const main: App<void> = pipe(
  RTE.ask<Env>(),
  RTE.chain((env) =>
    pipe(env.log('build-fp-ts-lib'), (_) => RTE.fromTaskEither(_))
  ),
  RTE.map(constVoid)
)
