import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { getEmprestimos } from "../../firebase/emprestimos";
import { getLivros } from "../../firebase/livros";
import "./Home.css";

export function Home() {

  const [emprestimos, setEmprestimos] = useState();
  const [livros, setLivros] = useState();

  useEffect(() => {
    getEmprestimos().then((busca) => {
      setEmprestimos(busca.emprestimos);
    });
  }, []);

  useEffect(() => {
    getLivros().then((busca) => {
      setLivros(busca);
    });
  }, []);

  const pendentes = emprestimos?.filter(
    (emprestimo) => emprestimo.status === "Pendente"
  );
  const devolvidos = emprestimos?.filter(
    (emprestimo) => emprestimo.status === "Entregue"
  );

  return (
    <div className="home">
      <Container>
        <h1>Visão Geral</h1>
        <hr />
        <div className="d-flex justify-content-evenly">
          <Card className="card-home"
          >
            <Card.Body>
              <Card.Title>Total de empréstimos</Card.Title>
              <Card.Text
                style={{ color: "green", fontWeight: "bold", fontSize: 50 }}
                className="d-flex justify-content-center"
              >
                {emprestimos ? emprestimos.length : 0}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-home"
          >
            <Card.Body>
              <Card.Title>Total de livros</Card.Title>
              <Card.Text
                style={{ color: "green", fontWeight: "bold", fontSize: 50 }}
                className="d-flex justify-content-center"
              >
                {livros ? livros.length : 0}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-home"
          >
            <Card.Body>
              <Card.Title>Relação de empréstimos</Card.Title>
              <Card.Text
                style={{ color: "green", fontWeight: "bold", fontSize: 25 }}
                className="d-flex justify-content-center"
              >
                {`${devolvidos ? devolvidos.length : 0} devolvidos`}
              </Card.Text>
              <Card.Text
                style={{ color: "#eead2d", fontWeight: "bold", fontSize: 25 }}
                className="d-flex justify-content-center"
              >
                {`${pendentes ? pendentes.length : 0} pendentes`}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

