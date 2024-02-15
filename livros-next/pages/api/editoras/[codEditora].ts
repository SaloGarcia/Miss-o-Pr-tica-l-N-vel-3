import { NextApiRequest, NextApiResponse } from 'next';
import controleEditora from '.';
import { ControleEditora } from '../../../../livros-next/classes/controle/ControleEditora'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query;
      if (!codEditora || Array.isArray(codEditora)) {
        res.status(400).json({ message: 'Parâmetro codEditora inválido' });
        return;
      }
      const nomeEditora = ControleEditora.getNomeEditora(Number(codEditora)); 
      if (!nomeEditora) {
        res.status(404).json({ message: 'Editora não encontrada' });
        return;
      }
      res.status(200).json({ nome: nomeEditora });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu uma exceção no servidor' });
  }
}


