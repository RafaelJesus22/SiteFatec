import { SectionTitle } from "../../atoms/SectionTitle/SectionTitle";
import './styles.css';

interface Props {
  title?: string;
  subtitle?: string;
  isOnTop?: boolean;
  bottomSpace?: boolean;
}

export const Content: React.FC<Props> = ({
  children,
  title,
  subtitle,
  isOnTop,
  bottomSpace
}) => {
  const styles = {
    title: {
      marginTop: isOnTop ? 130 : 0,
    },
    container: {
      marginBottom: bottomSpace ? '4rem' : 0,
    }
  };

  return (
    <div className="content" style={styles.container}>
      <div className="title-container" style={styles.title}>
        <SectionTitle title={title || ""} subtitle={subtitle} />
      </div>
      {children}
    </div>
  );
};
