import { useState } from "react";
import { Header } from "../../components/Header";
import Register from "../../components/Register";

const LoginOrRegister = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      <Header />
      {registered ? (
        <>
          <h1>olá</h1>
          <button onClick={() => setRegistered(false)}>CADASTRAR</button>
        </>
      ) : (
        <>
          <Register />
          <button onClick={() => setRegistered(true)}>
            JÁ POSSUO UMA CONTA
          </button>
        </>
      )}

      {/* apresentação */}
    </>
  );
};

export default LoginOrRegister;
