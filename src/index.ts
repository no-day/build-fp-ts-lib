/** @since 1.0.0 */

import { pipe } from 'fp-ts/function'
import { log } from 'fp-ts/lib/Console'
import { IO } from 'fp-ts/lib/IO'

// -----------------------------------------------------------------------------
// greetings
// -----------------------------------------------------------------------------

/**
 * It's a greeting
 *
 * @since 1.0.0
 * @category Greetings
 * @example
 *   import { greet } from 'build-fp-ts-lib'
 *   assert.deepStrictEqual(greet('World'), 'Hello, World!')
 */
export const greet = (name: string): string =>
  pipe(`Hello`, (x) => `${x}, ${name}!`)

/**
 * It's a greeting
 *
 * @since 1.0.0
 * @category Greetings
 * @example
 *   import { greet } from 'build-fp-ts-lib'
 *   assert.deepStrictEqual(greet('World'), 'Hello, World!')
 */
export const main: IO<void> = log('build-fp-ts-lib')
