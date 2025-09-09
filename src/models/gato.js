import { Animal } from "./animal";

//gatos não dividem brinquedos
export class Gato extends Animal{
    
    constructor(nome, brinquedosFavoritos){
        super(nome, "gato", brinquedosFavoritos);
    }

    //requisito de gato: não divide brinquedos

}