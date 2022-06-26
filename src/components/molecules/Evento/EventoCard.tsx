import { DbEvent } from '../../../types/IEvents';
import { CallToMore } from '../../atoms/CallToMore/CallToMore';
import { firebaseTimestampToDate, shotenStrings } from '../../../utils/strings';

import './styles.css';

const img =
  'https://www.fatecsdp.edu.br/carrega/noticias/2019/12/750_390_crop_1575403969.jpg';


export const EventoCard: React.FC<DbEvent> = ({
  createdAt,
  title,
  post,
  imgURl,
  id,
}) => {
  return (
    <div className="event">
      <h4 className="event__date">{firebaseTimestampToDate(createdAt)}</h4>
      <img
        src={imgURl || img}
        alt="Imagem da noticia"
        className="event__image"
      />
      <h2 className="event__title">{title}</h2>
      <p className="event__description">{shotenStrings(post, 200)}</p>
      <div className="ctm">
        <CallToMore title={'Ler matéria completa'} link={`/noticias/${id}`} />
      </div>
    </div>
  );
};
