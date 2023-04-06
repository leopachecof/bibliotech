import {
  Button,
  Container,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png";
import googleIcon from "../../assets/icons/googleIcon.png";
import { useForm } from "react-hook-form";
import {
  cadastrarEmailSenha,
  loginGitHub,
  loginGoogle,
  loginfacebook,
} from "../../firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FacebookIcon from "../../assets/icons/facebookIcon.png";
import GitHubIcon from "../../assets/icons/githubicon.png";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";

export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const usuarioLogado = useContext(AuthContext);

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const toggleMostrarSenha = () => setMostrarSenha(!mostrarSenha);

  // condicional para redirecionar o usuário para home caso esteja logado
  if (usuarioLogado !== null) {
    return <Navigate to="/" />;
  }

  function onSubmit(data) {
    const { email, senha } = data;
    cadastrarEmailSenha(email, senha)
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }
  function onLoginGitHub() {
    loginGitHub()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.displayName}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }
  function onLoginGoogle() {
    // then = quando der certo o processo
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }
  function onLoginFacebook() {
    loginfacebook()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.displayName}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  return (
    <>
      <Container fluid className="my-5">
        <p className="text-center">
          <img src={logoIcon} width="256" alt="Logo do app"  style={{width:"256px" }} />
        </p>
        <h4>Faça parte da nossa plataforma</h4>
        <p className="text-muted">
          Já tem conta? <Link to="/login">Entre</Link>
        </p>
        <hr />
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Clique aqui para entrar</Tooltip>}
        >
          <Button className="mb-3 btnLogin" variant="danger" onClick={onLoginGoogle}>
            <img src={googleIcon} width="32" alt="Logo do google" style={{marginRight: 5}} />
            Entrar com o Google
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Clique aqui para entrar</Tooltip>}
        >
          <Button
            className="mb-3 ms-3 btnLogin"
            variant="primary"
            onClick={onLoginFacebook}
          >
            <img src={FacebookIcon} width="32" alt="Facebook icon"  /> Entrar com o
            Facebook
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Clique aqui para entrar</Tooltip>}
          >
        <Button
          className="mb-3 ms-3 btnLogin"
          variant="secondary"
          onClick={onLoginGitHub}
        >
          <img src={GitHubIcon} width="32" alt="Github icon" /> Entrar com o
          GitHub
        </Button>
        </OverlayTrigger>


        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className={errors.email && "is-invalid"}
              placeholder="Seu email"
              {...register("email", { required: "O email é obrigatório" })}
            />
            <Form.Text className="invalid-feedback">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type={mostrarSenha ? "text" : "password"}
              placeholder="Sua senha"
              className={errors.senha ? "is-invalid" : ""}
              {...register("senha", { required: "Senha é obrigatória" })}
            />
            <Form.Text className="invalid-feedback">
              {errors.senha?.message}
            </Form.Text>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={toggleMostrarSenha}
            >
              {mostrarSenha ? "Ocultar Senha" : "Mostrar Senha"}
            </button>
          </Form.Group>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Clique aqui para cadastrar</Tooltip>}
          >
            <Button type="submit" variant="success">
              Cadastrar
            </Button>
          </OverlayTrigger>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
