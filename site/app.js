import { calcularPontuacao } from './pontuacao.js';

const perguntas = [
  { texto: 'Qual ferramenta executara nosso pipeline?', alternativas: ['GitHub Actions', 'Editor de imagens', 'Leitor de PDF', 'Planilha'], correta: 0 },
  { texto: 'O que um commit registra?', alternativas: ['Uma senha', 'Uma versao do projeto', 'Um servidor fisico', 'Uma conta bancaria'], correta: 1 },
  { texto: 'Se o teste falhar, o que deve ocorrer neste pipeline?', alternativas: ['Publicar mesmo assim', 'Apagar os testes', 'Bloquear a nova publicacao', 'Apagar o repositorio'], correta: 2 }
];
const form = document.querySelector('#quiz');
const container = document.querySelector('#perguntas');
const resultado = document.querySelector('#resultado');
perguntas.forEach((pergunta, i) => {
  const grupo = document.createElement('fieldset');
  const titulo = document.createElement('legend');
  titulo.textContent = `${i + 1}. ${pergunta.texto}`;
  grupo.append(titulo);
  pergunta.alternativas.forEach((texto, j) => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio'; radio.name = `pergunta-${i}`; radio.value = String(j);
    label.append(radio, document.createTextNode(texto));
    grupo.append(label);
  });
  container.append(grupo);
});
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const dados = new FormData(form);
  const respostas = perguntas.map((_, i) => {
    const valor = dados.get(`pergunta-${i}`);
    return valor === null ? null : Number(valor);
  });
  const pontos = calcularPontuacao(respostas, perguntas.map(p => p.correta));
  resultado.textContent = `Voce acertou ${pontos} de ${perguntas.length} perguntas.`;
});
form.addEventListener('reset', () => { resultado.textContent = ''; });
