import { HiOutlineChevronLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import { colors } from '../../../config/styles';

interface Props {
  showsBack?: boolean;
}

export const PortalContent: React.FC<Props> = ({ showsBack, children }) => {
  const history = useHistory()

  return (
    <div style={styles.container}>
      {showsBack && (
        <div style={styles.header} onClick={() => history.goBack()}>
          <HiOutlineChevronLeft size={24} color={colors.secondaryTextColor} />
          <span style={styles.backText}>Voltar</span>
        </div>
      )}
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '3rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    cursor: 'pointer',
  },
  backText: {
    fontSize: '1rem',
    color: colors.secondaryTextColor,
  },
  content: {
    marginTop: '1rem',
  }
}