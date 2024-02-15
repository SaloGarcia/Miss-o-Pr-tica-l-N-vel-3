import { Editora } from '../modelo/Editora';


const editoras: Editora[] = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Pearson'),
    new Editora(3, 'Addison Wesley')
];

export class ControleEditora {
   
    static getEditoras(): Editora[] {
        return editoras;
    }

 
    static getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}
