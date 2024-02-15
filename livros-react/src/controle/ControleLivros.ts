import { Livro } from '../modelo/Livro';


let livros: Livro[] = [
    new Livro(1, 1, 'Use a Cabeça: Java', 'Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', ['Bert Bates', 'Kathy Sierra']),
    new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com livros Deitel.', ['Paul Deitel', 'Harvey Deitel']),
    new Livro(3, 3, 'Core Java for the Impatient', 'Eaders familiar with Horstmann´s original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of java SE 9 will learn how these nem features impact the language and core libraries.', ['Cay Horstmann'])
];

export class ControleLivros {
    
    static obterLivros(): Livro[] {
        return livros;
    }

    
    static incluir(novoLivro: Livro): void {
   
        const novoCodigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

   
    static excluir(codigoLivro: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigoLivro);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
