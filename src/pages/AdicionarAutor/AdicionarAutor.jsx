import { Button, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addAutor} from "../../firebase/autores";
import { toast } from "react-hot-toast";

export function AdicionarAutor() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function onSubmit(data){
        addAutor(data).then(() => {
            toast.success("Autor adicionado com sucesso!", {duration: 2000, position: "bottom-right"})
            navigate("/autores")
        })
    }
    return (
        <div className="adicionar-autor">
            <Container>
                <h1>Adicionar Autores</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control className={errors.nome? "is-invalid" : ""} type="text" {...register("nome", {required: "Nome é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres"}})} />
                        <Form.Text className="invalid-feedback">
                            {errors.nome?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control className={errors.email? "is-invalid" : ""} type="email" {...register("email", {required: "E-mail é obrigatório!"})} />
                        <Form.Text className="text-danger">
                            {errors.email?.message}
                        </Form.Text>
                    </Form.Group>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                        <Tooltip>Clique aqui para registar o autor</Tooltip>}>
                        <Button type="submit" variant="success">Adicionar</Button>
                    </OverlayTrigger>
                </Form>
            </Container>
        </div>
    )
}