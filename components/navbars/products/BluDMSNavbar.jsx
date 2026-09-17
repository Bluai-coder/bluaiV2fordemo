"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { productMenu } from "../../productMenu"
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
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Divider,
    Stack,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RequestDemoModal from '../../../components/popups/RequestDemoModal'
import Image from "next/image";

export default function BluDMSNavbar() {
    const pathname = usePathname();

    const [productsAnchor, setProductsAnchor] = React.useState(null);
    const productsOpen = Boolean(productsAnchor);

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
    const [mobileBluHealthOpen, setMobileBluHealthOpen] = React.useState(false);
    const [openDemo, setOpenDemo] = React.useState(false);

    const handleOpenProducts = (e) => setProductsAnchor(e.currentTarget);
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
                                src="/logos/BluDms-logo.png"
                                alt="BluAccess"
                                width={95}
                                height={95}
                                priority
                                style={{ width: "auto", height: "auto", maxHeight: 58 }}
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

                            <Button
                                onClick={handleOpenProducts}
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: 600,
                                    color: productsOpen ? "#1b4dff" : "#1f2a56",
                                }}
                            >
                                Our Products
                            </Button>
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
                                startIcon={<ChatBubbleOutlineIcon />}
                                onClick={() => setOpenDemo(true)}
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
                            >
                                Request Demo
                            </Button>

                            <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />


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
                                Medical Devices
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

                            {productMenu[3]?.children?.map((c) => (
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
                    >
                        <Image
                            src="/logos/BluDms-logo.png"
                            alt="BluAccess"
                            width={95}
                            height={95}
                            priority
                            style={{ width: "auto", height: "auto", maxHeight: 58 }}
                        />
                    </Box>

                    <IconButton onClick={() => setMobileOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <List disablePadding>


                    <ListItemButton onClick={() => setMobileProductsOpen((p) => !p)}>
                        <ListItemText primary="Our Products" />
                        <KeyboardArrowDownIcon
                            sx={{
                                transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "0.2s",
                            }}
                        />
                    </ListItemButton>

                    <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
                        <Box sx={{ pl: 2 }}>
                            {/* VitalsChair */}
                            <ListItemButton
                                component={Link}
                                href="/products/vitals-chair"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary="VitalsChair™" />
                            </ListItemButton>

                        

                            {/* NeoNatal */}
                            {/* <ListItemButton
                                component={Link}
                                href="/products/blu-neonatal"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary="NeoNatal™" />
                            </ListItemButton> */}

                            {/* SmartBed */}
                            {/* <ListItemButton
                                component={Link}
                                href="#"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary="SmartBed™ (Upcoming)" />
                            </ListItemButton> */}
                            {/* <ListItemButton
                                component={Link}
                                href="#"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary="SmartPole™ (Upcoming)" />
                            </ListItemButton> */}

                            {/* <ListItemButton
                                component={Link}
                                href="#"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary="BluGlucose™ (Upcoming)" />
                            </ListItemButton> */}

                            {/* <ListItemButton
                                component={Link}
                                href="#"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary="BluECG™ (Wireless ECG)(Upcoming)" />
                            </ListItemButton> */}


                                {/* BluHealth Accordion */}
                            <ListItemButton onClick={() => setMobileBluHealthOpen((p) => !p)}>
                                <ListItemText primary="Medical Softwares" />
                                <KeyboardArrowDownIcon
                                    sx={{
                                        transform: mobileBluHealthOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "0.2s",
                                    }}
                                />
                            </ListItemButton>

                            <Collapse in={mobileBluHealthOpen} timeout="auto" unmountOnExit>
                                <Box sx={{ pl: 2 }}>
                                    {productMenu[3]?.children?.map((c) => (
                                        <ListItemButton
                                            key={c.label}
                                            component={Link}
                                            href={c.route}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            <ListItemText primary={c.label} />
                                        </ListItemButton>
                                    ))}
                                </Box>
                            </Collapse>
                        </Box>
                    </Collapse>
                </List>

                <Divider sx={{ my: 2.5 }} />

                {/* CTA Buttons (Mobile) */}
                <Stack spacing={1.5}>
                    <Button
                        variant="contained"
                        startIcon={<ChatBubbleOutlineIcon />}
                        onClick={() => setOpenDemo(true)}
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
                    >
                        Request Demo
                    </Button>

                    <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

                </Stack>
            </Drawer>
        </>
    );
}
