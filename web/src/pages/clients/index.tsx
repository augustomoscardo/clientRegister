import Link from "next/link";
import { useClients } from "../../hooks/useClients";
import { Container, Content } from "./styles";

export default function ListClient() {
  const { clients } = useClients();

  return (
    <Container>
      {clients.length ? (
        <>
          <Content>
            {clients.map((client) => (
              <Link href={`/clients/${client.id}`} passHref key={client.id}>
                <a>
                  <span>{client.name}</span>
                  <p>{client.email}</p>
                  <p>{client.telephone}</p>
                </a>
              </Link>
            ))}
          </Content>
        </>
      ) : (
        <div className="startRegister">
          <h2>Não há registros de clientes.</h2>
          <h3>
            Comece a listagem de clientes clicando{" "}
            <Link href="/" passHref>
              <a>aqui</a>
            </Link>
            .
          </h3>
        </div>
      )}
    </Container>
  );
}
