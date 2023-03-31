import {Card, Container } from "react-bootstrap";




// Dica: Utilize as funções filter e propriedade length para montar as visualizações.
export function Home() {
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
          <Card.Text style={{color: 'green', fontWeight: "bold"}}>NUMERO</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">Total de livros</Card.Title>
          <Card.Text style={{color: 'green', fontWeight: "bold"}}>NUMERO</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">Pendentes/Devolvidos</Card.Title>
          <Card.Text style={{color: 'green', fontWeight: "bold"}}>NUMERO</Card.Text>
        </Card.Body>
      </Card>
     </div>
     </Container>
    </div>
  );
}
