This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Application layout

A [default layout](./layouts/default/README.md) is available in the [`layouts/` directoy](./layouts/):

```typescript
import { DefaultLayout } from "../layouts"
```

It can be used to wrap page components:

```jsx
import type { NextPage } from "next"
import { DefaultLayout } from "../layouts"

const Demo: NextPage = () => {
  return <DefaultLayout backgroundColor="red.100">Hello World</DefaultLayout>
}

export default Demo
```

The default layout includes the _Application Navigation Bar_ and the _Application Footer_.

The page component is rendered as the _Application Body_. Those components can be found under the [components/](./components) directory:

- [navbar](./components/navbar/README.md)
- [footer](./components/footer/README.md)
- [body](./components/body/README.md)

## Developer tools

- Format the code

```bash
yarn format
```

- Build the application

```bash
yarn build
```

- Start the application in production mode

```bash
yarn start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
