import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  
test('Deve encontrar brinquedos inválidos na entrada', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,CALCULADORA', 'RATO,BOLA', 'Bola');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });


test('Deve encontrar brinquedos duplicados na entrada', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,CAIXA', 'RATO,BOLA', 'Bola');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para Loco', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA, SKATE, RATO, NOVELO',  'RATO,BOLA', 'Bola, Loco, Zero');
      expect(resultado.lista[0]).toBe('Bola - pessoa 1');
      expect(resultado.lista[1]).toBe('Loco - pessoa 1');
      expect(resultado.lista[2]).toBe('Zero - pessoa 2');
      expect(resultado.lista.length).toBe(3);
      expect(resultado.erro).toBeFalsy();
  });

  test('Não deve encontrar pessoa para Loco (sem companhia)', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('SKATE, RATO',  'CAIXA, RATO, BOLA,NOVELO', 'Loco, Bola, Zero');
      expect(resultado.lista[0]).toBe('Bola - pessoa 2');
      expect(resultado.lista[1]).toBe('Loco - abrigo');
      expect(resultado.lista[2]).toBe('Zero - pessoa 2');
      expect(resultado.lista.length).toBe(3);
      expect(resultado.erro).toBeFalsy();
  });

  test('Não deve encontrar pessoa para Fofo, pois não divide brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA, RATO, LASER',  'CAIXA, NOVELO', 'Mimi, Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Mimi - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

    test('Adotante1 não deve ter mais de 3 animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('LASER, RATO, BOLA, SKATE, CAIXA, NOVELO',  'SKATE', 'Bebe, Rex, Loco, Bola');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1'); 
      expect(resultado.lista[1]).toBe('Bola - abrigo'); 
      expect(resultado.lista[2]).toBe('Loco - pessoa 1');  
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');  
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

});

