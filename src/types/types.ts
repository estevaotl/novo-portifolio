export interface Tecnologia {
  nome: string;
  icone?: string;
}

export type Categoria = "Full Stack" | "Back-end" | "Front-end";
export type Visual = "receitas" | "match" | "commerce" | "maps" | "image";

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  contexto: string;
  categoria: Categoria;
  destaque: boolean;
  visual: Visual;
  imagens: string[];
  imagemAlt?: string;
  legendasImagens?: string[];
  tecnologias: Tecnologia[];
  link: string;
  desafio: string;
  solucao: string;
  entregas: string[];
}
