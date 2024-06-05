# Sweatpants

> [!CAUTION] Please don't use this. This is a sandbox for personal side projects and I cannot recommend Sweatpants for production environments.

## @sweatpants/react

A simple React component library. See [sweatpants.vercel.app](https://sweatpants.vercel.app).

**Installation**

```sh
npm i @sweatpants/react --save
```

**Components**

- Button
- ButtonGroup
- Card
- Label
- Link
- Select
- ScreenReaderOnly
- Slot
- Stack
- Text
- TextField

## @sweatpants/panda-preset

A `@panda/dev` preset. See [what's included](https://sweatpants.vercel.app/?entry=root__panda-preset--tokens).

**Installation**

```sh
npm i @sweatpants/panda-preset --save-dev
```

```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  presets: ['@sweatpants/panda-preset'],
});
```
