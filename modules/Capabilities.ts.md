---
title: Capabilities.ts
nav_order: 2
parent: Modules
---

## Capabilities overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Capabilities (type alias)](#capabilities-type-alias)
  - [cap](#cap)

---

# utils

## Capabilities (type alias)

**Signature**

```ts
export type Capabilities = {
  log: (msg: string) => TaskEither<Error, void>
}
```

## cap

**Signature**

```ts
export declare const cap: Capabilities
```
