import {
  autodesk,
  cisco,
  ibm,
  ms,
  santanaDeParnaiba,
} from '../../../assets/images';
import './styles.css';

export const Partners: React.FC = () => {
  const partners = [
    { image: santanaDeParnaiba, alt: 'Logo do município de Santana de Parnaíba' },
    { image: autodesk, alt: 'Logo do autodesk' },
    { image: cisco, alt: 'Logo da cisco' },
    { image: ibm, alt: 'Logo da IBM' },
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
