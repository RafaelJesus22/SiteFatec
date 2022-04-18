import { SubjectTheme } from "../../../types/ICurso";

interface Props {
  theme: SubjectTheme;
  size?: number;
  cursorPointer?: boolean;
  onPress?: (theme: SubjectTheme) => void;
  selected?: boolean;
}

export const SubjectThemeMarker: React.FC<Props> = ({
  theme,
  size = 20,
  cursorPointer,
  onPress,
  selected,
}) => {
  return (
    <div
      onClick={onPress ? () => onPress(theme) : () => { }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,

        backgroundColor: theme.background || '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '0.5rem',
        cursor: cursorPointer ? 'pointer' : 'default',
      }}
    >
      {selected && (
        <div
          style={{
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: size * 0.5,

            backgroundColor: '#fff',
          }}
        />
      )}
    </div>
  );
}