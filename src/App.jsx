import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { Livros } from "./pages/Livros/Livros";
import { EditarLivro } from "./pages/EditarLivro/EditarLivro";
import { AdicionarEmprestimo } from "./pages/AdicionarEmprestimo/AdicionarEmprestimo";
import { Emprestimos } from "./pages/Emprestimos/Emprestimos";
import { EditarEmprestimo } from "./pages/EditarEmprestimo/EditarEmprestimo";
import { DetalhesLivro } from "./pages/DetalhesLivro/DetalhesLivro";
import { Autores } from "./pages/Autores/Autores";
import { AdicionarAutor } from "./pages/AdicionarAutor/AdicionarAutor";
import { NotFound } from "./pages/NotFound/NotFound";

import VendaLivros from "./pages/VendaLivro/VendaLivro";





export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    // Monitorar/detectar o usuário conectado
    // Fica sabendo quando loga/desloga
    onAuthStateChanged(auth, (user) => {
      // user é nulo = deslogado
      // user tem objeto = logado
      setUsuarioLogado(user);
    });

    // Esse efeito irá rodar apenas uma vez
    // Quando o App for renderizado/inicializado
  }, []);

  return (
    <>
      <AuthContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/livros/adicionar" element={<AdicionarLivro />} />
              <Route path="/livros/editar/:id" element={<EditarLivro />} />

              <Route path="/livros/detalhes/:id" element={<DetalhesLivro />} />
              
              <Route path="/emprestimos" element={<Emprestimos />} />
              <Route path="/emprestimos/adicionar" element={<AdicionarEmprestimo />} />
              <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo />} />
              <Route path="/autores" element={<Autores/>} />
              <Route path="/autores/adicionar" element={<AdicionarAutor/>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/vendas" element={<VendaLivros />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
      <Toaster />
    </>
  );

}


