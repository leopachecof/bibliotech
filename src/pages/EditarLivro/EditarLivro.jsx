import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getLivro, updateLivro, uploadCapaLivro } from "../../firebase/livros";
import { getAutores, getAutor } from "../../firebase/autores";


export function EditarLivro() {

    const {id} = useParams();
    const [autores, setAutores] = useState([]);
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
        const imagem = data.imagem[0];
        if(imagem) {
            const toastId = toast.loading("Upload da imagem...", {position: "top-right"});
            uploadCapaLivro(imagem).then(url => {
                toast.dismiss(toastId);
                data.urlCapa = url;
                delete data.imagem;
                getAutor(data.idAutor).then(autor => {
                    delete data.idAutor;
                    let novoLivro = {...data, autor}
                updateLivro(id, data).then(() => {
                    toast.success("Livro editado com sucesso!", {duration: 2000, position: "bottom-right"})
                    navigate("/livros");
                })
            })
        })
    }
        else {
            delete data.imagem;
            getAutor(data.idAutor).then(autor => {
                delete data.idAutor;
                let novoLivro = {...data, autor}
            updateLivro(id, data).then(() => {
                toast.success("Livro editado com sucesso!", {duration: 2000, position: "bottom-right"})
                navigate("/livros");
            })
        })
    }  
    }

    useEffect(() => {
        getLivro(id).then(livro => {
            reset(livro);
        })
    }, [id, reset]);

    useEffect(() => {
        getAutores().then(resultado => {
            setAutores(resultado);
            console.log(resultado)
        });
    }, [])

    return (
        <div className="editar-livro">
            <Container>
                <h1>Editar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" className={errors.titulo && "is-invalid"} {...register("titulo", {required: "Título é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Autor</Form.Label>
                        <Form.Select  className={errors.idAutor && "is-invalid"} {...register("idAutor", {required: "Autor é obrigatório!"})}>
                            {autores.map(autor => <option key={autor.id} value={autor.id}>{autor.nome}</option>)}
                        </Form.Select>
                        <Form.Text className="invalid-feedback">
                            {errors.idAutor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" className={errors.categoria && "is-invalid"} {...register("categoria", {required: "Categoria é obrigatória!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.categoria?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" className={errors.isbn && "is-invalid"} {...register("isbn", {required: "ISBN é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control type="file" {...register("imagem")} />
                    </Form.Group>
                    <Button type="submit" variant="success">Editar</Button>
                </Form>
            </Container>
        </div>
    )
}