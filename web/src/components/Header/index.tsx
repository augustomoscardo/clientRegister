import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Content } from "./styles";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Container>
      <Content>
        <h1>MyLogo</h1>

        <div className="navLinks">
          <Link href="/" passHref>
            <a className={asPath === "/" ? "active" : ""}>Início</a>
          </Link>
          <Link href="/clients" passHref>
            <a className={asPath.startsWith("/clients") ? "active" : ""}>
              Clientes
            </a>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
