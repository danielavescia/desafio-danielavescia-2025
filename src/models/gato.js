import { Animal } from "./animal";

export class Gato extends Animal{
    
    constructor(nome, brinquedosFavoritos){
        super(nome, "gato", brinquedosFavoritos);
    }

    //requisito de gato: não divide brinquedos
    verificaAdocao(adotante){

      if(!super.verificaAdocao(adotante)){
        return false;
      }

        for (const animal of adotante.animaisAdotados){

            if(animal.especie === 'gato'){
                if(animal.brinquedosFavoritos.some(b => this.brinquedosFavoritos.includes(b))){
                    return false;
                }
            }
        }

       return true;

    }
}