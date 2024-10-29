import {editora} from  '../modelo/Editora';
class Professor extends editora{
}
let editoras: any[]=[
    { id: 1, name: 'Alta Books'},
    { id: 2, name: 'Pearson'},
    { id: 3, name: 'Addison Wesley'}
];
class ControleEditora{
    public getNomeEditora():any{
        interface Edit {
            id: number;
            name: string;
        }
        class EditService{
            private nomes: Edit[];

            constructor(nomes: Edit[]){
                this.nomes = nomes;
            }
            public filterNames(minValue: number, maxValue: number): string[]{
                return this.nomes
                    .filter(edit => edit.id >= minValue && edit.id<= maxValue)
                    .map(edit => edit.name);
            }
        }
        const nomes: Edit[] = [
            { id: 1, name: 'Alta Books'},
            { id: 2, name: 'Pearson'},
            { id: 3, name: 'Addison Wesley'}
        ]
        const editService = new EditService(nomes);
        const names = editService.filterNames(0,2);

    }
    public getEditoras():any[]{
        return editoras;
    }
}


