import fs from 'fs'
import readline from 'readline'
import {
  calcularManifestacoes,
  contarOcorrenciasPorValorUnico,
  countByKeyValue,
  obterValoresUnicos,
} from './functions'
import { Manifestacao } from './types'

export const main = async (inputFile: string): Promise<void> => {
  const fileStream = fs.createReadStream(inputFile)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const arrayDeManifestacoesMunicipaisParaibanas: string[] = []
  const arrayDeManifestacoesParaibanas: string[] = []
  let contador = 0

  for await (const line of rl) {
    contador++
    if (line.includes('PB') && line.toLowerCase().includes('municipal')) {
      arrayDeManifestacoesMunicipaisParaibanas.push(line)
    }
    if (line.includes('PB')) {
      arrayDeManifestacoesParaibanas.push(line)
    }
  }

  const objectArray = arrayDeManifestacoesMunicipaisParaibanas.map(
    (item: any) => {
      const slicedLine = item.split(';')
      return {
        dataRegistro: slicedLine[0],
        dataPrazoResposta: slicedLine[1],
        dataResposta: slicedLine[2],
        faixaEtaria: slicedLine[3],
        racaCor: slicedLine[4],
        genero: slicedLine[5],
        municipioManifestante: slicedLine[6],
        estadoMunicipioManifestante: slicedLine[7],
        municipioManifestacao: slicedLine[8],
        estadoMunicipioManifestacao: slicedLine[9],
        tipoManifestacao: slicedLine[10],
        codigoOrgaoSiorg: slicedLine[11],
        nomeOrgaoSiorg: slicedLine[12],
        assunto: slicedLine[13],
        diasParaResolucao: slicedLine[14],
        diasDeAtraso: slicedLine[15],
        formulario: slicedLine[16],
        situacao: slicedLine[17],
        esfera: slicedLine[18],
        servico: slicedLine[19],
        outroServico: slicedLine[20],
        demandaAtendida: slicedLine[21],
        satisfacao: slicedLine[22],
      }
    }
  )

  const totalMunicipal = objectArray.length

  const estadoMunicipioManifestante = countByKeyValue(
    objectArray,
    'estadoMunicipioManifestante',
    'PB'
  )
  const estadoMunicipioManifestacao = countByKeyValue(
    objectArray,
    'estadoMunicipioManifestacao',
    'PB'
  )

  const manifest = calcularManifestacoes({
    estadoMunicipioManifestante,
    estadoMunicipioManifestacao,
    totalMunicipal,
  })

  const reclamacao = countByKeyValue(
    objectArray,
    'tipoManifestacao',
    'Reclama��o'
  )
  const solicitacao = countByKeyValue(
    objectArray,
    'tipoManifestacao',
    'Solicita��o'
  )
  const comunicacao = countByKeyValue(
    objectArray,
    'tipoManifestacao',
    'Comunica��o'
  )
  const elogio = countByKeyValue(objectArray, 'tipoManifestacao', 'Elogio')
  const denuncia = countByKeyValue(objectArray, 'tipoManifestacao', 'Den�ncia')
  const sugestao = countByKeyValue(objectArray, 'tipoManifestacao', 'Sugest�o')

  const municipiosManifestantesParaibanos = objectArray.filter(
    (manifest: Manifestacao) => manifest.estadoMunicipioManifestante === 'PB'
  )
  const municipiosManifestantesParaibanosUnicos = obterValoresUnicos(
    municipiosManifestantesParaibanos,
    'municipioManifestante'
  )
  const contagemDeMunicipiosManifestantes = contarOcorrenciasPorValorUnico(
    municipiosManifestantesParaibanos,
    'municipioManifestante'
  )
  const municipiosManifestacaoParaibanos = objectArray.filter(
    (manifest: Manifestacao) => manifest.estadoMunicipioManifestacao === 'PB'
  )
  const municipiosManifestacaoParaibanosUnicos = obterValoresUnicos(
    municipiosManifestacaoParaibanos,
    'municipioManifestacao'
  )
  const contagemMunicipios = contarOcorrenciasPorValorUnico(
    municipiosManifestacaoParaibanos,
    'municipioManifestante'
  )

  // log data

  // Estatísticas Gerais
  console.log(totalMunicipal, 'total de manifestações municipais paraibanas')

  console.log(
    arrayDeManifestacoesParaibanas.length,
    'total de manifestações paraibanas em todas as esferas'
  )

  console.log(contador, 'total de manifestações da base de dados')

  // Cobertura de Municípios
  console.log(
    municipiosManifestantesParaibanosUnicos.length,
    'municípios manifestantes paraibanos únicos'
  )

  console.log(
    contagemDeMunicipiosManifestantes,
    'contagem por município de origem'
  )

  console.log(
    municipiosManifestacaoParaibanosUnicos.length,
    'municípios de manifestação paraibanos únicos'
  )

  console.log(contagemMunicipios, 'contagem por município de destino')

  // Tipos de Manifestações
  console.log(reclamacao, 'reclamação')

  console.log(comunicacao, 'comunicação')

  console.log(solicitacao, 'solicitação')

  console.log(sugestao, 'sugestão')

  console.log(elogio, 'elogio')

  console.log(denuncia, 'denúncia')

  // Exemplo de Manifestação Completa
  console.log(manifest, 'dados completos de uma manifestação')
}
