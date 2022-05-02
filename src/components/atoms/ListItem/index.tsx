import './styles.css';

interface Props {
  title: string;
  description?: string;
  descriptionArray?: string[];
  isLink?: boolean;
}

export const ListItem: React.FC<Props> = ({
  title,
  description,
  descriptionArray,
  isLink = false,
}) => {
  return (
    <div className="list-item">
      <strong>{title}</strong>
      {isLink && (
        <a href={description} target="_blank" rel="noreferrer">
          <p>{!description ? 'Não informado' : description}</p>
        </a>
      )}

      {!description && !descriptionArray && (
        <p>Não informado</p>
      )}
      {!!description && (
        <p>{description}</p>
      )}
      {!!descriptionArray && descriptionArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
