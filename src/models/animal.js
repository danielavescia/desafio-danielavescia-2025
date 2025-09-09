
import { contemSubsequenciaBrinquedos} from '../utils.js'

//Classe base para animais
export class Animal{

    constructor(nome,especie, brinquedosFavoritos ){
        this.nome = nome;
        this.especie = especie;
        this.brinquedosFavoritos = brinquedosFavoritos;
        this.adotado = null;
    }

    //método para verificar se há match com brinquedos favoritos retorna true or false
    verificaAdocao(adotante){
        return contemSubsequenciaBrinquedos(this.brinquedosFavoritos, adotante.brinquedos)
    
    }


}  




