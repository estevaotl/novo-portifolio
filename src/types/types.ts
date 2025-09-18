export interface Tecnologia {
    nome: string
    icone: string
}

export interface Projeto {
    id: number
    titulo: string
    descricao: string
    imagens: string[]
    tecnologias: Tecnologia[]
    link: string
}
