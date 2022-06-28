import { DbEvent } from '../../../types/IEvents';
import { CallToMore } from '../../atoms/CallToMore/CallToMore';
import { firebaseTimestampToDate, shotenStrings } from '../../../utils/strings';

import './styles.css';
import { LabelText } from '../../atoms/Typography/LabelText';

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
      <LabelText color="secondary" align="right">
        {firebaseTimestampToDate(createdAt)}
      </LabelText>
      <img
        src={imgURl || img}
        alt="Imagem da noticia"
        className="event__image"
      />
      <LabelText weight="600" size="default">{title}</LabelText>
      <LabelText color="secondary">{shotenStrings(post, 200)}</LabelText>
      <div className="ctm">
        <CallToMore title={'Ler matéria completa'} link={`/noticias/${id}`} />
      </div>
    </div>
  );
};
