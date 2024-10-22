<!-- Intro -->
<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🤖 Gam3r Store</a>
</h1>
<p align="center">🚀 Ecommerce com catalogo de produtos e carrinho</p>

<div align="center">


  <div style="display: flex; align-items: flex-start;">
  <span>
    <img src="https://github.com/user-attachments/assets/cee5de16-b1cf-4303-ab4f-f72a80018653" alt="1022(1)" style="width: 600px; height: auto;" />
  </span>
  <span>
    <img src="https://github.com/user-attachments/assets/e91bec3b-9850-46b7-ac81-e4d686056584" alt="1022(2)" style="width: 191px; height: auto;" />
  </span>
</div>
  
</div>




<!-- TechStack -->
### 🛠 Tech Stack

#### **Frontend:**
- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind](https://tailwindcss.com)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

#### **Backend:**
- [NestJS](https://nestjs.com)
- [Prisma](https://www.prisma.io)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

#### **DB:**
- [Postgresql](https://www.postgresql.org)

#### **Infrastructure:**
- [AWS EC2](https://aws.amazon.com/ec2)
- [AWS RDS](https://aws.amazon.com/rds)

</br>

### 🧑🏻‍💻 Sobre
  4 apps em um monorepo(turborepo): frontend, backend, mobile e core contendo o nucleo da app.

### 📄 Rodar localmente
1. Clone o repo
2.  Add .env no frontend contendo a url de conexao com o backend.
    - .env.sample: NEXT_PUBLIC_API_URL=http://localhost:3005
3.  Add .env no backend contendo a url de conexao com o db
    - .env.sample: DATABASE_URL= postgresql://user:password@localhost:5432/gam3r.store?schema=public
4. Rodar dentro da pasta backend: npx prisma generate
5. Executar projeto: No root da pasta: yarn dev

### 🚀 Deployment

Este projeto está atualmente hospedado na **AWS** utilizando o plano **Free Tier**, com a seguinte configuração:

#### **Frontend & Backend:**
- Hospedado em uma instância **EC2**, utilizando as máquinas mais básicas e elegíveis para o Free Tier (como `t2.micro` ou `t3.micro`).
- O frontend foi implementado com **Next.js** e o backend com **NestJS**, ambos rodando na mesma instância EC2.

#### **Banco de Dados:**
- O banco de dados foi configurado utilizando o serviço **RDS** da AWS, com um banco **PostgreSQL**.
- A instância do banco também está rodando sob o Free Tier (`db.t2.micro`), que oferece até 750 horas de uso gratuito por mês.

#### **Serviços Utilizados:**
- **EC2 (Elastic Compute Cloud):** Para hospedar tanto o frontend quanto o backend.
- **RDS (Relational Database Service):** Para o banco de dados PostgreSQL.
- **AWS Free Tier:** Todos os recursos foram configurados utilizando as opções elegíveis para o plano gratuito da AWS, garantindo que não haja cobranças adicionais enquanto estiver dentro dos limites do Free Tier.















