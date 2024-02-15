import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const livros = ControleLivros.obterLivros(); 
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = req.body;
      ControleLivros.incluir(novoLivro); 
      res.status(200).json({ message: 'Livro adicionado com sucesso' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu uma exceção no servidor' });
  }
}
