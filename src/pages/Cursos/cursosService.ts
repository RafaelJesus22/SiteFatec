import { CursoProps, TipoDisciplina } from '../../types/ICurso';

type TipodDisciplinaType = {
  tecnica: TipoDisciplina;
  infra: TipoDisciplina;
  matematica: TipoDisciplina;
  adm: TipoDisciplina;
  linguagemEstrangeira: TipoDisciplina;
  linguaPortuguesa: TipoDisciplina;
  eletiva: TipoDisciplina;
  multidisciplinarProfissional: TipoDisciplina;
  multidisciplinarBasica: TipoDisciplina;
}

export const TIPO_DISCIPLINA: TipodDisciplinaType = {
  tecnica: 'tecnica',
  infra: 'infra',
  matematica: 'matematica',
  adm: 'adm',
  linguagemEstrangeira: 'linguagemEstrangeira',
  linguaPortuguesa: 'linguaPortuguesa',
  eletiva: 'eletiva',
  multidisciplinarProfissional: 'multidisciplinarProfissional',
  multidisciplinarBasica: 'multidisciplinarBasica'
}

export const cursos: { ads: CursoProps } = {
  ads: {
    grade: [
      {
        semestre: [
          {
            title: 'Algoritmos e Lógica de Programação',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Programação em microinformatica',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Arquitetura e Organização de Computadores',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Administração geral',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.adm,
          },
          {
            title: 'Matemática discreta',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.matematica,
          },
          {
            title: 'Comunicação e expressão',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.linguaPortuguesa,
          },
          {
            title: 'Inglês I',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.linguagemEstrangeira,
          },
        ]
      },
      {
        semestre: [
          {
            title: 'Linguagem de Programação',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Sistemas Operacionais I',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Sistemas de Informação',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Laboratório de Hardware',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Contabilidade',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.adm,
          },
          {
            title: 'Estatistíca Aplicada',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.matematica,
          },
          {
            title: 'Metodologia da Pesquisa Científico-Tecnológica',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.multidisciplinarBasica,
          },
          {
            title: 'Sociedade e Tecnologia',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.multidisciplinarProfissional,
          },
          {
            title: 'Inglês II',
            aulasSemanais: 2,
            type: 'linguagemEstrangeira',
          },
        ]
      },
      {
        semestre: [
          {
            title: 'Engenharia de Software I',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Estrutura de Dados',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Sistemas Operacionais II',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Banco de Dados',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
          title: 'Economia e Finanças',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.adm,
          },
          {
            title: 'Empreendedorismo ',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.multidisciplinarProfissional,
          },
          {
            title: 'Cálculo',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.matematica,
          },
          {
            title: 'Inglês III',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.linguagemEstrangeira,
          },
        ]
      },
      {
        semestre: [
          {
            title: 'Engenharia de Software II',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Programação Orientada a Objetos',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Interação Humano Computador',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Linguagem de Programação - Linguagem JAVA',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.eletiva,
          },
          {
            title: 'Laboratório de Banco de Dados',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Programação Linear e Aplicações',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.matematica,
          },
          {
            title: 'Ética e Responsabilidade Profissional',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.multidisciplinarProfissional,
          },
          {
            title: 'Inglês IV',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.linguagemEstrangeira,
          },
        ]
      },
      {
        semestre: [
          {
            title: 'Engenharia de Software III',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Programação para Dispositivos Móveis',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.eletiva,
          },
          {
            title: 'Redes de Computadores',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Gestão de Projetos',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Gestão de Equipes',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Inglês V',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.linguagemEstrangeira,
          },
        ]
      },
      {
        semestre: [
          {
            title: 'Laboratório de Engenharia de Software',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.tecnica,
          },
          {
            title: 'Inteligência Artificial',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Segurança da Informação',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Tópicos Especiais em Informática',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Gestão e Governança de Tecnologia da Informação',
            aulasSemanais: 4,
            type: TIPO_DISCIPLINA.infra,
          },
          {
            title: 'Inglês VI',
            aulasSemanais: 2,
            type: TIPO_DISCIPLINA.linguagemEstrangeira,
          },
        ]
      },
    ]
  }
}