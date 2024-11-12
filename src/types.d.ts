export type Manifestacao = {
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

export type ManifestacoesData = {
  estadoMunicipioManifestante: number
  estadoMunicipioManifestacao: number
  totalMunicipal: number
  dentroDoEstado?: number
  sairamDoEstado?: number
  vieramParaEstado?: number
}
