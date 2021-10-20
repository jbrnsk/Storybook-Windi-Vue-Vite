# Storybook-Windi-Vue-Vite

A demo app to troubleshoot the issue in [this](https://github.com/windicss/windicss/issues/480) conversation on the WindiCSS repo.

**SOLVED**

I tried with and without an extract.include like so:

```js
 extract: {
    include: [ 'src/**/*.{vue,html,js,ts}')],
  },
```

It needed to be this:

```js
const { dirname, join, resolve } = require('path');

const basePath = dirname(resolve(__dirname));

....

 extract: {
    exclude: [join(basePath, '**/node_modules/**/*')],
    include: [join(basePath, '**/src/**/*.{vue,html,js,ts}')],
  },
```

**EVEN BETTER SOLUTION**

You can just specify the root directory when adding the WindiCSS plugin to your storybook main.js, and then you don't need a workaround in the `windi.config` file. Like so:

```js
 config.plugins.push(
   WindiCSS({
     config: join(__dirname, '..', 'windi.config.ts'),
     root: dirname(__dirname),
   })
 );
```

See referenced discussion for more info.

## Install and Run Storybook

`pnpm install`
`pnpm storybook`

## Troubleshooting the Issue

Styles on button not applying:

![image](https://user-images.githubusercontent.com/11774971/135123958-1f0f47a6-bf94-4889-abf3-e36c54fbbe91.png)

If you uncomment the safelist in windi.config.ts, see that styles now apply:

![image](https://user-images.githubusercontent.com/11774971/135124238-a1a0737b-97b0-404c-a00f-022fb64a7e44.png)
