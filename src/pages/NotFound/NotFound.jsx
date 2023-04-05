

import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"


export function NotFound() {
  const Home = useNavigate();
  const goHome = useCallback(() => {
    Home("/")
  }, []);

  const Login = useNavigate();
  const goVenda = useCallback(() => {
    Login("/vendas")
  }, []);



  return (
    <div className="container" style={{ width: '30rem', color: "red" }}>

      <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito
    -de-erro-404_114360-1811.jpg?size=626&ext=jpg" alt="" />
      <br />
      <h2>Não conseguimos encontrar esta página.</h2>
      <p>Pesquise novamente ou clique nos botões abaixo:</p>

      <Button onClick={goHome} variant="primary" size="sm">Home</Button>{' '}
      <Button onClick={goVenda} variant="success" size="sm">Vendas</Button>{' '}

    </div>
  )
}


