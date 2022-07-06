import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { StyledForm } from "./style";

const Register = () => {
  const schema = yup.object().shape({
    fullname: yup
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
    cellphone: yup.number().typeError("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    user_image: yup
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
      .post("/signup", data)
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
            {...register("fullname")}
            placeholder="Digite aqui seu nome"
          />
        </label>
        {errors.fullname && (
          <span className="error"> {errors.fullname.message}</span>
        )}

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
            {...register("cellphone")}
            placeholder="Digite aqui seu telefone"
          />
        </label>
        {errors.cellphone && (
          <span className="error"> {errors.cellphone.message}</span>
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
            {...register("user_image")}
            placeholder="Insira o link da foto"
          />
        </label>
        {errors.user_image && (
          <span className="error"> {errors.user_image.message}</span>
        )}

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
