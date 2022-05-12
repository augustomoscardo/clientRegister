import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ClientsProviderProps {
  children: ReactNode;
}

interface Client {
  id?: string;
  name: string;
  birthday: string;
  email: string;
  telephone: string;
}

interface ClientsContextData {
  clients: Client[];
  getClients: (id?: string) => Promise<Client[]>;
  createClient: (client: Client) => Promise<void>;
  editClient: (client: Client) => Promise<void>;
  deleteClient: (id: string) => Promise<void>;
}

const ClientsContext = createContext({} as ClientsContextData);

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState<Client[]>([]);

  //this function gets all clients or one client if receives id in argument
  const getClients = async (id?: string) => {
    const response = await api.get<{
      data: Client[];
    }>(id ? `/clients/${id}` : "/clients");

    const { data } = response.data;

    return data;
  };

  useEffect(() => {
    const populateClients = async () => {
      const data = await getClients();
      setClients(data);
    };
    populateClients();
  }, []); //eslint-disable-line

  const createClient = async (clientData: Client) => {
    const response = await api.post("/create", {
      ...clientData,
    });

    const { data: client } = response.data;

    setClients([client, ...clients]);
  };

  const editClient = async (clientData: Client) => {
    const response = await api.put(`/clients/${clientData.id}/edit`, {
      ...clientData,
    });

    const { data: client } = response.data;

    //Compare previous array with new array updated
    const updatedClients: any = clients.map((clientData) =>
      clientData.id === client.id ? client : clientData
    );

    setClients(updatedClients);
  };

  const deleteClient = async (id: string) => {
    await api.delete(`/clients/${id}/delete`);

    const newClientsArray = clients.filter((client) => client.id !== id);

    setClients(newClientsArray);
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        getClients,
        createClient,
        editClient,
        deleteClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export function useClients() {
  const context = useContext(ClientsContext);

  return context;
}
