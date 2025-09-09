import {Cachorro} from './cachorro.js'
import {Gato} from './gato.js'
import {Tartaruga} from './tartaruga.js'


export class Abrigo{

    constructor(){
        this.animais = new Map();
        this.adotantes = new Map();
    }

    //Adiciona Animal no abrigo
    cadastraAnimal(animal){
        
        if(this.animais.has(animal.nome)) {
            //verificação animais duplicados
            throw new Error("Animal inválido");
        }
        //adiciona animal no abrigo / adoção
        this.animais.set(animal.nome, animal);
    }

    //Adiciona Adotante no abrigo
    cadastraAdotante(adotante){
        this.adotantes.set(adotante.id, adotante)
    }

    recuperaNomeAnimal(nomeAnimal){
        return this.animais.get(nomeAnimal);
    }

    recuperaBrinquedosAnimal(){
        const conjuntoBrinquedos = new Set();
        for(const a of this.animais.values()){
            for(const b of a.brinquedosFavoritos) conjuntoBrinquedos.add(b);
        }
        return conjuntoBrinquedos;
    }

    //Atribui animal a um adotante caso preencha requisitos e retorna true para processo
    //Retorna false caso não preenche requisitos retorna false para processo
    finalizaAdocao(animal, adotante){
        animal.adotado = adotante.id;
        adotante.adotar(animal);
    }

    processoAdocao(listaEntrada){
        const resultado= {};
        const adotante1 = this.adotantes.get(1);
        const adotante2 = this.adotantes.get(2);
        

        //verificação dos nomes dos animais solicitados pelos adotantes
        for(const nomeAnimal of listaEntrada){
            const animal = this.recuperaNomeAnimal(nomeAnimal);
           
            
            if(animal.adotado !== null) continue;

            //checagem da subsequencia dos brinquedos contra brinquedos dos candidatos - true or false
            const ad1 = adotante1.podeAdotar() && animal.verificaAdocao(adotante1.brinquedos)
            const ad2 = adotante2.podeAdotar() && animal.verificaAdocao(adotante2.brinquedos)


            //CHECAGEM DO GATO
            //IMPLEMENTAR


           
            //os dois candidatos retornaram true na checagem, então animal não é adotado/continua no abrigo 
            if(ad1 && ad2){
                resultado[animal.nome] = 'abrigo';
            }

            if(ad1 && !ad2){
                //candidato 1 pode adotar e candidato 2 não
                this.finalizaAdocao(animal, adotante1);
                resultado[animal.nome] = 'pessoa 1';
           
            } else if(ad2 && !ad1){
                 //candidato 2 pode adotar e candidato 1 não
                this.finalizaAdocao(animal, adotante2);
                resultado[animal.nome] = 'pessoa 2';
            
            
            }else{
            //ninguem adota
               resultado[animal.nome] = 'abrigo';
            }

        }

        const listaFinal = Object.keys(resultado)
        .sort((a,b) => a.localeCompare(b))
        .map(nome => `${nome} - ${resultado[nome]}`);

        return {lista: listaFinal};
    }


    static carregarDadosAnimais(){
        const abrigo = new Abrigo();
        abrigo.cadastraAnimal(new Cachorro("Rex", ["RATO", "BOLA"]))
        abrigo.cadastraAnimal(new Cachorro("Bebe", ["LASER", "RATO", "BOLA"]))
        abrigo.cadastraAnimal(new Cachorro("Bola", ["CAIXA", "NOVELO"]))
        abrigo.cadastraAnimal(new Gato("Mimi", ["BOLA", "LASER"]))
        abrigo.cadastraAnimal(new Gato("Fofo", ["BOLA", "RATO", "LASER"]))
        abrigo.cadastraAnimal(new Gato("Zero", ["RATO", "BOLA"]))
        abrigo.cadastraAnimal(new Tartaruga("Loco", ["SKATE", "RATO"]))

        return abrigo;
    }

}