import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAutores } from "../../firebase/autores";
import { Loader } from "../../components/Loader/Loader";
import "./Autores.css";


export function Autores() {

    const [autores, setAutores] = useState(null);

    useEffect(() => {
        getAutores().then(resultado =>{
            setAutores(resultado)
        })
        
    }, []);

    return (
        <div className="autores">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Autores</h1>
                    <Button as={Link} to="/autores/adicionar" variant="success">
                        Adicionar Autor
                    </Button>
                </div>
                <hr />
                {autores === null ?
                    <Loader />
                    :
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autores.map(autor => {
                            return (
                                <tr>
                                    <td>{autor.nome}</td>
                                    <td>{autor.email}</td>
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