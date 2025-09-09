export class Adotante{
    constructor(id, brinquedos =[]){
        this.id =id;
        this.brinquedos = brinquedos;
        this.animaisAdotados =[];
    }

    //Se verificação de quantidade falha retorna false
    //Se verificação de quantidade passa, então adiciona nome do animal na lista de adotados p/ adotante e retorna true
    adotar(animal){
        if(!this.podeAdotar()) return false;
        
        this.animaisAdotados.push(animal.nome);
        return true;

    }

    //Verifica se adotante adotou limite de animais - retorna true ou false
    podeAdotar(){
        return this.animaisAdotados.length < 3;
    }

    //Caso especial tartargua - Verifica se possui companhia
    possuiAnimal(){
        return this.animaisAdotados.length > 0;
    }
    
}