# Dev Note
#### styled-components 與 server-rendered Material UI 專案不相容
  > As of late 2021, styled-components is not compatible with server-rendered Material UI projects. This is because `babel-plugin-styled-components` isn't able to work with the `styled()`utility inside `@mui` packages. See this [GitHub issue](https://github.com/mui/material-ui/issues/29742) for more details.
  We **strongly recommend** using **Emotion** for SSR projects.

Ref: [Material UI_Using styled-components](https://mui.com/material-ui/integrations/styled-components/)

#### 8px 的網格系統
  > Material UI uses [a recommended 8px scaling factor](https://m2.material.io/design/layout/understanding-layout.html) by default.

Ref: [Material UI_Spacing](https://mui.com/material-ui/customization/spacing/)

#### [DisableElevation demo — Material UI from CodeSandBox](https://codesandbox.io/embed/disableelevation-demo-material-ui-j02r4c?fontsize=14&hidenavigation=1&theme=dark)

#### 用 `Emotion` 在組件裡寫 `css prop` 時，Browser HTML DOM 會渲染:
>You have tried to stringify object returned from css function. It isn't supposed to be used directly (e.g. as value of the className prop), but rather handed to emotion so it can handle it (e.g. as value of css prop).
且樣式無更新

原因: 使用 `jsx` function 取代 `React.createElement`。
解法: 在引入 `@emotion/react` 的上方填上對應的註解: ``` /** @jsxImportSource @emotion/react */ ```，目的是讓編譯後的程式為 `JSX` 不是 `React.createElement`。

Ref: [Emotion_jsx-pragma](https://emotion.sh/docs/css-prop#jsx-pragma)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Button- Cursor not-allowed
- You should add `pointer-events: none;` back when you need to display [tooltips on disabled elements.](https://mui.com/material-ui/react-tooltip/#disabled-elements)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
