import React from 'react'
import TermsOfService from '../../components/TermsOfService'



export const metadata = {
    title: 'Terms of Service - BluAI',
    description: 'Read the terms and conditions for using BluAI services.',
    alternates: {
        canonical: 'https://bluai.ai/terms-of-service',
    },
};


function page() {
    return (
        <>
            <TermsOfService />

        </>
    )
}

export default page
