import { Abrigo } from "./models/abrigo.js";
import {Adotante} from  "./models/adotante.js";
import * as utils from "./utils.js"

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    const resultadoAdocao = {};
    const abrigo = Abrigo.carregarDadosAnimais();
    let p1Brinq,  p2Brinq, animais;

    try{

      p1Brinq = utils.normalizaBrinquedos(brinquedosPessoa1);
      p2Brinq = utils.normalizaBrinquedos(brinquedosPessoa2);
      animais = utils.formataNome(ordemAnimais);
   
      

      //Verifica se nome dos animais solicitados consta na lista de animais do abrigo
      for(const animal of animais){

        if(!abrigo.recuperaNomeAnimal(animal)){
          return{erro: "Animal inválido", lista:null};
        }
      }

       // Verifica duplicidade de brinquedos ou brinquedos inválidos

       //IMPLEMENTAR

      //Cadastra os adotantes no abrigo
      abrigo.cadastraAdotante(new Adotante(1, p1Brinq));
      abrigo.cadastraAdotante(new Adotante(2, p2Brinq));
      console.log(abrigo.adotantes)

      //Verifica se Adocao foi feita
      return abrigo.processoAdocao(animais);
     
      
    } catch(err){
      return err.message;
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };
