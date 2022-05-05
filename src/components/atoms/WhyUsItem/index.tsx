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
      <div className="motivos-title">{title}</div>
      <div className="motivos-description">
        {description}
      </div>
    </div>
  );
};