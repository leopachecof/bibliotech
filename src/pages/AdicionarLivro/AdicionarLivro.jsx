import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addLivro, uploadCapaLivro } from "../../firebase/livros";
import { getAutores, getAutor } from "../../firebase/autores";
import { useEffect, useState } from "react";

export function AdicionarLivro() {
  const [autores, setAutores] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const categorias = [
    "Romance",
    "Ficção Científica",
    "Fantasia",
    "História",
    "Biografia",
    "Autoajuda",
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [categoriasLivro, setCategoriasLivro] = useState([]);

  const adicionarCategoria = () => {
    if (
      categoriaSelecionada &&
      !categoriasLivro.includes(categoriaSelecionada)
    ) {
      setCategoriasLivro([...categoriasLivro, categoriaSelecionada]);
      setCategoriaSelecionada("");
    }
  };

  function onSubmit(data) {
    const imagem = data.imagem[0];
    if (imagem) {
      const toastId = toast.loading("Upload da imagem...", {
        position: "top-right",
      });
      uploadCapaLivro(imagem).then((url) => {
        toast.dismiss(toastId);
        data.urlCapa = url;
        delete data.imagem;

        getAutor(data.idAutor).then((autor) => {
          delete data.idAutor;
          let novoLivro = { ...data, autor };
          addLivro(novoLivro).then(() => {
            toast.success("Livro adicionado com sucesso!", {
              duration: 2000,
              position: "bottom-right",
            });
            navigate("/livros");
          });
        });
      });
    } else {
      delete data.imagem;
      getAutor(data.idAutor).then((autor) => {
        delete data.idAutor;
        let novoLivro = { ...data, autor };
        addLivro(novoLivro).then(() => {
          toast.success("Livro adicionado com sucesso!", {
            duration: 2000,
            position: "bottom-right",
          });
          navigate("/livros");
        });
      });
    }
  }

  useEffect(() => {
    getAutores().then((resultado) => {
      setAutores(resultado);
      console.log(resultado);
    });
  }, []);

  return (
    <div className="adicionar-livro">
      <Container>
        <h1>Adicionar livro</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              className={errors.titulo && "is-invalid"}
              {...register("titulo", {
                required: "Título é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.titulo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Select
              className={errors.idAutor && "is-invalid"}
              {...register("idAutor", { required: "Autor é obrigatório!" })}
            >
              {autores.map((autor) => (
                <option key={autor.id} value={autor.id}>
                  {autor.nome}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="invalid-feedback">
              {errors.idAutor?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Categoria</Form.Label>

            <Form.Select
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button
            type="button"
            className="mb-3"
            variant="success"
            onClick={adicionarCategoria}
          >
            Adicionar categoria
          </Button>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              className={errors.isbn && "is-invalid"}
              {...register("isbn", {
                required: "ISBN é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.isbn?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagem da capa</Form.Label>
            <Form.Control
              type="file"
              accept=".png,.jpg,.jpeg,.gif"
              {...register("imagem")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              className="invisible"
              checked
              type="switch"
              id="custom-switch"
              label="livro ativo"
              {...register("boolean")}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Adicionar
          </Button>
        </Form>
      </Container>
    </div>
  );
}
