import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const identifyLogin = (data) => {
    console.log(data);
    /*     api
      .post("/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;

        localStorage.setItem("@Hub:token", JSON.stringify(accessToken));
        localStorage.setItem("@Hub:id", JSON.stringify(user.id));
      })
      .catch(() => {
        toast.error("Usuário não encontrado ou senha incorreta");
      }); */
  };

  return (
    <form onSubmit={handleSubmit(identifyLogin)} className="loginForm">
      <h3>Seja bem-vindo!</h3>
      <p>Preencha os dados do login para acessar</p>
      <label>
        Email
        <input type="email" {...register("email")} />
      </label>

      <label>
        Senha
        <input type="password" {...register("password")} />
      </label>

      <button>Entrar</button>

      <div>
        <p>Ainda não possui cadastro?</p>

        <button>Cadastre-se</button>
      </div>
    </form>
  );
};

export default Login;
