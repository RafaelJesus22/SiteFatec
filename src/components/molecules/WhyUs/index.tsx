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
          description="Infraestrutura de qualidade, com equipamentos atuais e espaços de estudo modernos."
        />
        <WhyUsItem
          image={People}
          imageAlt="Ícone de pessoas"
          title="Corpo docente"
          description="Formado por profissionais e pesquisadores que atuam no mercado de trabalho. Doutores, Mestres e Especialistas formam um time de qualidade."
        />
        <WhyUsItem
          image={Book}
          imageAlt="Ícone de livro"
          title="Mercado de trabalho"
          description="Cursos de tecnologia atuais e planejados de acordo com as demandas do mercado de trabalho."
        />
        <WhyUsItem
          image={Work}
          imageAlt="Ícone de maleta"
          title="Ensino gratuito"
          description="Cursos superiores de qualidade e gratuitos que fazem a diferença no currículo dos alunos."
        />
      </div>
      <div className="pimary-button">
        <PrimaryButton to={'/quero_ser_fatec'} title={'Quero ser Fatec'} />
      </div>
    </div>
  );
};