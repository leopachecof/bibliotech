import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, CardGroup, Button, Modal } from 'react-bootstrap';
import "./VendaLivro.css"
import { useState } from 'react';


export function VendaLivros() {

  return (


    < div className="container1">

    <h1>Vendas</h1>
<hr />

      <Carousel className="carousel" >
        <Carousel.Item>
          <img
            className="img1"
            src="https://livrariacultura.vteximg.com.br/arquivos/ids/149473881-475-475/2112335514.jpg?v=638155992713870000"
            alt=""
          />
          <span className="name">TI  TECNOLOGIA DA INFORMAÇÃO</span>

          <span className="price">R$ 89,00</span>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img2"
            src="https://livrariacultura.vteximg.com.br/arquivos/ids/136284038-475-475/2112283880.jpg?v=638062201365730000"
            alt=""
          />
          <span className="name">REACT APRENDA PRATICANDO</span>

          <span className="price">R$ 49,00</span>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img3"
            src="https://livrariacultura.vteximg.com.br/arquivos/ids/148197828-475-475/2112270223.jpg?v=638144330374500000"
            alt=""
          />
          <span className="name">JAVASCRIPT DESCOMPLICADO</span>

          <span className="price"> R$ 71,00</span>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img4"
            src="https://livrariacultura.vteximg.com.br/arquivos/ids/148741971-475-475/890837961.jpg?v=638147514796300000"
            alt=""
          />
          <span className="name">HTML PARA INICIANTES</span>

          <span className="price"> R$ 35,00</span>

        </Carousel.Item>
      </Carousel>
      <BasicCard />
    
      <App />

    </div>
  )
}


export function BasicCard() {

  return (

    <div className="basic">
      <Container className='p-1'>
        <CardGroup>
          <Card >
            <Card.Body>
              <Card.Img src="https://livrariacultura.vteximg.com.br/arquivos/ids/45252852-1000-1000/2112289908.jpg?v=637625974304730000" alt="">

              </Card.Img>
              <Card.Title>Construindo aplicações com Nodejs.</Card.Title>
              <Card.Text>
                R$ 39,90
              </Card.Text>
              <Button variant="primary">Confira</Button>
            </Card.Body>
          </Card>
          <Card >
            <Card.Body>
              <Card.Img src="https://livrariacultura.vteximg.com.br/arquivos/ids/138160072-475-475/image-ee4eda93d35948caa4f03be8fb99e87e.jpg?v=638082900333300000" alt="">
              </Card.Img>
              <Card.Title>Javascript de Cabo a Rabo</Card.Title>
              <Card.Text>
                R$ 49,90
              </Card.Text>
              <Button variant="primary">Confira</Button>
            </Card.Body>
          </Card>

          <Card >
            <Card.Body>
              <Card.Img src="https://livrariacultura.vteximg.com.br/arquivos/ids/140886235-475-475/image-cfaadb43e48e4779a0cfca86361846a3.jpg?v=638108820570100000" alt="">

              </Card.Img>
              <Card.Title>Lógica de programação e algoritmos com JavaScript:</Card.Title>
              <Card.Text>
                R$ 39,90
              </Card.Text>
              <Button variant="primary">Confira</Button>
            </Card.Body>
          </Card>
          <Card >
            <Card.Body>
              <Card.Img src="https://livrariacultura.vteximg.com.br/arquivos/ids/148198481-475-475/2112275238.jpg?v=638144331575900000" alt="">

              </Card.Img>
              <Card.Title>Python para data science para leigos</Card.Title>
              <Card.Text>
                R$ 59,90
              </Card.Text>
              <Button variant="primary">Confira</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>

  );
};

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className='btn' variant="primary" onClick={() => setShow(true)}>
        Clique aqui
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Projeto Bibliotech
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}







export default VendaLivros;







