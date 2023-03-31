import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmprestimos } from "../../firebase/emprestimos";
import { Loader } from "../../components/Loader/Loader";

export function Emprestimos() {

    const [emprestimos, setEmprestimos] = useState(null);
    const [lastVisible, setLastVisible] = useState(null)
    useEffect(() => {
       queryEmprestimos()
    }, [])

    function queryEmprestimos() {
        getEmprestimos(lastVisible).then(result => {
            setEmprestimos(result.emprestimos);
            setLastVisible(result.lastDoc)
        })
    
    }

    return (
        <div className="emprestimos">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Emprestimos</h1>
                    <Button as={Link} to="/emprestimos/adicionar" variant="success">Adicionar emprestimo</Button>
                </div>
                <hr />
                {
                    emprestimos === null ?
                        <Loader />
                        :
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Leitor</th>
                                        <th>E-mail</th>
                                        <th>Telefone</th>
                                        <th>Livro</th>
                                        <th>Status</th>
                                        <th>Data de Empréstimo</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emprestimos.map(emprestimo => {
                                        const dataEmprestimo = emprestimo.dataEmprestimo.toDate().toLocaleDateString('pt-br');
                                        return (
                                            <tr key={emprestimo.id}>
                                                <td>{emprestimo.leitor}</td>
                                                <td>{emprestimo.email}</td>
                                                <td>{emprestimo.telefone}</td>
                                                <td>{emprestimo.livro.titulo}</td>
                                                <td>
                                                    <Badge bg={emprestimo.status === "Pendente" ? "warning" : "success"}>{emprestimo.status}</Badge>
                                                </td>
                                                <td>{dataEmprestimo}</td>
                                                <td>
                                                    <Button
                                                        as={Link}
                                                        to={`/emprestimos/editar/${emprestimo.id}`}
                                                        variant="warning"
                                                        size="sm"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </Table>
                            <div className="d-flex justify-content-between">
                            <Button onClick={queryEmprestimos}  variant="success">
                            {"< "}prev
                            </Button>
                            <Button onClick={queryEmprestimos}  variant="success">
                                next {">"}
                            </Button>
                            </div>
                        </>
                }



            </Container>
        </div>
    )
}