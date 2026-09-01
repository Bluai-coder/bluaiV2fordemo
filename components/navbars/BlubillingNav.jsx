"use client";
import React from "react";
import { useRouter } from "next/navigation";

import {
    AppBar,
    Toolbar,
    Box,
    Container,

} from "@mui/material";
import Image from "next/image";

export default function BlubillingNav() {
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
                                src="/logos/BluBilling-logo.png"
                                alt="BluAccess"
                                width={95}
                                height={95}
                                priority
                                style={{ width: "auto", height: "auto", maxHeight: 58 }}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


        </>
    );
}
