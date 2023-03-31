import { useEffect, useState } from "react";
import {Card, Container } from "react-bootstrap";
import { getEmprestimos } from "../../firebase/emprestimos";
import { getLivros } from "../../firebase/livros";


// Dica: Utilize as funções filter e propriedade length para montar as visualizações.
export function Home() {
  const [emprestimos, setEmprestimos] = useState();
  const [livros, setLivros] = useState();


useEffect(() => {
  getEmprestimos().then(busca => {
      setEmprestimos(busca);
  })
  emprestimo()
  getLivros().then(busca => {
    setLivros(busca)
  })
}, []);



function emprestimo(){
  emprestimos.map((emprestimo) =>{
    const pendentes = [];
    if(emprestimo.status === "Pendente"){
      pendentes.push(emprestimo)
    }
    console.log(emprestimo)
  })
}


// const pendentes = emprestimos.filter(emprestimo => {

//   emprestimo.status === "Pendente"
//   console.log(emprestimo.status)
// })


  return (
    <div className="home">
     <Container>
     <div className="d-flex justify-content-between align-items-center">
     <h1>Visão Geral</h1>
     </div>
      <hr/>
      <div className="d-flex justify-content-evenly align-items-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">Total de empréstimos</Card.Title>
            <Card.Text 
            style={{color: 'green', fontWeight: "bold"}}>
              {emprestimos? emprestimos.length : 0 }
            </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">Total de livros</Card.Title>
            <Card.Text 
            style={{color: 'green', fontWeight: "bold"}}>
              {livros? livros.length : 0 }
            </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">Pendentes/Devolvidos</Card.Title>
            <Card.Text 
            style={{color: 'green', fontWeight: "bold"}}>
              Pendentes: 
            </Card.Text>
        </Card.Body>
      </Card>
     </div>
     </Container>
    </div>
  );
}
