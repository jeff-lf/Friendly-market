import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { StyledForm } from "./style";

const Register = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-Za-z]+$/, "Apenas letras"),
    email: yup
      .string()
      .matches(
        /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        "Formato de email inválido"
      )
      .required("Campo obrigatório"),
    cpf: yup.number().typeError("Campo obrigatório"),
    number: yup.number().typeError("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    img: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
        "Link inválido"
      ),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "Senha deve conter no mínimo 8 caracteres com pelo menos 1 letra maíuscula, 1 número e 1 caractere especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const registerUser = (data) => {
    console.log(data);
    /* api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado");
      }); */
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>

        <label>
          Nome
          <input
            type="text"
            {...register("name")}
            placeholder="Digite aqui seu nome"
          />
        </label>
        {errors.name && <span className="error"> {errors.name.message}</span>}

        <label>
          Email
          <input
            type="text"
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
        </label>
        {errors.email && <span className="error"> {errors.email.message}</span>}

        <label>
          CPF
          <input
            type="number"
            {...register("cpf")}
            placeholder="Digite aqui seu cpf"
          />
        </label>
        {errors.cpf && <span className="error"> {errors.cpf.message}</span>}

        <label>
          Telefone
          <input
            type="number"
            {...register("number")}
            placeholder="Digite aqui seu telefone"
          />
        </label>
        {errors.number && (
          <span className="error"> {errors.number.message}</span>
        )}
        <label>
          Cidade
          <input
            type="text"
            {...register("city")}
            placeholder="Digite aqui a cidade"
          />
        </label>
        {errors.city && <span className="error"> {errors.city.message}</span>}

        <label>
          Foto
          <input
            type="text"
            {...register("img")}
            placeholder="Insira o link da foto"
          />
        </label>
        {errors.img && <span className="error"> {errors.img.message}</span>}

        <label>
          Senha
          <input
            type="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
          />
        </label>
        {errors.password && (
          <span className="error"> {errors.password.message}</span>
        )}

        <label>
          Confirmar senha
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Digite novamente sua senha"
          />
        </label>
        {errors.confirmPassword && (
          <span className="error"> {errors.confirmPassword.message}</span>
        )}

        <button type="submit">CADASTRAR</button>

        {/* <button type="button" onClick={history.goBack}>
          VOLTAR
        </button> */}
      </StyledForm>
    </>
  );
};

export default Register;
