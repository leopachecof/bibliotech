import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getLivro } from "../../firebase/livros";
import Table from "react-bootstrap/Table";

export function DetalhesLivro() {
  const { id } = useParams();

  const [livro, setLivro] = useState(null);

  useEffect(() => {
    getLivro(id).then((livro) => {
      setLivro(livro);
    });
  }, [id]);

  return (
    <div className="editar-livro">
      <Container>
        <h1>Detalhes do livro</h1>
        <hr />
        <Table key={livro} className="table" striped bordered hover>
          <thead >
            <tr>
              <th className="align-middle">Capa</th>
              <td><img src={livro?.urlCapa} alt="Minha Imagem" className="img-fluid" width="200" /></td>
            </tr>
            <tr>
              <th className="align-middle">Título do Livro</th>
              <td>{livro?.titulo}</td>
            </tr>
            <tr>
              <th className="align-middle">Autor</th>
              <td>{livro?.autor}</td>
            </tr>
            <tr>
              <th className="align-middle">Categoria</th>
              <td>{livro?.categoria}</td>
            </tr>
            <tr>
              <th className="align-middle">ISBN</th>
              <td>{livro?.isbn}</td>
            </tr>
          </thead>
        </Table>
        <Button type="submit" as={Link} to="/livros" variant="success">
          Voltar
        </Button>
      </Container>
    </div>
  );
}
