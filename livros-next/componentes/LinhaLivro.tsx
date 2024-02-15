import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';

interface LinhaLivroProps {
    livro: Livro;
    excluir(): void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    
    const nomeEditora = ControleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <tr>
            <td>{props.livro.titulo}</td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora}</td> 
            <td>
                <button onClick={props.excluir}>Excluir</button>
            </td>
        </tr>
    );
};
