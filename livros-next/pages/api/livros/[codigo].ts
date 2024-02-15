import { NextApiRequest, NextApiResponse } from 'next';
import controleLivro from '.';
import { ControleLivros } from '../../../classes/controle/ControleLivros'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      if (!codigo || Array.isArray(codigo)) {
        res.status(400).json({ message: 'Parâmetro código inválido' });
        return;
      }
      ControleLivros.excluir(Number(codigo)); 
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu uma exceção no servidor' });
  }
}
