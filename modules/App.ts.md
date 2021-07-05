---
title: App.ts
nav_order: 1
parent: Modules
---

## App overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [App (type alias)](#app-type-alias)
  - [Env (type alias)](#env-type-alias)
  - [main](#main)

---

# utils

## App (type alias)

**Signature**

```ts
export type App<A> = ReaderTaskEither<Env, Error, A>
```

## Env (type alias)

**Signature**

```ts
export type Env = Capabilities & { config: Config }
```

## main

**Signature**

```ts
export declare const main: App<void>
```
