import { Fragment, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Container } from "../../components/containers/Container/Container";
import { Content } from "../../components/containers/Content/Content";
import { Accordion } from "../../components/atoms/Accordion";
import { colors } from "../../config/styles";
import './styles.css';

interface HeaderProps {
  isOpen: boolean;
  question: string;
  onClick?: () => void;
}

const LINK_VESTIBULAR_FATEC = "https://www.vestibularfatec.com.br/unidades-cursos/escola.asp?c=249";
const LINK_PROVAS_FATEC = "https://www.vestibularfatec.com.br/provas-gabaritos/";
const LINK_MAPS_FATEC = "https://www.google.com/maps/dir//fatec+santana+de+parnaiba/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf1ddad2858c6f:0x8540bd64dbbe879b?sa=X&ved=2ahUKEwi4q6nc2KX3AhXiupUCHSPLAjQQ9Rd6BAhaEAQ";
const LINK_API_MAPS_FATEC = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJb4yF0todz5QRm4e-22S9QIU&key=AIzaSyCmc0dkPhRZF-0rzfsTwU8qibrwB0gTIVw";

export const PerguntasFrequentes: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<any>();
  const [questions] = useState([
    {
      id: 1,
      pergunta: "Como faço para me inscrever no vestibular?",
      resposta: (
        <Fragment>
          <p>
            Os vestibulares da Fatec são realizados em dois periodos do ano,
            um para ingressar no primeiro semestre (fevereiro)
            e outro para o segundo semestre (agosto) do ano.
          </p>
          <p>
            As incrições para o primeiro semestre geralmente ocorrem em entre
            Novembro e Dezembro. Para o segundo semestre entre Junho e Agosto.
          </p>
          <p>
            Para se inscrever,{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href={LINK_VESTIBULAR_FATEC}
              className="fq-link"
            >
              Clique aqui
            </a>
          </p>
          <p>Dúvidas sobre vestibular?</p>
          <p>
            Fale com o Coordenador do nosso Vestibular, Ana Paula Freitas de Lima Gomes.
          </p>
          <p>
            E-mail: f283.vestibular@fatec.sp.gov.br
          </p>
        </Fragment>
      )
    },
    {
      id: 2,
      pergunta: "O que é Tecnólogo?",
      resposta: (
        <Fragment>
          <p>
            É um profissional de nível superior (assim como um engenheiro, advogado, médico, etc), que é formado para trabalhar com tecnologia dentro da área em que estudou.
          </p>
          <p>
            Por exemplo: um tecnólogo em automação industrial é um profissional formado para projetar, gerenciar, operar e até fazer manutenção, em um sistema que substitui a mão de obra  humana por máquinas em uma linha de produção industrial.
          </p>
          <p>
            Outro exemplo: um tecnólogo em informática para negócios é um profissional formado para aplicar, na administração de uma empresa, os conhecimentos da área de tecnologia da informação (computação).
          </p>
        </Fragment>
      )
    },
    {
      id: 3,
      pergunta: "Posso fazer pós graduação, mestrado, doutorado como tecnólogo?",
      resposta: (
        <Fragment>
          <p>
            <b>SIM</b>, é possível fazer uma pós-graduação depois de cursar na Fatec. Esta é uma formação em nível superior como qualquer outra e tem a mesma validade de um bacharelado ou uma licenciatura.
          </p>
        </Fragment>
      )
    },
    {
      id: 4,
      pergunta: "Como é a prova do vestibular?",
      resposta: (
        <Fragment>
          <p>
            A prova é de multipla escolha geralmente com 54 questões. Os assuntos abordados são Biologia, Química, Geografia, História, Português, Inglês, Matemática, Física.
            <p>
              Para acessar as provas anteriores,{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href={LINK_PROVAS_FATEC}
                className="fq-link"
              >
                Clique aqui
              </a>
            </p>
          </p>
        </Fragment>
      )
    },
    {
      id: 5,
      pergunta: "Quem pode tentar uma vaga?",
      resposta: (
        <Fragment>
          <p>
            O Processo Seletivo Vestibular, do 1º Semestre de 2021, destina-se ao ingresso nos Cursos Superiores de Tecnologia oferecidos pelas Fatecs - Faculdades de Tecnologia do CEETEPS, devendo o candidato ter concluído obrigatoriamente o Ensino Médio até a data da matrícula, atendendo aos seguintes pré-requisitos:
          </p>
          <p>
            - Para o candidato que concluiu o Ensino Médio regular: possuir Histórico Escolar com Certificado de conclusão do Ensino Médio;
          </p>
          <p>
            - Para o candidato que concluiu o Ensino Médio por meio de provas ou exames de certificação de competências ou de avaliação de jovens e adultos, que sejam decorrentes do Exame Nacional do Ensino Médio – ENEM, do Exame Nacional para Certificação de Competências de Jovens e Adultos – ENCCEJA e afins: possuir certificação de conclusão do Ensino Médio, expedida por órgão competente;
          </p>
          <p>
            - Para o candidato que estiver cursando ou concluindo o Ensino Médio regular ou a Educação de Jovens e Adultos – EJA, ou afins: possuir Histórico Escolar com Certificado de Conclusão do Ensino Médio no ato da matrícula.
          </p>
        </Fragment>

      )
    },
    {
      id: 6,
      pergunta: "Onde fica a Fatec?",
      resposta: (
        <Fragment>
          <p>
            A Fatec se localiza na Região de Santana de Parnaíba, no bairro da Fazendinha, ao lado do Senai e próximo ao Bob's.
          </p>
          <p>
            Av. Tenente Marques, 5.136 - Fazendinha - Santana de Parnaíba/SP
          </p>
          <p>
            CEP: 06529-001
          </p>
          <p>
            <iframe
              title="google-maps"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              src={LINK_API_MAPS_FATEC}>
            </iframe>
          </p>
          <p>
            Ir para a rota no Google Maps,{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href={LINK_MAPS_FATEC}
              className="fq-link"
            >
              Clique aqui
            </a>
          </p>
        </Fragment>
      )
    },
  ]);

  return (
    <Container>
      <Content isOnTop bottomSpace title="Perguntas Frequentes">
        <div className="fq-container">
          {questions.map((question, index) => (
            <Accordion
              key={question.id}
              isOpen={!!selectedQuestion && selectedQuestion.id === question.id}
              zIndex={(index + 1) * 10}
              onClick={() => {
                if (!!selectedQuestion && selectedQuestion.id === question.id) {
                  return setSelectedQuestion(undefined);
                }
                setSelectedQuestion(question);
              }}
              Header={() => (
                <AccordionHeader
                  isOpen={!!selectedQuestion && selectedQuestion.id === question.id}
                  question={question.pergunta}
                />
              )}
              Content={() => (
                <AccordionContent>
                  {question.resposta}
                </AccordionContent>
              )}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
};

const AccordionHeader: React.FC<HeaderProps> = ({ isOpen, question, onClick }) => (
  <div className="question-header" onClick={onClick}>
    <div>
      <h3>{question}</h3>
    </div>
    <div>
      {isOpen ? (
        <div>
          <AiOutlineMinus
            size={20}
            color={colors.primaryColor}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ) : (
        <div>
          <AiOutlinePlus
            size={20}
            color={colors.primaryColor}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </div>
  </div>
);

const AccordionContent: React.FC = ({ children }) => {
  return (
    <div className="question-content">
      {children}
    </div>
  );
};