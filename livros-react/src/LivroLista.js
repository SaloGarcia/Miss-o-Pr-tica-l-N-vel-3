import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
    const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.codigo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

export default function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            setLivros(ControleLivros.obterLivros());
            setCarregado(true);
        }
    }, [carregado]);

    const excluir = (codigoLivro) => {
        ControleLivros.excluir(codigoLivro);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>Código</th>
                        <th>Editora</th>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
}
