import { Animal } from "./animal";

//tartarugas não se importam com ordem dos brinquedos, porem necessitam de comapanhia
export class Tartaruga extends Animal{
    
    constructor(nome, brinquedosFavoritos){
        super(nome, "tartaruga", brinquedosFavoritos);
    }

    verificaAdocao(adotante){
        if(!adotante.possuiAnimal()) return false;
        return this.brinquedosFavoritos.every(b => adotante.brinquedosAdotante.includes(b));
    }

   

}