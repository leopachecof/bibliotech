import { useEffect, useState } from "react";
import { Button, Container, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { deleteLivro, getLivros, updateLivro } from "../../firebase/livros";


export function Livros() {

    const [livros, setLivros] = useState(null);

    useEffect(() => {
        initializeTable();
    }, []);

    function initializeTable() {
        getLivros().then(resultados => {
            setLivros(resultados)
        })
    }

    function onDeleteLivro(id, titulo, livro) {
        const deletar = window.confirm(`Tem certeza que deseja excluir o livro ${titulo}?`);
        if(deletar) {
            livro.boolean = false;
            updateLivro(id, livro).then(() => {
                toast.success(`${titulo} apagado com sucesso!`, {duration: 2000, position: "bottom-right"});
                initializeTable();
            })
        }
    }

    return (
        <div className="livros">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Livros</h1>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                        <Tooltip>Clique aqui para adicionar livro</Tooltip>}>
                        <Button as={Link} to="/livros/adicionar" variant="success">
                            Adicionar Livro
                        </Button>
                    </OverlayTrigger>
                </div>
                <hr />
                {livros === null ?
                    <Loader />
                    : 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>ISBN</th>
                                <th>Imagem</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livro => {
                                return (
                                    <tr key={livro.id}>
                                        <td>
                                            <Button
                                                as={Link}
                                                to={`/livros/detalhes/${livro.id}`}
                                                variant="btn"
                                                size="sm"
                                                className="me-2">{livro.titulo}
                                            </Button>
                                        </td>
                                        <td>{livro.autor.nome}</td>
                                        <td>{livro.categoria}</td>
                                        <td>{livro.isbn}</td>
                                        <td>
                                            <img src={livro.urlCapa} alt={livro.titulo} />
                                        </td>
                                        <td>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={
                                            <Tooltip>Clique aqui para editar</Tooltip>}>
                                            <Button
                                                as={Link}
                                                to={`/livros/editar/${livro.id}`}
                                                variant="warning"
                                                size="sm"
                                                className="me-2"
                                            >
                                                <i className="bi bi-pencil-fill"></i>
                                            </Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={
                                            <Tooltip>Clique aqui para excluir</Tooltip>}>
                                            <Button size="sm" variant="danger" onClick={() => onDeleteLivro(livro.id, livro.titulo, livro)}>
                                                <i className="bi bi-trash3-fill"></i>
                                            </Button>
                                        </OverlayTrigger> 
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                }
            </Container>
        </div>
    )
}