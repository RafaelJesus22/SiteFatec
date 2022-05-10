import { useState } from "react";
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

export const PerguntasFrequentes: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<any>();
  const [questions] = useState([
    {
      id: 1,
      pergunta: "Como faço para me inscrever no vestibular?",
      resposta: `Os vestibulares da Fatec são realizados em dois periodos do ano, um para ingressar no primeiro semestre (fevereiro)  e outro para o segundo semestre (agosto) do ano.
      As incrições para o primeiro semestre geralmente ocorrem em entre Novembro e Dezembro. Para o segundo semestre entre Junho e Agosto.`
    },
    {
      id: 2,
      pergunta: "Como faço para me inscrever no vestibular?",
      resposta: `Os vestibulares da Fatec são realizados em dois periodos do ano, um para ingressar no primeiro semestre (fevereiro)  e outro para o segundo semestre (agosto) do ano.
      As incrições para o primeiro semestre geralmente ocorrem em entre Novembro e Dezembro. Para o segundo semestre entre Junho e Agosto.`
    },
    {
      id: 3,
      pergunta: "Como faço para me inscrever no vestibular?",
      resposta: `Os vestibulares da Fatec são realizados em dois periodos do ano, um para ingressar no primeiro semestre (fevereiro)  e outro para o segundo semestre (agosto) do ano.
      As incrições para o primeiro semestre geralmente ocorrem em entre Novembro e Dezembro. Para o segundo semestre entre Junho e Agosto.`
    },
    {
      id: 4,
      pergunta: "Como faço para me inscrever no vestibular?",
      resposta: `Os vestibulares da Fatec são realizados em dois periodos do ano, um para ingressar no primeiro semestre (fevereiro)  e outro para o segundo semestre (agosto) do ano.
      As incrições para o primeiro semestre geralmente ocorrem em entre Novembro e Dezembro. Para o segundo semestre entre Junho e Agosto.`
    },
    {
      id: 5,
      pergunta: "Como faço para me inscrever no vestibular?",
      resposta: `Os vestibulares da Fatec são realizados em dois periodos do ano, um para ingressar no primeiro semestre (fevereiro)  e outro para o segundo semestre (agosto) do ano.
      As incrições para o primeiro semestre geralmente ocorrem em entre Novembro e Dezembro. Para o segundo semestre entre Junho e Agosto.`
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
                  <p>{question.resposta}</p>
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