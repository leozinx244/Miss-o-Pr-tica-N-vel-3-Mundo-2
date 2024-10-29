import {Livro} from  '../modelo/Livro';
class Professor extends Livro{
}
let livros: {LivroNm: string}[] = [
    {
        "LivroNm": "Use a Cabeça"
    },
    {
        "LivroNm": "Java, como Programar"
    },
    {
        "LivroNm": "Core Java for the Impatient"
    }
];
interface Livroa{
    codigo: number;
    titulo: string;
}
export class Controlelivros{
    public obterLivros():any{
        return livros;
    }
    public Livros: Livroa[];
    constructor (){
        this.Livros = [];
    }
    public incluir(livro:Livroa):void{
        if(!this.Livros.length){
            this.Livros.push({ ...livro, codigo: livro.codigo + 1});
        } else{
            const novoCodigo = Math.max( ...this.Livros.map(l => l.codigo)) +1;
            this.Livros.push({ ...livro, codigo: novoCodigo});
        }
    }
    public getLivros(): Livroa[]{
        return this.Livros;

    }
    public excluir(): void{
        class Livro{
            constructor() {
                this.livros = [];
            }
            excluir(codigo){
            const indice = this.livros.findIndex(livro =>livro.codigo === codigo);
            if (indice >= 0) {
                this.livros.splice(indice, 1);
            }
        }
    }
}
}