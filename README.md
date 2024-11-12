# Análise de Dados de Manifestações do FalaBR e Estado da Paraíba

> Realizada em: 12/11/2024

Este projeto realiza uma análise preliminar das manifestações registradas na plataforma Fala.BR, focando na relação do estado da Paraíba com essas manifestações. Os dados, extraídos do portal de Dados Abertos da Controladoria-Geral da União (CGU), incluem reclamações, solicitações, elogios e outros tipos de manifestações direcionadas a diferentes municípios e estados. O objetivo é fornecer uma base inicial de inteligência de dados para avaliação da participação cívica e demandas municipais.

## Objetivos

- Extrair e processar dados de manifestações de ouvidoria para entender o volume, a natureza e a origem/destino das manifestações.
- Identificar valores únicos em campos específicos, como municípios de origem das manifestações e tipos de manifestação.
- Contabilizar a frequência de cada valor único para análise estatística e monitoramento.
- Fornecer uma base de inteligência de dados preliminar para apoiar a análise e visualização da ouvidoria municipal.

## Fontes de Dados

Os dados foram extraídos do portal de Dados Abertos da CGU, disponível em:

- [Dados Abertos - Manifestações de Ouvidoria](https://www.gov.br/cgu/pt-br/acesso-a-informacao/dados-abertos/arquivos/ouvidoria)

Para mais informações sobre o sistema Fala.BR:

- [Fala.BR - Plataforma Integrada de Ouvidoria e Acesso à Informação](https://falabr.cgu.gov.br/)

## Estrutura dos Dados

Cada registro de manifestação possui a seguinte estrutura de dados, definida no tipo \`Manifestacao\`:

```typescript
type Manifestacao = {
  dataRegistro: string
  dataPrazoResposta: string
  dataResposta: string
  faixaEtaria: string
  racaCor: string
  genero: string
  municipioManifestante: string
  estadoMunicipioManifestante: string
  municipioManifestacao: string
  estadoMunicipioManifestacao: string
  tipoManifestacao: string
  codigoOrgaoSiorg: string
  nomeOrgaoSiorg: string
  assunto: string
  diasParaResolucao: string
  diasDeAtraso: string
  formulario: string
  situacao: string
  esfera: string
  servico: string
  outroServico: string
  demandaAtendida: string
  satisfacao: string
}
```

As principais propriedades incluem:

- `dataRegistro`: Data de registro da manifestação.
- `dataPrazoResposta`: Data limite para a resposta.
- `dataResposta`: Data em que a resposta foi fornecida.
- `faixaEtaria`: Faixa etária do manifestante.
- `racaCor`: Raça/cor do manifestante.
- `genero`: Gênero do manifestante.
- `municipioManifestante`: Município de origem do manifestante.
- `estadoMunicipioManifestante`: Estado do município de origem do manifestante.
- `municipioManifestacao`: Município relacionado à manifestação.
- `estadoMunicipioManifestacao`: Estado do município relacionado à manifestação.
- Outros campos adicionais conforme a necessidade da análise.

## Resumo das Análises

### Estatísticas Gerais

- **Total de manifestações municipais paraibanas**: 19.559
  - **Dentro do mesmo estado**: 6.415
  - **Saíram do estado**: 705
  - **Vieram para o estado**: 12.439
- **Total de manifestações paraibanas em todas as esferas**: 78.132
- **Total de manifestações na base de dados**: 5.802.181
- **Cobertura de municípios**:
  - **Municípios de origem únicos na Paraíba**: 84 (defasagem de 62,33% em relação ao total de 223 municípios paraibanos)
  - **Municípios de destino únicos na Paraíba**: 125 (defasagem de 43,95% em relação ao total de 223 municípios paraibanos)

### Tipos de Manifestações

| Tipo de Manifestação | Quantidade |
| -------------------- | ---------- |
| Reclamação           | 6.315      |
| Solicitação          | 5.113      |
| Comunicação          | 5.381      |
| Elogio               | 469        |
| Denúncia             | 1.707      |
| Sugestão             | 574        |

### Municípios de Origem das Manifestações (Paraíba)

Existem **84 municípios únicos da Paraíba** entre os municípios de origem das manifestações. Abaixo está a contagem detalhada por município:

| Município              | Quantidade |
| ---------------------- | ---------- |
| CAMPINA GRANDE         | 417        |
| JOÃO PESSOA            | 4717       |
| CAJAZEIRAS             | 28         |
| CONDE                  | 465        |
| CABEDELO               | 235        |
| GUARABIRA              | 41         |
| MONTEIRO               | 2          |
| PATOS                  | 85         |
| ESPERANÇA              | 4          |
| SANTA RITA             | 67         |
| TRIUNFO                | 3          |
| PIRPIRITUBA            | 17         |
| SAPÉ                   | 7          |
| SOUSA                  | 16         |
| ITAPORANGA             | 3          |
| DUAS ESTRADAS          | 9          |
| BELÉM                  | 2          |
| CACIMBA DE AREIA       | 53         |
| MATARACA               | 2          |
| UIRAÚNA                | 3          |
| SUMÉ                   | 51         |
| ARARA                  | 1          |
| BAYEUX                 | 89         |
| AROEIRAS               | 1          |
| CAJAZEIRINHAS          | 1          |
| AREIA                  | 3          |
| SANTA LUZIA            | 1          |
| SOLÂNEA                | 2          |
| POMBAL                 | 3          |
| ARARUNA                | 3          |
| MAMANGUAPE             | 2          |
| MASSARANDUBA           | 1          |
| UMBUZEIRO              | 1          |
| QUIXABÁ                | 1          |
| MARI                   | 2          |
| SANTA TERESINHA        | 4          |
| SOBRADO                | 1          |
| SÃO JOÃO DO TIGRE      | 1          |
| PIANCÓ                 | 1          |
| CRUZ DO ESPÍRITO SANTO | 6          |
| REMÍGIO                | 1          |
| BARRA DE SÃO MIGUEL    | 1          |
| JACARAÚ                | 2          |
| MALTA                  | 1          |
| PUXINANÃ               | 2          |
| PEDRA LAVRADA          | 1          |
| JUAZEIRINHO            | 1          |
| SÃO BENTO              | 2          |
| MARIZÓPOLIS            | 1          |
| TAVARES                | 1          |
| GADO BRAVO             | 1          |
| BREJO DOS SANTOS       | 1          |
| CONCEIÇÃO              | 1          |
| PILAR                  | 1          |
| CAAPORÃ                | 6          |
| ALHANDRA               | 3          |
| QUEIMADAS              | 5          |
| BELÉM DO BREJO DO CRUZ | 2          |
| NAZAREZINHO            | 1          |
| CUBATI                 | 1          |
| ALAGOINHA              | 3          |
| ITABAIANA              | 2          |
| PAULISTA               | 1          |
| PRATA                  | 1          |
| ARAÇAGI                | 1          |
| TEIXEIRA               | 1          |
| TAPEROÁ                | 1          |
| TACIMA                 | 1          |
| RIO TINTO              | 1          |
| PEDRAS DE FOGO         | 1          |
| BORBOREMA              | 1          |
| CACIMBAS               | 1          |
| SERRA GRANDE           | 1          |
| AREIAL                 | 1          |
| POCINHOS               | 1          |
| BANANEIRAS             | 1          |
| JURU                   | 1          |
| EMAS                   | 2          |
| PITIMBU                | 1          |
| BARRA DE SANTANA       | 1          |
| MATINHAS               | 1          |
| SANTO ANDRÉ            | 2          |
| SÃO JOSÉ DE PIRANHAS   | 1          |
| CATOLÉ DO ROCHA        | 1          |

### Municípios de Destino das Manifestações (Paraíba)

Existem **125 municípios únicos de destino** para as manifestações, incluindo cidades de dentro e fora da Paraíba. Abaixo estão alguns dos principais municípios de destino e suas contagens:

| Município               | Quantidade |
| ----------------------- | ---------- |
| Não Informado           | 12645      |
| JOÃO PESSOA             | 4092       |
| CAMPINA GRANDE          | 391        |
| CONDE                   | 461        |
| CABEDELO                | 232        |
| SANTA RITA              | 64         |
| BAYEUX                  | 87         |
| RECIFE                  | 35         |
| NATAL                   | 10         |
| SÃO PAULO               | 54         |
| RIO DE JANEIRO          | 54         |
| MANAUS                  | 12         |
| LAGES                   | 54         |
| GUARULHOS               | 5          |
| CARUARU                 | 4          |
| BRASÍLIA                | 33         |
| PIRACICABA              | 5          |
| BELÉM                   | 2          |
| PAULISTA                | 4          |
| BELO HORIZONTE          | 9          |
| POMBAL                  | 3          |
| ARACAJU                 | 1          |
| FORTALEZA               | 17         |
| SANTA TERESINHA         | 4          |
| OLINDA                  | 4          |
| SÃO BERNARDO DO CAMPO   | 6          |
| MOSSORÓ                 | 4          |
| SALVADOR                | 4          |
| SÃO JOSÉ DO RIO PRETO   | 4          |
| PALMAS                  | 4          |
| CURITIBA                | 15         |
| CAMPO GRANDE            | 2          |
| JOINVILLE               | 2          |
| ITABAIANA               | 2          |
| SUMÉ                    | 51         |
| CAAPORÃ                 | 5          |
| CRUZ DO ESPÍRITO SANTO  | 5          |
| QUEIMADAS               | 5          |
| ALHANDRA                | 3          |
| SANTO ANDRÉ             | 5          |
| BLUMENAU                | 3          |
| SÃO JOSÉ                | 5          |
| ALAGOINHA               | 3          |
| JABOATÃO DOS GUARARAPES | 6          |
| VASSOURAS               | 1          |
| TEIXEIRA                | 1          |
| TAPEROÁ                 | 1          |
| PRATA                   | 1          |
| SOBRADO                 | 1          |
| UIRAÚNA                 | 2          |
| SÃO CAETANO DO SUL      | 2          |
| ITAJAÍ                  | 2          |
| VIÇOSA                  | 1          |
| MARI                    | 2          |
| CAJAZEIRAS              | 25         |
| DUAS ESTRADAS           | 9          |
| ARARA                   | 1          |
| NAZAREZINHO             | 1          |
| CAJAZEIRINHAS           | 1          |
| AREIA                   | 2          |
| CATOLÉ DO ROCHA         | 1          |
| REMÍGIO                 | 1          |
| SANTA LUZIA             | 1          |
| QUIXABÁ                 | 1          |
| TAVARES                 | 1          |
| MATARACA                | 2          |
| PILAR                   | 1          |
| JUAZEIRO DO NORTE       | 2          |
| SERRA GRANDE            | 1          |
| BREJO SANTO             | 1          |
| BANANEIRAS              | 1          |
| AREIAL                  | 1          |
| POCINHOS                | 1          |
| MONTEIRO                | 1          |
| ITAPORANGA              | 3          |
| MASSARANDUBA            | 1          |
| PITIMBU                 | 1          |
| BARRA DE SÃO MIGUEL     | 1          |
| JURU                    | 1          |
| PEDRA LAVRADA           | 1          |
| CAAPORÃ                 | 5          |
| BREJO DOS SANTOS        | 1          |
| TAPEROÁ                 | 1          |
| TANGARÁ DA SERRA        | 1          |
| ITU                     | 2          |
| PARÁ DE MINAS           | 3          |
| CAICÓ                   | 1          |
| TABIRA                  | 1          |
| NOVA IGUAÇU             | 1          |
| PORTO VELHO             | 1          |
| FLORIANÓPOLIS           | 1          |
| SANTO ANTÔNIO           | 1          |
| CONCEIÇÃO               | 1          |
| PEDRAS DE FOGO          | 1          |
| BANANEIRAS              | 1          |
| SÃO JOÃO DEL REI        | 1          |
| CAMPINAS                | 4          |
| SUMARÉ                  | 1          |
| JACAREÍ                 | 1          |
| BELÉM DO BREJO DO CRUZ  | 1          |

## Funcionalidades Implementadas

- **Extração de Valores Únicos**: Função que recebe uma lista de manifestações e uma chave específica, retornando os valores únicos presentes nesse campo.
- **Contagem de Ocorrências**: Função que, a partir dos valores únicos extraídos, contabiliza quantas vezes cada valor ocorre no conjunto de dados.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Ambiente de Execução**: Node.js

## Como Executar

1. **Clonar o Repositório**:

   \`\`\`bash
   git clone https://github.com/seu-usuario/analise-falabr.git
   \`\`\`

2. **Instalar Dependências**:

   \`\`\`bash
   cd analise-falabr
   npm install
   \`\`\`

3. **Baixar a Base de Dados**:

   Acesse o portal de Dados Abertos da CGU e faça o download da base de dados de manifestações de ouvidoria. Coloque o arquivo baixado na pasta \`src/database\` com o nome \`falabr.csv\`.

   - [Dados Abertos - Manifestações de Ouvidoria](https://www.gov.br/cgu/pt-br/acesso-a-informacao/dados-abertos/arquivos/ouvidoria)

4. **Executar o Script de Análise**:

   \`\`\`bash
   npx ts-node src/analise.ts
   \`\`\`

   _Certifique-se de que o Node.js e o TypeScript estão instalados em seu ambiente._

## Considerações Finais

Este projeto fornece insights valiosos sobre as manifestações registradas no sistema Fala.BR, auxiliando na identificação de padrões e tendências que possam contribuir para a melhoria dos serviços públicos. A análise focada no estado da Paraíba visa fortalecer a compreensão da participação cidadã e da eficácia das respostas a demandas locais a nível municipal.

Para mais informações sobre a Controladoria-Geral da União e o sistema Fala.BR, visite:

- [Controladoria-Geral da União (CGU)](https://www.gov.br/cgu/)
- [Fala.BR - Plataforma Integrada de Ouvidoria e Acesso à Informação](https://falabr.cgu.gov.br/)
