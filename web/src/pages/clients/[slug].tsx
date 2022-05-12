import { useRouter } from "next/router";
import { Trash } from "phosphor-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { EditForm } from "../../components/EditForm";
import { useClients } from "../../hooks/useClients";
import { Container, Content } from "./clientStyles";

export default function Client() {
  const { getClients, deleteClient } = useClients();

  const { query, push } = useRouter();

  async function handleDeleteClient() {
    await deleteClient(query.slug as string);
    toast.success("Usuário deletado");

    push("/clients");
  }

  // useEffect(() => {
  //   if (!query.slug) return;

  //   console.log("getting client", query.slug);

  //   getClients(query.slug as string);
  // }, [query.slug]); // eslint-disable-line

  return (
    <Container>
      <Content>
        <div className="buttonActions">
          <button className="deleteButton" onClick={handleDeleteClient}>
            <Trash size={24} weight="light" />
          </button>
        </div>

        <EditForm />
      </Content>
    </Container>
  );
}
