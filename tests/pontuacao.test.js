import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularPontuacao } from '../site/pontuacao.js';

test('nenhuma resposta correta soma zero', () => {
  assert.equal(calcularPontuacao([1, 2, 3], [0, 1, 2]), 0);
});
test('uma resposta correta soma um ponto', () => {
  assert.equal(calcularPontuacao([0, 2, 3], [0, 1, 2]), 1);
});
test('tres respostas corretas somam tres pontos', () => {
  assert.equal(calcularPontuacao([0, 1, 2], [0, 1, 2]), 3);
});
test('respostas null nao somam pontos', () => {
  assert.equal(calcularPontuacao([null, null, null], [0, 1, 2]), 0);
});
test('respostas ausentes nao somam pontos', () => {
  assert.equal(calcularPontuacao([], [0, 1, 2]), 0);
});
