import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

import { CursosEnum } from "../enums/cursos";
import { CursoProps } from "../types/ICurso";
import { CollectionsEnum } from '../enums/collections';

export class CursoServise {
  constructor () {
    this.checkFirestoreConnection();
  }

  async checkFirestoreConnection() {
    console.log('Checking Firestore connection...');
    const disciplinesCollectionRes = collection(db, CollectionsEnum.disciplines);
    const disciplinesSnapShot = await getDocs(disciplinesCollectionRes);
    disciplinesSnapShot.docs?.map(item => console.log({ ...item.data(), id: item.id }));
  }

  private ads: CursoProps = {
    nome: "Analise e Desenvolvimento de Sistemas",
    link: CursosEnum.ADS,
    info: {
      perfilProfissional: 'O curso de Análise e Desenvolvimento de Sistemas prepara você para atuar na área de Tecnologia, podendo trabalhar na análise, projeto e desenvolvimento de sistemas computacionais, tais como: aplicativos para celulares e outros dispositivos móveis, sites, jogos, sistema comerciais etc. \n\n' +
        'Nessa área, você será um profissional que poderá atuar em todos os tipos de empresa. Em Informática, não há crise de emprego. Desde o século passado dizemos que “a informática é a profissão do presente e do futuro”. Com os avanços da tecnologia, essa frase fica cada vez mais verdadeira.\n\n' +
        'Em reportagem no Jornal O Estado de São Paulo, de 01/10/2017, está escrito “... a língua das máquinas será o idioma mais importante do futuro”.  Portanto, saber programação, será fundamental.',
      ondeTrabalhar: 'Como a informática está presente em praticamente todos os setores da sociedade, o tecnólogo em Análise e Desenvolvimento de Sistemas pode atuar em empresas públicas ou privadas, instituições financeiras, comércio, prestadora de serviços, consultorias, terceiro setor, agropecuária, empresas especializadas em TI, indústrias etc.',
    },
    detalhesTecnicos: {
      duracao: 3,
      periodo: 'Matutino/Noturno',
      vagas: 40,
      nota: 'Do 1º ao 4º semestres o aluno estuda no período da manhã e a partir do 5º  semestre no período noturno.'
    },
    coordenador: {
      titulo: 'Prof. Me.',
      nome: 'Alexandre Charles Cassiano',
      linkCurriculo: 'https://www.linkedin.com/in/alexandre-charles-cassiano-a9a8b8b4/',
    },
    grade: {
      semestre1: [],
      semestre2: [],
      semestre3: [],
      semestre4: [],
      semestre5: [],
      semestre6: [],
    }
  };

  private segInfo: CursoProps = {
    nome: "Segurança da informação",
    link: CursosEnum.SEGINFO,
    info: {
      perfilProfissional: 'O Tecnólogo em Segurança da Informação zela pela integridade e resguardo de informações das organizações, protegendo-as contra acessos não autorizados. Assim, dentro dos princípios de confidencialidade, integridade e disponibilidade, esse profissional gerencia, aplica, administra e configura ambientes corporativos com requisitos de segurança. Realiza análises de riscos, administra sistemas de informações, projeta e gerencia redes de computadores seguras, realiza auditorias, planeja contingências e recuperação das informações em caso de sinistros. Atua nos aspectos lógicos e físicos, controlando os níveis de acesso aos serviços dos sistemas operacionais, banco de dados e redes de computadores. Pode exercer funções de CSO (Chief Security Officer) nas áreas de planejamento, implementação e controle da política de Segurança da Informação em ambientes corporativos de pequeno, médio e grande porte.',
    },
    detalhesTecnicos: {
      duracao: 3,
      periodo: 'Noturno',
      vagas: 40,
    },
    coordenador: {
      titulo: 'Prof. Dr.',
      nome: 'Irapuan Glória Júnior',
      linkPhoto: 'https://www.linkedin.com/in/irapuan-gl%C3%B3ria-junior-a9a8b8b4/',
      linkCurriculo: 'https://www.linkedin.com/in/alexandre-charles-cassiano-a9a8b8b4/',
    },
    grade: {
      semestre1: [],
      semestre2: [],
      semestre3: [],
      semestre4: [],
      semestre5: [],
      semestre6: [],
    }
  };

