import './styles.css';

interface Props {
  images: string[];
}

export const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="internships">
      {images.map((item, index) => (
        <div className="internship" key={index}>
          <img
            className="internship-image"
            src={item}
            alt="Logo de empresa que já contratou nossos alunos"
          />
        </div>
      ))}
    </div>
  );;
}