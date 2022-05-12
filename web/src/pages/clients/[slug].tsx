import { useRouter } from "next/router";
import { Trash } from "phosphor-react";
import toast from "react-hot-toast";
import { EditForm } from "../../components/EditForm";
import { useClients } from "../../hooks/useClients";
import { Container, Content } from "./clientStyles";

export default function Client() {
  const { deleteClient } = useClients();

  const { query, push } = useRouter();

  async function handleDeleteClient() {
    await deleteClient(query.slug as string);
    toast.success("Usuário deletado");

    push("/clients");
  }

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
