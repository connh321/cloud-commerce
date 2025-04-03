import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json'; // adjust path as needed

// Configure Amplify globally
export const configureAmplify = () => {
  Amplify.configure(outputs, { ssr: true });
};

configureAmplify();
