import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { sendPasswordResetEmail  } from 'firebase/auth';

  
function EsqueciSenha() {
  
  return (
    
   <Container className='novasenha'>
    
     <Form>
     <Form.Label>Criar nova senha. </Form.Label>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Digite seu e-mail cadastrado." />
        <Form.Text className="text-muted">
          Enviaremos um código de verificação.
        </Form.Text>
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  
   </Container>
   );

  }


  
export default EsqueciSenha
