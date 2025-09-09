
//Função que verifica se possui subsequencia dos brinquedos mostrados pelo adotante na ordem dos brinquedos desejada pelos animais.
export function contemSubsequenciaBrinquedos(brinquedosAnimal, brinquedosAdotante){

    let indexBrinquedosAnimal = 0;
    
    //loop brinquedos do adotante
    for(const b of brinquedosAdotante){
        
        //se brinquedos são iguais vai p/ proximo index dos brinquedos adotante e animal
        //se brinquedos não são iguais segue p/ proximo index do brinquedo do adotante
        if(b === brinquedosAnimal[indexBrinquedosAnimal]) indexBrinquedosAnimal++;
        
        if(indexBrinquedosAnimal === brinquedosAnimal.length) return true;  //todos os brinquedos foram encontrados na ordem correta  
    }

    return false; // não houve match na ordem das sequencias
}


//formata e separa o input dos nome dos animais
export function formataNome(inputAnimais){

    return inputAnimais
    .split(",")
    .map(x => x.trim())
    .map(nome => 
        nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
    );
}

//formata e separa input dos brinquedos dos animais
export function normalizaBrinquedos(inputBrinquedos){
    const b = inputBrinquedos.split(",").map(x => x.trim().toUpperCase())
    return b;
}

//brinquedo invalido ='' ou duplicado
export function validaBrinquedos(brinquedosAdotante, brinquedosAbrigo){
    const verificados = []
    for(const b of brinquedosAdotante){

        if(verificados.includes(b)||!brinquedosAbrigo.has(b) ){ //brinquedo duplicado ou n existe no set do abrigo
            return {erro:"Brinquedo inválido",lista: null}
        }
    
        verificados.push(b);
    }

    return {erro: null,lista: null};

}

