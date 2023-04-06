import {
    Button,
    Container,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import loginImg from "../../assets/images/login.png";
import { useContext } from "react";
import { atualizarUsuario, deletarCadastro } from "../../firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export function PerfilUsuario() {
    const usuarioLogado = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        const displayName = data.nome;
        const email = data.email;
        const senha = data.senha;
        atualizarUsuario(displayName, email, senha).then(() => {
            toast.success("Alterado com sucesso!", {
                position: "bottom-right",
                duration: 2500,
            });
        });
    }

    function deletarUsuario(usuarioLogado) {
        deletarCadastro(usuarioLogado).then(() => {
            toast.success("Excluído com sucesso!", {
                duration: 2500,
                position: "bottom-right",
            });
        });
    }
    function recarregarAPagina() {
        window.location.reload();
    }

    return (
        <Container fluid className="my-5">
            <p className="text-center">
                <img src={loginImg} width="256" alt="Logo" />
            </p>
            <h1>Perfil do Usuario</h1>
            <h4>Editar</h4>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("nome", {
                            required: "Nome é obrigatório!",
                            maxLength: { value: 255, message: "Limite de 255 caracteres!" },
                        })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("email", {
                            required: "Email é obrigatório!",
                            maxLength: { value: 255, message: "Limite de 255 caracteres!" },
                        })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        {...register("senha", {
                            required: "Senha é obrigatória!",
                            maxLength: { value: 255, message: "Limite de 255 caracteres!" },
                        })}
                    />
                </Form.Group>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Clique aqui para salvar</Tooltip>}
                >
                    <Button type="submit" variant="success">
                        Salvar
                    </Button>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Clique aqui para voltar</Tooltip>}
                >
                    <Button
                        onClick={recarregarAPagina}
                        variant="success"
                        className="ms-3 ps-4 pe-4"
                    >
                        Sair
                    </Button>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Clique aqui para excluir</Tooltip>}
                >
                    <Button
                        onClick={() => deletarUsuario(usuarioLogado)}
                        variant="danger"
                        className="ms-3 ps-3 pe-3"
                    >
                        Excluir
                    </Button>
                </OverlayTrigger>
            </Form>
        </Container>
    );
}
