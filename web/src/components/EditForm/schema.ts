import * as yup from "yup";

const telephoneRegExp = /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

const editFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  birthday: yup.string().required("Data de nascimento obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  telephone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(
      telephoneRegExp,
      "Insira um nº de celular Whatsapp Ex: (12)92222-2222"
    ),
});

export default editFormSchema;
