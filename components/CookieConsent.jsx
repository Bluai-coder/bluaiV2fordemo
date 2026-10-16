// components/CookieConsent.jsx
'use client';

import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Typography,
    Paper,
    Slide,
    Link,
    Stack,
    useTheme,
} from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import { getConsent, setConsent, clearNonEssentialCookies } from '@/lib/consent';

export default function CookieConsent() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        if (!getConsent()) {
            const timer = setTimeout(() => setOpen(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        setConsent('accepted');
        setOpen(false);
    };

    const handleCancel = () => {
        setConsent('declined');
        clearNonEssentialCookies();
        setOpen(false);
    };

    return (
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            {/* Outer wrapper pinned to viewport, owns all positioning */}
            <Box
                sx={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    pointerEvents: 'none',       // clicks pass through the empty area
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    p: { xs: 1.5, sm: 2, md: 4 }, // safe gutter from all edges
                }}
            >
                <Paper
                    elevation={0}
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-live="polite"
                    sx={{
                        pointerEvents: 'auto',    // re-enable clicks on the banner itself
                        width: '100%',
                        maxWidth: 700,
                        maxHeight: 'calc(100vh - 24px)',
                        overflowY: 'auto',
                        p: { xs: 2, sm: 2.5, md: 3 },
                        borderRadius: { xs: 2.5, sm: 3 },
                        backgroundColor: 'rgba(20, 20, 35, 0.9)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                        color: '#fff',
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 2, sm: 3 }}
                        alignItems="center"
                    >
                        {/* Cookie Icon */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'rgba(79, 70, 229, 0.2)',
                                borderRadius: '50%',
                                p: { xs: 1.25, sm: 1.5 },
                                width: { xs: 48, sm: 56 },
                                height: { xs: 48, sm: 56 },
                                flexShrink: 0,
                            }}
                        >
                            <CookieIcon sx={{ color: '#818cf8', fontSize: { xs: 24, sm: 28 } }} />
                        </Box>

                        {/* Text */}
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,               // <-- critical for flex text truncation
                                textAlign: { xs: 'center', sm: 'left' },
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                gutterBottom
                                sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' } }}
                            >
                                We value your privacy
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    lineHeight: 1.6,
                                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                }}
                            >
                                BluAI uses cookies to improve your experience and analyze traffic.
                                Read our{' '}
                                <Link
                                    href="/privacy-policy"
                                    underline="hover"
                                    sx={{
                                        color: '#818cf8',
                                        fontWeight: 500,
                                        '&:hover': { color: '#a5b4fc' },
                                    }}
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </Typography>
                        </Box>

                        {/* Buttons */}
                        <Stack
                            direction="row"
                            spacing={{ xs: 1, sm: 1.5 }}
                            sx={{
                                flexShrink: 0,
                                width: { xs: '100%', sm: 'auto' },
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                variant="outlined"
                                onClick={handleCancel}
                                sx={{
                                    flex: { xs: 1, sm: 'none' },
                                    minWidth: { sm: 100 },
                                    color: 'rgba(255,255,255,0.7)',
                                    borderColor: 'rgba(255,255,255,0.2)',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                    py: { xs: 0.75, sm: 1 },
                                    px: { xs: 1.5, sm: 2.5 },
                                    whiteSpace: 'nowrap',
                                    '&:hover': {
                                        borderColor: 'rgba(255,255,255,0.4)',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        color: 'rgba(255,255,255,0.9)',
                                    },
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleAccept}
                                sx={{
                                    flex: { xs: 1, sm: 'none' },
                                    minWidth: { sm: 100 },
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                    py: { xs: 0.75, sm: 1 },
                                    px: { xs: 1.5, sm: 2.5 },
                                    whiteSpace: 'nowrap',
                                    background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)',
                                    boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #4338ca 0%, #6d28d9 100%)',
                                        boxShadow: '0 6px 20px rgba(79, 70, 229, 0.6)',
                                    },
                                }}
                            >
                                Accept
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </Slide>
    );
}