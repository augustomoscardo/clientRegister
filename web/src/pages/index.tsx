import type { NextPage } from "next";
import Head from "next/head";
import { RegisterForm } from "../components/RegisterForm";
import { Container, Content } from "./homeStyles";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Registro de Clientes</title>
      </Head>

      <Content>
        <h1>Cadastro de novo cliente</h1>

        <div>
          <p>Faça seu registro e aguarde nosso contato.</p>

          <RegisterForm />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
