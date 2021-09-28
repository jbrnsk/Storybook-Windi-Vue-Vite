# Storybook-Windi-Vue-Vite

A demo app to troubleshoot the issue in [this](https://github.com/windicss/windicss/issues/480) conversation on the WindiCSS repo.

## Install and Run Storybook

`pnpm install`
`pnpm storybook`

## Troubleshooting the Issue

Styles on button not applying:

![image](https://user-images.githubusercontent.com/11774971/135123958-1f0f47a6-bf94-4889-abf3-e36c54fbbe91.png)

If you uncomment the safelist in windi.config.ts, see that styles now apply:

![image](https://user-images.githubusercontent.com/11774971/135124238-a1a0737b-97b0-404c-a00f-022fb64a7e44.png)
