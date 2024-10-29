import {editora} from  '../modelo/Editora';
import {Controlelivros} from  '../controle/ControleLivros';
class Controle extends Controlelivros{
}
class ControleE extends editora{
}
function ControleLivro(){

}
var controle = new ControleLivro();
controle.livros = [];
controle.Livro = function(livro){
    this.livros.push(livro)
}
function ControleEditora(){

}
var controle = new ControleEditora();
controle.editoras = [];
controle.Editora = function(editora){
    this.editoras.push(editora)
}
function LinhaLivro(props){
    const {livro, excluir} = props;
    const filterLivros = livro.filter ((livro) => !excluir.includes(livro.id));
    return (
        <div>
            {filterLivros.map((livro) => (
                <div key={livro.id}>{livro.title}</div>
            ))}
        </div>
    )
    
}

