# quiz-devops-aula

## Integração Contínua (CI)

Este projeto é um quiz de Cloud e DevOps que utiliza GitHub Actions para executar testes automatizados da regra de pontuação.

### Funcionamento

- O código principal fica na branch `main`.
- Cada push na `main` inicia automaticamente o workflow de CI.
- O workflow prepara o ambiente com Node.js 24.
- O comando `npm test` executa os testes da função de pontuação.
- O resultado da execução pode ser consultado na aba **Actions** do repositório.

### Executar os testes localmente

Com Node.js instalado, abra um terminal na raiz do projeto e execute:

```bash
npm test
```

Os testes estão em `tests/pontuacao.test.js` e verificam casos como respostas corretas, incorretas, nulas e ausentes.

### Arquivos principais

- `site/`: interface e lógica do quiz.
- `site/pontuacao.js`: função de cálculo dos pontos.
- `tests/`: testes automatizados.
- `.github/workflows/ci-cd.yml`: configuração do pipeline.

> A publicação automática no GitHub Pages será configurada em uma etapa posterior da atividade.
