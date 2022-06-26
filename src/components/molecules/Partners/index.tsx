import {
  autodesk,
  cisco,
  ms,
  amazonAcademy,
  oracleAcademy
} from '../../../assets/images';
import './styles.css';

export const Partners: React.FC = () => {
  const partners = [
    { image: amazonAcademy, alt: 'Logo da Amazon Academy' },
    { image: autodesk, alt: 'Logo do autodesk' },
    { image: cisco, alt: 'Logo da cisco' },
    { image: oracleAcademy, alt: 'Logo da Oracle Academy' },
    { image: ms, alt: 'Logo da Microsoft' },
  ];

  return (
    <div className="partners">
      {partners.map(item => (
        <div className="partner" key={item.alt}>
          <img
            className="partner-image"
            src={item.image}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  );
};