  private cienciaDados: CursoProps = {
    nome: "Ciência de Dados",
    link: CursosEnum.CIENCIA_DE_DADOS,
    info: {
      perfilProfissional: 'O Tecnólogo em Ciência de Dados modela soluções de problemas, aplicando algorítmos de aprendizagem de máquina e técnicas estatísticas para análise de dados como apoio às decisões nas organizações. Utiliza uma abordagem científica para resolução dos problemas de gestão. Cria aplicações para coletar, preparar, misturar, visualizar, explorar e analisar grande quantidade de dados, com o objetivo de buscar padrões e identificar tendências para que as organizações tomem decisões de negócios baseadas em fatos e números. Apoia os gestores na solução de problemas com uso de diversas tecnologias de modelagem orientada a dados.',
      competencias: {
        title: 'O profissional egresso do CST em Ciência de Dados deve demonstrar as seguintes competências:',
        itens: [
          'Participar ativamente da estratégia de modelagem (design e execução de experimentos): que técnica usar, que variáveis internas e externas deverão ser buscadas; como extrair estes dados; quais testes estatísticos de validação aplicar;',
          'Construir modelos de dados, métricas, relatórios e dashboards para diferentes áreas de negócio;',
          'Delinear o tipo de solução, através da aplicação de conhecimentos de estatística, matemática e ciência da computação;',
          'Elaborar planos de ação para o desenvolvimento de algorítmos de ciência de dados, identificando comportamentos e série de dados; testar e decidir diferentes algorítmos de acordo com o comportamento das séries; elaborar padrões ou procedimentos de testes back-end; buscar as informações necessárias para realização das análises de desempenho, controle e monitoramento dos algorítmos;',
          'Analisar dados utilizando mineração de dados e análises avançadas com uso de softwares: programas próprios, pacotes estatísticos ou planilhas;',
          'Fornecer soluções de aprendizado de máquina, incluindo definição do problema, mineração de dados, exploração e visualização de dados, experimento de algoritmos, avaliação e comparação de resultados e implantação de hipóteses, melhorando de forma interativa o modelo e o processo;',
          'Preparar análises de dados complexas e de modelos que ajudam a resolver problemas das organizações, obtendo resultados que tragam impacto significativamente mensurável;',
          'Apresentar os resultados de forma clara e transparente, em alguns casos em forma de output para ser carregado em uma ferramenta de visualização ou em forma de apresentação para o cliente, e em outros casos como um documento de especificação para ser desenvolvido por programadores;',
          'Trabalhar com dados de diversas fontes, estruturados (bases relacionais ou não-relacionais) ou não estruturados (textos e outros);',
          'Analisar, compactar e limpar os dados e informações da base de dados, na aplicação de técnicas de reconhecimento de padrões, ou na extração de conhecimento com o uso de algorítmos de aprendizagem de máquina para solução de problemas reais;',
          'Construir dispositivos de integração de dados. Orientar em relação a melhor forma de realizar a integração de dados. Utilizar dados da plataforma big-data para análises e desenvolvimentos de modelos estatísticos. Definir métodos, padrões, procedimentos, processos e soluções de qualidade de dados;',
          'Criar protótipos de algorítmos de análise e modelagem estatística, bem como aplicar esses algorítmos para soluções de problemas com embasamento em dados;',
          'Aplicar ferramentas estatísticas;',
          'Conhecer e aplicar linguagens de programação adequadas à ciência de dados.',
        ]
      }
    },
    detalhesTecnicos: {
      duracao: 3,
      periodo: 'Noturno',
      vagas: 40,
    },
    coordenador: {
      titulo: 'Prof. Dr.',
      nome: 'Irapuan Glória Júnior',
      linkCurriculo: 'https://www.linkedin.com/in/alexandre-charles-cassiano-a9a8b8b4/',
    },
    grade: {
      semestre1: [],
      semestre2: [],
      semestre3: [],
      semestre4: [],
      semestre5: [],
      semestre6: [],
    }
  };

  private gCom: CursoProps = {
    nome: "Gestão comercial",
    link: CursosEnum.GCOM,
    info: {
      perfilProfissional: 'Focado nas transações comerciais, o Tecnólogo em Gestão Comercial presta-se a organização atendendo às diversas formas de intervenção (varejo, atacado, representação, etc.) de qualquer setor. Como conhecedor das condições de viabilidade econômico-financeiro-tributária, dos instrumentos de relacionamento com o cliente, dos princípios da qualidade, atua no planejamento, operação, implementação e atualização de sistemas de informações comerciais que proporcionem maior rentabilidade e flexibilidade ao processo de comercialização. Atua no fluxo de informações com os clientes, proporcionando maior visibilidade institucional da empresa, definindo estratégias de venda de serviços e produtos, gerenciando a relação custo e preço final',
      eixoTecnologico: 'Gestão e Negócios',
    },
    detalhesTecnicos: {
      duracao: 3,
      periodo: 'Noturno',
      vagas: 40,
    },
    coordenador: {
      titulo: 'Ms.',
      nome: 'Jucelaine Oliveira',
      linkCurriculo: 'https://www.linkedin.com/in/alexandre-charles-cassiano-a9a8b8b4/',
    },
    grade: {
      semestre1: [],
      semestre2: [],
      semestre3: [],
      semestre4: [],
      semestre5: [],
      semestre6: [],
    }
  };

  private cursos: CursoProps[] = [
    this.gCom,
    this.ads,
    this.cienciaDados,
    this.segInfo
  ];

  public getCurso(curso: CursosEnum): CursoProps | undefined {
    return this.cursos.find(c => c.link === curso);
  }
}