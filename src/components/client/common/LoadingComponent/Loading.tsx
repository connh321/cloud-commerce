import { PulseLoader } from "react-spinners";

interface LoadingProps {
  loading: boolean;
  size?: number;

  style?: React.CSSProperties; 
}
const LoadingComponent = ({loading, style, size} : LoadingProps) => {
  return <PulseLoader
  style={style}
  className="loading"
  color="#ccc"
  loading={loading}
  size={size ?? 5}
  speedMultiplier={.5}
  aria-label="Loading Spinner"
/>
};
export default LoadingComponent;