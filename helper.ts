// import { Manifestacao } from "./src/types"

// export function countByKey(
//   arr: Manifestacao[],
//   key: keyof Manifestacao
// ): Record<string, number> {
//   return arr.reduce((acc: Record<string, number>, item: Manifestacao) => {
//     const value = item[key]
//     acc[value] = (acc[value] || 0) + 1
//     return acc
//   }, {})
// }

// export function countByKeyValue(
//   arr: Manifestacao[],
//   key: keyof Manifestacao,
//   value: string
// ): number {
//   return arr.filter((item) => item[key] === value).length
// }

// type ManifestacoesData = {
//   estadoMunicipioManifestante: number
//   estadoMunicipioManifestacao: number
//   totalMunicipal: number
//   dentroDoEstado?: number
//   sairamDoEstado?: number
//   vieramParaEstado?: number
// }

// export function calcularManifestacoes(
//   dados: ManifestacoesData
// ): ManifestacoesData {
//   const {
//     estadoMunicipioManifestante,
//     estadoMunicipioManifestacao,
//     totalMunicipal,
//   } = dados
//   const dentroDoEstado = estadoMunicipioManifestante
//   const sairamDoEstado = totalMunicipal - estadoMunicipioManifestacao
//   const vieramParaEstado =
//     estadoMunicipioManifestacao - estadoMunicipioManifestante

//   return {
//     ...dados,
//     dentroDoEstado,
//     sairamDoEstado,
//     vieramParaEstado,
//   }
// }

// export function obterValoresUnicos(
//   arr: Manifestacao[],
//   key: keyof Manifestacao
// ): string[] {
//   const valores = arr.map((item) => item[key]) // Extrai os valores da chave especificada
//   const valoresUnicos = Array.from(new Set(valores)) // Remove duplicatas
//   return valoresUnicos
// }

// export function contarOcorrenciasPorValorUnico(
//   arr: Manifestacao[],
//   key: keyof Manifestacao
// ): Record<string, number> {
//   const contagem: Record<string, number> = {}

//   // Itera sobre o array e conta as ocorrências de cada valor único
//   for (const item of arr) {
//     const valor = item[key]
//     contagem[valor] = (contagem[valor] || 0) + 1
//   }

//   return contagem
// }
