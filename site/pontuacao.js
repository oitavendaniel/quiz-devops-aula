export function calcularPontuacao(respostas, gabarito) {
  let pontos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (
      respostas[i] !== null &&
      respostas[i] !== undefined &&
      respostas[i] === gabarito[i]
    ) {
      pontos += 1;
    }
  }
  return pontos;
}
