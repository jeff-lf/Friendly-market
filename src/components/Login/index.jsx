import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const identifyLogin = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;

        localStorage.setItem("@Market:token", JSON.stringify(accessToken));
        localStorage.setItem("@Market:id", JSON.stringify(user.id));
      })
      .catch(() => {
        toast.error("Usuário não encontrado ou senha incorreta");
      });
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

      <div> {/*essa div fica fora do form */}
        <p>Ainda não possui cadastro?</p>
      </div>
    </form>
  );
};

export default Login;
