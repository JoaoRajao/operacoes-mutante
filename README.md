# Teste de mutação - operações matemáticas

Entrega da atividade **Análise de Eficácia de Testes com Teste de Mutação** da disciplina Teste de Software. O projeto deriva de [CleitonSilvaT/operacoes-mutante](https://github.com/CleitonSilvaT/operacoes-mutante).

## Executar

```bash
npm ci
npm test -- --runInBand
npm run coverage -- --runInBand
npm run mutate
```

O Stryker grava o relatório navegável em `reports/mutation/mutation.html`. Os relatórios preservados de cada etapa estão em `evidencias/`, e o [relatório escrito](output/pdf/Relatorio_Teste_Mutacao_Joao_Rajao.pdf) contém a análise e capturas de tela.

## Resultados verificados

| Etapa | Testes | Cobertura de linhas | Score de mutação | Detalhes |
| --- | ---: | ---: | ---: | --- |
| Suíte original | 50 | 98,64% | 73,71% | 154 mortos, 3 timeouts, 44 sobreviventes, 12 sem cobertura |
| Novos testes, código original | 64 | - | 96,71% | 203 mortos, 3 timeouts, 7 sobreviventes |
| Entrega final | 64 | 100% | 100,00% | 195 mortos, 4 timeouts, 0 sobreviventes, 4 ignorados |

O ganho atribuível **somente aos testes** é de 23,00 pontos percentuais (73,71% para 96,71%). Os sete sobreviventes restantes no código original são equivalentes para os casos de uso válidos: cinco no tratamento redundante de `fatorial` e `produtoArray` e dois em comparações inclusivas nas bordas de `clamp`. Os ramos redundantes foram removidos; quatro mutantes `EqualityOperator` em `clamp` receberam justificativas `Stryker disable next-line`. Assim, o score final de 100% exclui quatro mutantes marcados `Ignored`, visíveis no relatório.

O PDF apresenta três mutantes da primeira execução, explica por que sobreviveram e os testes que os mataram. A matrícula não foi fornecida e está assinalada como tal na capa.
