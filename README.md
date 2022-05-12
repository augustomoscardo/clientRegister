This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all depencies from package.json:
```bash
yarn
```

Then run the development server:
```bash
yarn dev
```

Make Sure to Setup Prisma:
```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Cliente {
  id String @id @default(uuid())

  name      String
  birthday  String
  email     String
  telephone String


  @@map("clientes")
}
```

Execute 
```
yarn prisma migrate dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project view

  <div styles="display:flex; align-intems: center; jusity-content:space-between; width:100%">
    <img src="img/desktop-design1.png" alt="Mobile design" width="900" height="400">
    <img src="img/desktop-design2.png" alt="Mobile design" width="900" height="400">
    <img src="img/desktop-design3.png" alt="Mobile design" width="900" height="400">
  </div>
  <div "display:flex; align-intems: center; jusity-content:space-between; width:100%>
    <img src="img/mobile-design1.png" alt="Mobile design" width="300" height="500">
    <img src="img/mobile-design2.png" alt="Mobile design" width="300" height="500">
    <img src="img/mobile-design3.png" alt="Mobile design" width="300" height="500">
  </div>

  ## Technologies
Front:
- NextJS
- TypeScript
- ReactJS
- Phosphor-icons
- Formik
- Yup
- Styled-Components
- Axios

Back: 
- Node
- Express
- Cors
- Prismma ORM
- SQLite

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/augustomoscardo)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/augustomoscardo)

## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
