// app/pole-viewer/page.jsx
'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

const BriefcaseViewer = dynamic(() => import('@/components/BriefcaseViewer'), {
    ssr: false,
    loading: () => (
        // <div className="w-screen h-screen bg-[#0c1020] flex items-center justify-center">
        <Box sx={{ position: "relative", width: { xs: 280, sm: 360, md: 520 }, height: { xs: 280, sm: 360, md: 560 }, borderRadius: 4 }}>

            <div className="text-white text-xl">Loading 3D Viewer...</div>
        </Box>
    )
});

export default function VitalsBriefcase3D() { 
    // Try both paths
    const modelPath = '/vitals-briefcase.glb';  // This should work

    return (
        <BriefcaseViewer modelPath={modelPath} />
    );
}