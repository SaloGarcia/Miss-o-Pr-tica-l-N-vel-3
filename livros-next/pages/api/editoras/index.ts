import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const editoras = ControleEditora.getEditoras(); // Corrigido para acessar o método estático
      res.status(200).json(editoras);
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu uma exceção no servidor' });
  }
}

