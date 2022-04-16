import './styles.css';

interface Props {
  title: string;
  description?: string;
  isLink?: boolean;
}

export const ListItem: React.FC<Props> = ({
  title,
  description,
  isLink = false,
}) => {
  console.log(`title ${title} - description ${description}`);

  return (
    <div className="list-item">
      <strong>{title}</strong>
      {isLink ? (
        <a href={description} target="_blank" rel="noreferrer">
          <p>{!description ? 'Não informado' : description}</p>
        </a>
      ) : (
        <p>{!description ? 'Não informado' : description}</p>
      )}
    </div>
  );
};
