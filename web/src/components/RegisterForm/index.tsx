import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Loading } from "../Loading";
import registerFormSchema from "./schema";

import { FormContainer } from "./styles";
import { useClients } from "../../hooks/useClients";
import InputMask from "react-input-mask";
import toast from "react-hot-toast";

interface RegisterFormData {
  name: string;
  birthday: string;
  email: string;
  telephone: string;
}

export function RegisterForm() {
  const [isSubmitingData, setIsSubmittingData] = useState(false);
  const { createClient } = useClients();

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      name: "",
      birthday: "",
      email: "",
      telephone: "",
    },
  });

  const { errors } = formState;

  const onSubmit = handleSubmit<RegisterFormData>(async (data) => {
    setIsSubmittingData(true);

    const { name, birthday, email, telephone } = data;

    await createClient({
      name,
      birthday,
      email,
      telephone,
    });

    toast.success("Cliente cadastrado!");
    reset();
    setIsSubmittingData(false);
  });

  return (
    <FormContainer onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          type="date"
          id="birthday"
          {...register("birthday", { required: true })}
        />
        {errors.birthday && <p>{errors.birthday.message}</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
          {...register("email", { required: true })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <InputMask
          mask="(99)99999-9999"
          type="tel"
          id="telephone"
          placeholder="Digite seu número para contato"
          defaultValue=""
          {...register("telephone", { required: true })}
        />
        {errors.telephone && <p>{errors.telephone.message}</p>}
      </div>

      {isSubmitingData ? (
        <button disabled>
          <Loading />
        </button>
      ) : (
        <button type="submit">Cadastrar</button>
      )}
    </FormContainer>
  );
}
