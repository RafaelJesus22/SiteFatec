import { LabelText } from '../Typography/LabelText';
import './styles.css';

interface Props {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

export const WhyUsItem: React.FC<Props> = ({
  image,
  title,
  description,
  imageAlt
}) => {
  return (
    <div className="motivos-item">
      <div className="motivos-icon">
        <img src={image} alt={imageAlt} />
      </div>
      <LabelText bold size="medium" spacing={{ marginBottom: '1rem' }}>
        {title}
      </LabelText>
      <LabelText size="small" color="secondary" align="center">
        {description}
      </LabelText>
    </div>
  );
};