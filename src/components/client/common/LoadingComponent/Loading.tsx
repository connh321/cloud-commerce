import { PulseLoader } from 'react-spinners';

/**
 * Props interface for LoadingComponent
 */
interface LoadingProps {
  loading: boolean;
  size?: number;

  style?: React.CSSProperties;
}

/**
 * Displays a pulse loading animation
 * @param {LoadingProps} props Component props
 * @param {boolean} props.loading Controls visibility of loader
 * @param {number} [props.size=5] Size of loading dots in pixels
 * @param {React.CSSProperties} [props.style] Custom styles for loader
 * @returns {JSX.Element} Animated loading indicator
 */
const LoadingComponent = ({ loading, style, size }: LoadingProps) => {
  return (
    <PulseLoader
      style={style}
      className="loading"
      color="#ccc"
      loading={loading}
      size={size ?? 5}
      speedMultiplier={0.5}
      aria-label="Loading Spinner"
    />
  );
};
export default LoadingComponent;
