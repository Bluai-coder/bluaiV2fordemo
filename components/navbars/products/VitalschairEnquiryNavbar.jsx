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
                                src="/vitals-chair-enquiry/logo.png"
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

                        {/* ================= RIGHT BUTTONS (DESKTOP) ================= */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                gap: 1.5,
                            }}
                        >





                            <Button
                                variant="contained"
                                startIcon={<BusinessCenterOutlinedIcon />}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: 700,
                                    bgcolor: "#2f46ff",
                                    borderRadius: 999,
                                    px: 2.6,
                                    py: 1.1,
                                    boxShadow: "none",
                                    "&:hover": { bgcolor: "#2237e8" },
                                }}
                                component={Link}
                                target="_blank"
                                href="https://forms.gle/z9AF8p1yY7wBSQBHA "
                            >
                                Distributor Enquiry Form
                            </Button>
                        </Box>

                        {/* ================= MOBILE HAMBURGER ================= */}
                        <IconButton
                            onClick={() => setMobileOpen(true)}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                borderRadius: 2,
                                border: "1px solid #e6e9f5",
                                width: 44,
                                height: 44,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>

                {/* ================= DESKTOP PRODUCTS DROPDOWN ================= */}
                <Menu
                    anchorEl={productsAnchor}
                    open={productsOpen}
                    onClose={handleCloseProducts}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    PaperProps={{
                        sx: {
                            mt: 1,
                            borderRadius: 3,
                            boxShadow: "0 18px 50px rgba(15,23,42,0.18)",
                            p: 0,
                            overflow: "hidden",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            minWidth: 520,
                            background: "#fff",
                        }}
                    >
                        {/* Left Column */}
                        <Box sx={{ width: 320, p: 2, borderRight: "1px solid #eef0f6" }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    color: "#1f2a56",
                                    mb: 1,
                                }}
                            >
                                Medical Products
                            </Typography>
                            {productMenu?.map((p) => (
                                <MenuItem
                                    key={p.label}
                                    component={p.children ? "div" : Link}
                                    href={p.children ? undefined : p.route}
                                    onClick={!p.children ? handleCloseProducts : undefined}
                                    sx={{
                                        py: 1.3,
                                        fontWeight: 500,
                                        color: "#1f2a56",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        "&:hover": { bgcolor: "#f5f7ff" },
                                    }}
                                >
                                    {p.label}

                                </MenuItem>
                            ))}
                        </Box>

                        {/* Right Column (BluHealth submenu always visible like screenshot) */}
                        <Box sx={{ width: 320, p: 2 }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    color: "#1f2a56",
                                    mb: 1,
                                }}
                            >
                                Medical Softwares
                            </Typography>

                            {productMenu[2].children?.map((c) => (
                                <MenuItem
                                    key={c.label}
                                    component={Link}
                                    href={c.route}
                                    onClick={handleCloseProducts}
                                    sx={{
                                        borderRadius: 2,
                                        py: 1.3,
                                        "&:hover": { bgcolor: "#f5f7ff" },
                                    }}
                                >
                                    {c.label}
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>
                </Menu>
            </AppBar>

            {/* ================= MOBILE DRAWER ================= */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: "100%",
                        maxWidth: 420,
                        p: 2.5,
                    },
                }}
            >
                {/* Drawer Header */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            flexShrink: 0,
                        }}
                        onClick={() => handleNavigate("/")}
                    ><Image
                            src="/vitals-chair-enquiry/logo.png"
                            alt="BluAI"
                            width={118}
                            height={118}
                            priority
                            style={{ width: "auto", height: "auto", maxHeight: 78 }}
                        />
                    </Box>

                    <IconButton onClick={() => setMobileOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 2 }} />



                <Divider sx={{ my: 2.5 }} />

                {/* CTA Buttons (Mobile) */}
                <Stack spacing={1.5}>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<BusinessCenterOutlinedIcon />}
                        sx={{
                            textTransform: "none",
                            fontWeight: 700,
                            bgcolor: "#2f46ff",
                            borderRadius: 999,
                            py: 1.2,
                            boxShadow: "none",
                            "&:hover": { bgcolor: "#2237e8" },
                        }}
                        component={Link}
                        target="_blank"

                        href="https://forms.gle/z9AF8p1yY7wBSQBHA"
                        onClick={() => setMobileOpen(false)}
                    >
                        Distributor Enquiry Form
                    </Button>
                </Stack>
            </Drawer>
        </>
    );
}
