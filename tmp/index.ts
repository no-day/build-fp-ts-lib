// import * as myLib from '../src'
// import * as fc from 'fast-check'
// import { fileData, dirData, DirContents } from 'fp-ts-virtual-filesystem'
// import * as J from 'fp-ts/Json'

// const foo = (x: any): any => 1 as any

// const dir = (x: DirContents = {}) => dirData(x)
// const file = (xs: string[] = []) => fileData(xs)

// const originPackageJson = {
//   name: 'build-fp-ts-lib',
//   homepage: 'http://github.com/no-day/build-fp-ts-lib',
//   version: '1.0.0',
//   license: 'MIT',
//   peerDependencies: {
//     'fp-ts': '^2.9.5',
//   },
//   dependencies: {
//     'fp-ts-virtual-filesystem': '^1.0.1',
//   },
//   devDependencies: {
//     '@types/jest': '^26.0.20',
//   },
//   scripts: {
//     build: 'tsc -p tsconfig.build.json',
//   },
// }

// const targetPackageJson = {
//   name: 'build-fp-ts-lib',
//   homepage: 'http://github.com/no-day/build-fp-ts-lib',
//   version: '1.0.0',
//   license: 'MIT',
//   peerDependencies: {
//     'fp-ts': '^2.9.5',
//   },
//   dependencies: {
//     'fp-ts-virtual-filesystem': '^1.0.1',
//   },
// }

// const originFs = dir({
//   src: dir({
//     'index.ts': file(),
//   }),
//   'package.json': jsonFile(originPackageJson),
// })

// const targetFs = dir({
//   dist: dir({
//     'package.json': jsonFile(targetPackageJson),
//   }),
// })

// describe('greet', () => {
//   it('transforms the package.json', () => {
//     expect(foo(originFs)).toMatchObject(targetFs)
//   })
// })

// const from = dir({
//   src: dir({
//     'index.ts': file(),
//   }),
//   'package.json': file(),
// })

// const to = dir({
//   dist: dir({
//     'package.json': file(),
//     'index.js': file(),
//     'index.es6.js': file(),
//     'index.d.ts': file(),
//     ModuleA: dir({
//       'package.json': file(),
//       'index.js': file(),
//       'index.es6.js': file(),
//       'index.d.ts': file(),
//       ModuleB: dir({
//         'package.json': file(),
//         'index.js': file(),
//         'index.es6.js': file(),
//         'index.d.ts': file(),
//       }),
//     }),
//   }),
//   temp_lib: dir({
//     'index.js': file(),
//     'index.d.ts': file(),
//   }),
//   temp_es6: dir({
//     'index.js': file(),
//     'index.d.ts': file(),
//   }),
// })
