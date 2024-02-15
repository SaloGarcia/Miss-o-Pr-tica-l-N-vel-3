import React, { useState, useEffect } from 'react';
import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { LinhaLivro } from '../componentes/LinhaLivro';
import styles from '../styles/Home.module.css';
import Head from 'next/head'; 
import Menu from '../componentes/Menu'; 

const baseURL: string = "http://localhost:3000/api/livros";

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    const obter = async () => {
        try {
            const response = await fetch(baseURL);
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('Erro ao obter os livros');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao obter os livros');
        }
    };

    const excluirLivro = async (codigo: number): Promise<boolean> => {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao excluir o livro');
        }
    };

    const excluir = async (codigo: number) => {
        try {
            const sucesso = await excluirLivro(codigo);
            if (sucesso) {
                setCarregado(false);
            } else {
                throw new Error('Erro ao excluir o livro');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const data = await obter();
                setLivros(data);
                setCarregado(true);
            } catch (error) {
                console.error(error);
            }
        };

        if (!carregado) {
            obterLivros();
        }
    }, [carregado]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Livros Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <main className={styles.main}>
                <h1 className={styles.title}>Lista de Livros</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;
