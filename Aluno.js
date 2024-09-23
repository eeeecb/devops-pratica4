class Aluno {
  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }

  calcularMedia() {
    if (this.notas.some(nota => typeof nota !== 'number' || nota < 0 || nota > 10)) {
        throw new Error('Notas inválidas! As notas devem ser números entre 0 e 10.');
      }
  
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      return soma / this.notas.length;
  }

  obterMencao() {
    const media = this.calcularMedia();

    if (media >= 9.0) return "SS";
    if (media >= 7.0) return "MS";
    if (media >= 5.0) return "MM";
    return "MI";
  }

  statusAprovacao() {
    const mencao = this.obterMencao();

    if (mencao !== "MI" && mencao !== "II") return "Aprovado";
    return "Reprovado";
  }
}

module.exports = Aluno;
