import ReactDOM from "react-dom";
import { Button } from "../../atoms/Button";
import './styles.css';

interface Props {
  title: string;
  text: string;
  onClick: () => any;
  onCancel: () => any;
  visible: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export const Modal: React.FC<Props> = ({
  title,
  text,
  onClick,
  onCancel,
  visible,
  confirmButtonText = "Confirmar",
  cancelButtonText = "Cancelar",
}) => {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="content">
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div className="modal-body">
          <p>{text}</p>
        </div>
        <div className="buttons">
          <Button
            title={cancelButtonText}
            onClick={onCancel}
            type="secondary"
          />
          <div style={{ width: 15 }} />
          <Button
            title={confirmButtonText}
            onClick={onClick}
          />
        </div>
      </div>
    </div>, 
    document.getElementsByName('modal')[0]
  );
}