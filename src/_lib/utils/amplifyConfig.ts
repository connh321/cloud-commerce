import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json'; // adjust path as needed

/**
 * Amplify Configuration Module
 * Handles the setup of AWS Amplify for both client and server-side rendering
 */

/**
 * Configures Amplify with the provided outputs and enables SSR
 * @function configureAmplify
 */
export const configureAmplify = () => {
  Amplify.configure(outputs, { ssr: true });
};

configureAmplify();
