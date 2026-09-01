import React from 'react';
import PrivacyPolicy from '../../components/PrivacyPolicy';



export const metadata = {
  title: 'Privacy Policy - BluAI',
  description: 'Learn how BluAI protects your privacy and handles your personal and medical data securely.',
  alternates: {
    canonical: 'https://bluai.ai/privacy-policy',
  },
};
function Page() {
    
  return <>
  <PrivacyPolicy/>
  
  </>;
}

export default Page;
