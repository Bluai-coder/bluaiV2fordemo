"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    Container,
    Menu,
    MenuItem,
    Drawer,
    Divider,
    Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import Image from "next/image";
import { productMenu } from "@/components/productMenu";

export default function VitalschairEnquiryNavbar() {

    const [productsAnchor, setProductsAnchor] = React.useState(null);
    const productsOpen = Boolean(productsAnchor);

    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleCloseProducts = () => setProductsAnchor(null);


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
                                src="/vitals-chair-enquiry/mental-health-logo.png"
                                alt="BluAI"
                                width={118}
                                height={118}
                                priority
                                style={{ width: "auto", height: "auto", maxHeight: 78 }}
                            />
                        </Box>

                        {/* ================= DESKTOP MENU ================= */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                gap: 3,
                            }}
                        >



                        </Box>




                    </Toolbar>
                </Container>


            </AppBar>




        </>
    );
}
