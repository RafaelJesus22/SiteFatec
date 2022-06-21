import { WhyUsItem } from "../../atoms/WhyUsItem";
import { Laptop, Book, People, Work } from '../../../assets/icons/icons';
import { PrimaryButton } from "../../atoms/PrimaryButton/PrimaryButton";
import './styles.css';

export const WhyUs: React.FC = () => {
  return (
    <div className="why-us">
      <div className="motivos-container">
        <WhyUsItem
          image={Laptop}
          imageAlt="Ícone de laptop"
          title="Estrutura"
          description="Infraestrutura com equipamentos novos e modernos de qualidade."
        />
        <WhyUsItem
          image={People}
          imageAlt="Ícone de pessoas"
          title="Corpo docente"
          description="Corpo docente formado por Doutores, Mestres e Especialistas."
        />
        <WhyUsItem
          image={Work}
          imageAlt="Ícone de maleta"
          title="Mercado de trabalho"
          description="Cursos de tecnologia atuais e densevolvidos para o mercado de trabalho."
          />
        <WhyUsItem
          image={Book}
          imageAlt="Ícone de livro"
          title="Ensino gratuito"
          description="Cursos superiores gratuitos e de qualidade que se destacam nos currículos dos alunos."
        />
      </div>
      <div className="pimary-button">
        <PrimaryButton to={'/quero_ser_fatec'} title={'Vestibular'} />
      </div>
    </div>
  );
};