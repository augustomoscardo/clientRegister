import { Loading } from "../Loading";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { useClients } from "../../hooks/useClients";
import editFormSchema from "./schema";

import { FormContainer } from "./styles";
import { useRouter } from "next/router";

interface EditFormData {
  id?: string;
  name: string;
  birthday: string;
  email: string;
  telephone: string;
}

export function EditForm() {
  const [isSubmitingData, setIsSubmittingData] = useState(false);
  const [user, setUser] = useState<EditFormData | null>(null);

  const { query, push } = useRouter();

  const { editClient, getClients } = useClients();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(editFormSchema),
    defaultValues: {
      name: "",
      birthday: "",
      email: "",
      telephone: "",
    },
  });

  const loadClient = async () => {
    const [data] = await getClients(query.slug as string);
    setUser(data);
    reset(data);
  };

  const onSubmit = handleSubmit<EditFormData>(async (data) => {
    setIsSubmittingData(true);

    const { name, birthday, email, telephone } = data;

    if (!user) return;

    await editClient({
      id: user.id,
      name,
      birthday,
      email,
      telephone,
    });

    setIsSubmittingData(false);

    toast.success("Cliente atualizado!");
  });

  useEffect(() => {
    if (!query.slug) return;
    console.log(query.slug);
    loadClient();
  }, [query.slug]); // eslint-disable-line

  return (
    <FormContainer onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="birthday">Data de Nascimento</label>
        <input
          type="date"
          id="birthday"
          {...register("birthday", { required: true })}
        />
        {errors.birthday && <p>{errors.birthday.message}</p>}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p>
            <p>{errors.email.message}</p>
          </p>
        )}
      </div>
      <div>
        <label htmlFor="label">Telefone - Whatsapp</label>
        <input
          type="tel"
          id="telephone"
          maxLength={15}
          placeholder="Digite seu número para contato"
          {...register("telephone", { required: true })}
        />
        {errors.telephone && (
          <p>
            <p>{errors.telephone.message}</p>
          </p>
        )}
      </div>

      {isSubmitingData ? (
        <button disabled>
          <Loading />
        </button>
      ) : (
        <button type="submit">Salvar</button>
      )}
    </FormContainer>
  );
}
