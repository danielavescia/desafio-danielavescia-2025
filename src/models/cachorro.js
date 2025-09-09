import {Animal} from './animal.js'

export class Cachorro extends Animal{

    constructor(nome, brinquedosFavoritos){
        super(nome, "cachorro", brinquedosFavoritos);
    }

}