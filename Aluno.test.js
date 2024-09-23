const Aluno = require('./Aluno');
describe('Testes da classe Aluno', () => {
  let aluno;
  beforeEach(() => {
    aluno = new Aluno('João', [8, 6]);
  });

  test('calcularMedia deve retornar a média correta', () => {
    expect(aluno.calcularMedia()).toBe(7);
  });

  test('calcularMenção deve retornar MS para média >= 7 e < 9', () => {
    expect(aluno.obterMencao()).toBe('MS');
  });

  test('aprovado deve retornar true para menção MS', () => {
    expect(aluno.statusAprovacao()).toBe('Aprovado');
  });

  test('calcularMenção deve retornar SS para média >= 9', () => {
    aluno = new Aluno('Maria', [10, 9]);
    expect(aluno.obterMencao()).toBe('SS');
  });

  test('aprovado deve retornar true para menção SS', () => {
    aluno = new Aluno('Maria', [10, 9]);
    expect(aluno.statusAprovacao()).toBe('Aprovado');
  });

  test('calcularMenção deve retornar MM para média >= 5 e < 7', () => {
    aluno = new Aluno('Carlos', [5, 6]);
    expect(aluno.obterMencao()).toBe('MM');
  });

  test('aprovado deve retornar true para menção MM', () => {
    aluno = new Aluno('Carlos', [5, 6]);
    expect(aluno.statusAprovacao()).toBe('Aprovado');
  });

  test('calcularMenção deve retornar MI para média < 5', () => {
    aluno = new Aluno('José', [3, 4]);
    expect(aluno.obterMencao()).toBe('MI');
  });

  test('aprovado deve retornar false para menção MI', () => {
    aluno = new Aluno('José', [3, 4]);
    expect(aluno.statusAprovacao()).toBe('Reprovado');
  });

  test('calcularMedia deve retornar NaN se notas estiverem vazias', () => {
    aluno = new Aluno('Teste', []);
    expect(aluno.calcularMedia()).toBeNaN();
  });

  test('calcularMedia deve funcionar com notas decimais', () => {
    aluno = new Aluno('Roberto', [5.5, 6.4]);
    expect(aluno.calcularMedia()).toBeCloseTo(5.95, 2);
  });

  test('deve lançar erro se uma das notas for maior que 10', () => {
    const aluno = new Aluno('Erika', [11, 12]);
    expect(() => aluno.calcularMedia()).toThrow('Notas inválidas! As notas devem ser números entre 0 e 10.');
  });
  
  test('deve lançar erro se uma das notas não for número', () => {
    const aluno = new Aluno('Lucas', [8, 'a']);
    expect(() => aluno.calcularMedia()).toThrow('Notas inválidas! As notas devem ser números entre 0 e 10.');
  });

  test('deve retornar aprovado mesmo se o aluno faltar uma prova, mas tirar nota máxima na outra', () => {
    aluno = new Aluno('Ana', [0, 10]);
    expect(aluno.statusAprovacao()).toBe('Aprovado');
  });

  test('deve retornar MI se todas as notas forem 0', () => {
    aluno = new Aluno('Jorge', [0, 0]);
    expect(aluno.obterMencao()).toBe('MI');
  });

  test('deve retornar MM para média próxima de 7', () => {
    aluno = new Aluno('Eduardo', [6.7, 7.1]);
    expect(aluno.obterMencao()).toBe('MM');
  });

  test('deve retornar Reprovado se uma das notas for 0', () => {
    aluno = new Aluno('Bruno', [0, 8]);
    expect(aluno.statusAprovacao()).toBe('Reprovado');
  });

  test('calcularMedia deve somar corretamente', () => {
    aluno = new Aluno('Helena', [10, 10]);
    expect(aluno.calcularMedia()).toBe(10);
  });

  test('deve aprovar aluno com média entre 5 e 7', () => {
    aluno = new Aluno('Bruna', [6, 5]);
    expect(aluno.statusAprovacao()).toBe('Aprovado');
  });

  test('deve reprovar aluno com média abaixo de 5', () => {
    aluno = new Aluno('Roberta', [4, 3]);
    expect(aluno.statusAprovacao()).toBe('Reprovado');
  });
});
