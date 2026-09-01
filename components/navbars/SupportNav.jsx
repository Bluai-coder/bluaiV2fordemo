"use client";
import { useRouter } from "next/navigation";

import {
    AppBar,
    Toolbar,
    Box,
    Container,
    Typography,

} from "@mui/material";
import Image from "next/image";

export default function SupportNav() {
    const router = useRouter()

    const handleNavigate = () => {

        router.push("/")
    }
    return (
        <>
            <AppBar
                elevation={0}
                position="sticky"
                sx={{
                    bgcolor: "#fff",
                    borderBottom: "1px solid #eef0f6",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            minHeight: { xs: 64, md: 76 },
                            px: { xs: 1, sm: 2 },
                            gap: 2,
                        }}
                    >
                        {/* ================= LEFT LOGO ================= */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                                flexShrink: 0,
                            }}
                            onClick={() => handleNavigate("/")}
                        >
                            <Image
                                src="/logo.png"
                                alt="BluAccess"
                                width={95}
                                height={95}
                                priority
                                style={{ width: "auto", height: "auto", maxHeight: 58 }}
                            />

                        </Box>
                        <Typography
                         onClick={() => router.push("/contact/")}
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                cursor: "pointer",
                                color: "#1f2a56",
                                px: 1.4,
                                borderRadius: 2,
                                "&:hover": {
                                    color: "#1b4dff",
                                    backgroundColor: "rgba(65, 84, 241, 0.08)",
                                },
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>


        </>
    );
}
