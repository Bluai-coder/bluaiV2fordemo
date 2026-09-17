"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Button,
  Collapse,
  Typography,
  Divider,
  Drawer,
  useMediaQuery,
  TextField,
  InputAdornment,
  Dialog,
  Slide,
  Autocomplete,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

/* ================= NAV CONFIG ================= */
const pages = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about/" },
  { label: "Blog", route: "/blog/" },
  { label: "Our Products", route: "#", children: true, value: "products" },
  { label: "Investor", route: "/investor/" },
  { label: "Contact", route: "/contact/" },
  { label: "Careers", route: "https://careerportal.bluai.ai/BLU-IXC" },

];

/* ================= PRODUCTS MEGA MENU DATA ================= */
const menuCategories = [
  {
    label: "Medical Devices",
    value: "first",
    items: [
      { label: "VitalsChair™", value: "VitalsChair™", route: "/products/vitals-chair" },
      // { label: "NeoNatal™", value: "NeoNatal", route: "/products/blu-neonatal" },
      { label: "VitalsPole™", value: "VitalsPole™", route: "/products/vitals-pole" },
      { label: "Vitals Briefcase™", value: "VitalsBriefcase™", route: "/products/vitals-briefcase" },
    ],
  },
  {
    label: "Medical Softwares",
    value: "second",
    items: [
      { label: "BluID™", value: "BluID™", route: "/products/blu-id" },
      { label: "BluHealth™", value: "BluHealth", route: "/products/blu-health" },
      { label: "BluNotes™", value: "BluNotes™", route: "/products/blu-notes" },
      { label: "BluDMS™ (AgenticAI enabled)", value: "BIUDMS™", route: "/products/blu-dms" },
      { label: "BluMental Health", value: "BluMental Health", route: "/products/blu-mental-health" },
      { label: "BluAsha™", value: "BluAsha™", route: "/products/blu-asha" },
      { label: "BluMail™", value: "BluMail™", route: "/products/blu-mail" },
      { label: "BluBilling Services", value: "BluBilling", route: "/blubilling" },
      { label: "BluAccess™", value: "BluAccess™", route: "/products/blu-access" },
    ],
  },
];

/* ================= FULLSCREEN SEARCH TRANSITION ================= */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function MainNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width:900px)");

  /* ================= DESKTOP MEGA MENU STATE ================= */
  const [productAnchor, setProductAnchor] = React.useState(null);
  const productsOpen = Boolean(productAnchor);

  /* ================= MOBILE FULLSCREEN MENU STATE ================= */
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);

  /* ================= SEARCH STATE ================= */
  const [openMobileSearch, setOpenMobileSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(""); // text input value
  const [selectedOption, setSelectedOption] = React.useState(null);

  /* ================= SEARCH ROUTES (pages + products) ================= */
  const searchOptions = React.useMemo(() => {
    const pageRoutes = pages
      .filter((p) => p.route && p.route !== "#" && !p.children)
      .map((p) => ({
        label: p.label,
        route: p.route,
        type: "Page",
      }));

    const productRoutes = menuCategories.flatMap((cat) =>
      cat.items
        .filter((i) => i.route && i.route !== "#")
        .map((i) => ({
          label: i.label,
          route: i.route,
          type: "Product",
        }))
    );

    return [...pageRoutes, ...productRoutes];
  }, []);

  /* ===== CLOSE MENUS ON BREAKPOINT CHANGE ===== */
  React.useEffect(() => {
    setProductAnchor(null);
    setMobileDrawerOpen(false);
    setMobileProductsOpen(false);
    setOpenMobileSearch(false);
    setSearchValue("");
    setSelectedOption(null);
  }, [isDesktop]);

  const closeAllMenus = () => {
    setProductAnchor(null);
    setMobileDrawerOpen(false);
    setMobileProductsOpen(false);
    setOpenMobileSearch(false);
  };

  const handleNavigate = (route) => {
    if (!route || route === "#") return;
    router.push(route);
    closeAllMenus();
  };

  const handleSelectSearchRoute = (option) => {
    if (!option?.route || option.route === "#") return;
    router.push(option.route);

    setOpenMobileSearch(false);
    setSearchValue("");
    setSelectedOption(null);

    // close drawer if open
    setMobileDrawerOpen(false);
    setMobileProductsOpen(false);
    setProductAnchor(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 18px rgba(16, 24, 40, 0.08)",
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        zIndex: (theme) => theme.zIndex.drawer + 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 76 },
            gap: 2,
          }}
        >
          {/* ================= LOGO ================= */}
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
              alt="BluAI"
              width={58}
              height={58}
              priority
              style={{ width: "auto", height: "auto", maxHeight: 58 }}
            />
          </Box>

          {/* ================= DESKTOP NAV ================= */}
          {isDesktop ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* CENTER LINKS */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.5,
                  flexWrap: "wrap",
                  mx: "auto",
                }}
              >
                {pages.map((page) => {
                  const isActive = pathname === page.route;

                  // Products dropdown button
                  if (page.children) {
                    return (
                      <Button
                        key={page.value || page.label}
                        onClick={(e) =>
                          setProductAnchor((prev) => (prev ? null : e.currentTarget))
                        }
                        endIcon={productsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          color: "#1f2a56",
                          px: 1.4,
                          borderRadius: 2,
                          "&:hover": {
                            color: "#1b4dff",
                            backgroundColor: "rgba(65, 84, 241, 0.08)",
                          },
                        }}
                      >
                        {page.label}
                      </Button>
                    );
                  }

                  // Normal links
                  return (
                    <Button
                      key={page.label}
                      onClick={() => handleNavigate(page.route)}
                      sx={{
                        textTransform: "none",
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "#1b4dff" : "#1f2a56",
                        px: 1.4,
                        borderRadius: 2,
                        "&:hover": {
                          color: "#1b4dff",
                          backgroundColor: "rgba(65, 84, 241, 0.08)",
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                  );
                })}
              </Box>

              {/*  RIGHT SIDE SEARCH (DESKTOP) */}
              <Box sx={{ minWidth: 320, display: "flex", justifyContent: "flex-end" }}>
                <Autocomplete
                  options={searchOptions}
                  value={selectedOption}
                  inputValue={searchValue}
                  onInputChange={(e, newVal) => setSearchValue(newVal)}
                  onChange={(e, option) => handleSelectSearchRoute(option)}
                  getOptionLabel={(option) => option?.label || ""}
                  isOptionEqualToValue={(opt, val) => opt?.route === val?.route}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        py: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: 400, color: "#5f6268" }}>
                        {option.label}
                      </Typography>

                      {/* <Typography
                        sx={{
                          fontSize: 12,
                          fontWeight: 800,
                          px: 1.2,
                          py: 0.4,
                          borderRadius: 99,
                          bgcolor: "rgba(27,77,255,0.08)",
                          color: "#1b4dff",
                          flexShrink: 0,
                        }}
                      >
                        {option.type}
                      </Typography> */}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search pages, products..."
                      size="small"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "rgba(15,23,42,0.55)" }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 999,
                          bgcolor: "rgba(15,23,42,0.04)",
                          "& fieldset": {
                            borderColor: "rgba(15,23,42,0.10)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(27,77,255,0.35)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1b4dff",
                          },
                        },
                      }}
                    />
                  )}
                  sx={{ width: 320, maxWidth: "26vw" }}
                />
              </Box>
            </Box>
          ) : (
            /*  MOBILE RIGHT SIDE ICONS (Search + Menu Toggle) */
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton onClick={() => setOpenMobileSearch(true)}>
                <SearchIcon />
              </IconButton>

              <IconButton onClick={() => setMobileDrawerOpen((prev) => !prev)}>
                {mobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          )}

          {/* ================= DESKTOP MEGA MENU ================= */}
          {isDesktop && (
            <Menu
              anchorEl={productAnchor}
              open={productsOpen}
              onClose={() => setProductAnchor(null)}
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
                {menuCategories.map((category, index) => (
                  <Box
                    key={category.value}
                    sx={{
                      width: 320, p: 2, borderRight: "1px solid #eef0f6",

                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: "#1f2a56",
                        mb: 1,
                      }}
                    >
                      {category.label}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column",}}>
                      {category.items.map((item) => (
                        <MenuItem
                          key={item.value}
                          onClick={() => handleNavigate(item.route)}
                          sx={{
                            py: 1.3,
                            fontWeight: 500,
                            color: "#1f2a56",
                            display: "flex",
                            justifyContent: "space-between",
                            "&:hover": { bgcolor: "#f5f7ff" },
                          }}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Menu>

          )}

          {/*  MOBILE FULL SCREEN SEARCH POPUP */}
          {!isDesktop && (
            <Dialog
              fullScreen
              open={openMobileSearch}
              onClose={() => setOpenMobileSearch(false)}
              TransitionComponent={Transition}
              PaperProps={{
                sx: {
                  bgcolor: "#ffffff",
                },
              }}
            >
              {/* TOP BAR */}
              <Box
                sx={{
                  height: 70,
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(15,23,42,0.08)",
                }}
              >
                <Typography sx={{ fontWeight: 900, color: "#0f172a" }}>
                  Search
                </Typography>

                <IconButton onClick={() => setOpenMobileSearch(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* SEARCH BODY */}
              <Box sx={{ px: 2, pt: 2 }}>
                <Autocomplete
                  autoFocus
                  openOnFocus
                  options={searchOptions}
                  value={selectedOption}
                  inputValue={searchValue}
                  onInputChange={(e, newVal) => setSearchValue(newVal)}
                  onChange={(e, option) => handleSelectSearchRoute(option)}
                  getOptionLabel={(option) => option?.label || ""}
                  isOptionEqualToValue={(opt, val) => opt?.route === val?.route}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        py: 1.1,
                        px: 1,
                        borderRadius: 2,
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontWeight: 400, color: "#0f172a" }}>
                          {option.label}
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: "rgba(15,23,42,0.60)" }}>
                          {option.route}
                        </Typography>
                      </Box>

                      {/* <Typography
                        sx={{
                          fontSize: 12,
                          fontWeight: 900,
                          px: 1.2,
                          py: 0.4,
                          borderRadius: 99,
                          bgcolor: "rgba(27,77,255,0.08)",
                          color: "#1b4dff",
                          flexShrink: 0,
                        }}
                      >
                        {option.type}
                      </Typography> */}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      autoFocus
                      placeholder="Search pages, products..."
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "rgba(15,23,42,0.55)" }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 999,
                          height: 52,
                          bgcolor: "rgba(15,23,42,0.04)",
                          "& fieldset": {
                            borderColor: "rgba(15,23,42,0.10)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(27,77,255,0.35)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1b4dff",
                          },
                        },
                      }}
                    />
                  )}
                  sx={{
                    width: "100%",
                    "& .MuiAutocomplete-listbox": {
                      mt: 1,
                      pb: 2,
                    },
                  }}
                />

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(15,23,42,0.55)",
                  }}
                >
                  Tip: Start typing to quickly navigate to any page or product.
                </Typography>
              </Box>
            </Dialog>
          )}

          {/* ================= FULL SCREEN MOBILE MENU (DRAWER) ================= */}
          {!isDesktop && (
            <Drawer
              anchor="right"
              open={mobileDrawerOpen}
              onClose={closeAllMenus}
              PaperProps={{
                sx: {
                  width: "100vw",
                  height: "100svh",
                  bgcolor: "#fff",
                },
              }}
            >
              {/* TOP HEADER */}
              <Box
                sx={{
                  height: 70,
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(15,23,42,0.08)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => handleNavigate("/")}
                >
                  <Image src="/logo.png" alt="BluAI" width={48} height={48} priority />
                  <Typography sx={{ fontWeight: 900, color: "#0f172a" }}>
                    BluAI
                  </Typography>
                </Box>

                <IconButton onClick={closeAllMenus}>
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* MENU BODY */}
              <Box
                sx={{
                  flex: 1,
                  height: "calc(100svh - 70px)",
                  overflowY: "auto",
                  px: 2,
                  py: 2,
                }}
              >
                {pages.map((page, index) => {
                  const isActive = pathname === page.route;

                  //  Products dropdown
                  if (page.children) {
                    return (
                      <Box key={page.value || index} sx={{ mb: 1 }}>
                        <Button
                          fullWidth
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                          endIcon={
                            mobileProductsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                          }
                          sx={{
                            justifyContent: "space-between",
                            textTransform: "none",
                            fontWeight: 800,
                            borderRadius: 2,
                            px: 2,
                            py: 1.4,
                            bgcolor: "rgba(65, 84, 241, 0.06)",
                            color: "#0f172a",
                            "&:hover": {
                              bgcolor: "rgba(65, 84, 241, 0.10)",
                            },
                          }}
                        >
                          {page.label}
                        </Button>

                        <Collapse in={mobileProductsOpen} timeout={250} unmountOnExit>
                          <Box sx={{ mt: 1.5, pl: 0.5 }}>
                            {menuCategories.map((category) => (
                              <Box key={category.value} sx={{ mb: 2 }}>
                                <Typography
                                  sx={{
                                    fontSize: 12,
                                    fontWeight: 900,
                                    mb: 1,
                                    color: "#0f172a",
                                    opacity: 0.7,
                                    px: 1.5,
                                  }}
                                >
                                  {category.label}
                                </Typography>

                                {category.items.map((item) => (
                                  <Button
                                    key={item.value}
                                    fullWidth
                                    onClick={() => handleNavigate(item.route)}
                                    sx={{
                                      justifyContent: "flex-start",
                                      textTransform: "none",
                                      fontSize: 14,
                                      fontWeight: 700,
                                      borderRadius: 2,
                                      px: 2,
                                      py: 1.2,
                                      color: "#0f172a",
                                      mb: 0.6,
                                      "&:hover": {
                                        bgcolor: "rgba(65, 84, 241, 0.08)",
                                        color: "#1b4dff",
                                      },
                                    }}
                                  >
                                    {item.label}
                                  </Button>
                                ))}
                              </Box>
                            ))}
                          </Box>
                        </Collapse>

                        <Divider sx={{ my: 1.3, opacity: 0.5 }} />
                      </Box>
                    );
                  }

                  //  Normal page link
                  return (
                    <Button
                      key={page.label}
                      fullWidth
                      onClick={() => handleNavigate(page.route)}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontSize: 15,
                        fontWeight: isActive ? 900 : 700,
                        borderRadius: 2,
                        px: 2,
                        py: 1.4,
                        mb: 1,
                        color: isActive ? "#1b4dff" : "#0f172a",
                        bgcolor: isActive
                          ? "rgba(65, 84, 241, 0.10)"
                          : "transparent",
                        "&:hover": {
                          bgcolor: "rgba(65, 84, 241, 0.08)",
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                  );
                })}
              </Box>
            </Drawer>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}















// "use client";

// import * as React from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Menu,
//   MenuItem,
//   Container,
//   Button,
//   Collapse,
//   Typography,
//   Divider,
//   Drawer,
//   useMediaQuery,
//   TextField,
//   InputAdornment,
//   Dialog,
//   Slide,
//   Autocomplete,
//   Fade,
//   Tab,
//   Tabs,
//   Chip,
//   Card,
//   CardMedia,
//   CardContent,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import SearchIcon from "@mui/icons-material/Search";
// import CheckIcon from "@mui/icons-material/Check";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import AppsIcon from "@mui/icons-material/Apps";

// import { useRouter, usePathname } from "next/navigation";
// import Image from "next/image";

// /* ================= PRODUCT DATA ================= */
// const products = [
//   {
//     id: 1,
//     icon: "/logos/white/BluVital-logo.png",
//     title: "VitalsChair™",
//     image: "/hero-popup/chair.png",
//     category: "Clinical Solutions",
//     type: "product",
//     description: `Introducing <strong> VitalsChair™ </strong>, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with <strong>precision </strong>, powered by <strong>AI</strong>, and seamlessly <strong>integrated </strong> with the BluHealth™ Portal, VitalsChair™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.`,
//     slug: "products/vitals-chair",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#89f7fe",
//   },
//   {
//     id: 9,
//     icon: "/logos/white/pole.png",
//     title: "VitalsPole™",
//     image: "/hero-popup/pole.png",
//     category: "Clinical Solutions",
//     type: "product",
//     description: `Smart patient monitoring pole, multi-vital health tracking`,
//     slug: "products/vitals-pole",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#aace46",
//   },
//   {
//     id: 10,
//     icon: "/logos/white/neonatal.png",
//     title: "BluNeonatal™",
//     image: "/hero-popup/child.png",
//     category: "Clinical Solutions",
//     type: "product",
//     description: `BluNeonatal represents the next generation of neonatal intensive care monitoring. Combining advanced medical-grade sensors, precision imaging, and AI-powered analytics, BluNeonatal™ delivers autonomous, continuous monitoring of premature and critically ill newborns.`,
//     slug: "products/blu-neonatal",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#daa351",
//   },
//   {
//     id: 11,
//     icon: "/logos/white/briefcase.png",
//     title: "VitalsBriefcase™",
//     image: "/hero-popup/box.png",
//     category: "Clinical Solutions",
//     type: "product",
//     description: `Smart patient monitoring Briefcase for instant, multi-vital health tracking`,
//     slug: "products/vitals-briefcase",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#bb78e2",
//   },
//   {
//     id: 3,
//     icon: "/logos/white/BluAccess-logo.png",
//     image: "/hero-popup/face.png",
//     title: "BluAccess™",
//     category: "Access & Security",
//     type: "software",
//     description: `BluAccess™ delivers unparalleled operational intelligence through its comprehensive suite of features, including customizable access zones, multi-factor authentication protocols, and dynamic permissions management.`,
//     slug: "products/blu-access",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#4facfe",
//   },
//   {
//     id: 8,
//     icon: "/logos/white/BluAsha-logo.png",
//     title: "BluASHA™",
//     image: "/blu-asha/hero-asha-2.png",
//     category: "AI Clinical Documentation",
//     type: "software",
//     description: `ASHA workers spend 40% of their time on manual record-keeping and reporting, reducing time available for actual healthcare delivery. Critical health data gets lost, delayed, or becomes illegible.`,
//     slug: "products/blu-asha",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#667eea",
//   },
//   {
//     id: 2,
//     icon: "/logos/white/BluNotes-logo.png",
//     title: "BluNotes™",
//     image: "/hero-popup/blunotes.png",
//     category: "Community Health",
//     type: "software",
//     description: `BluNotes is an innovative medical conversation capture and documentation system that seamlessly connects mobile devices and computers to transform patient-provider conversations into structured medical documentation.`,
//     slug: "products/blu-notes",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#f093fb",
//   },
//   {
//     id: 4,
//     icon: "/logos/white/BluHealth-logo.png",
//     title: "BluHealth™",
//     image: "/hero-popup/bluhealth.png",
//     category: "Digital Health Platform",
//     type: "software",
//     description: `The BluHealth™ Portal represents a paradigm shift in clinical informatics—transcending traditional electronic medical record systems through sophisticated integration of artificial intelligence and patient-centric architecture.`,
//     slug: "products/blu-health",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#43e97b",
//   },
//   {
//     id: 5,
//     icon: "/logos/white/BluId-logo.png",
//     title: "BluID™",
//     image: "/hero-popup/bluid.png",
//     category: "Digital Identity",
//     type: "software",
//     description: `BluID™ is a revolutionary 14-digit unique bio-medical identifier that transforms healthcare management by centralizing your complete medical profile in one secure digital location.`,
//     slug: "products/blu-id",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#fa709a",
//   },
//   {
//     id: 6,
//     icon: "/logos/white/BluMental-logo.png",
//     title: "BluMental™",
//     image: "/hero-popup/blumental.png",
//     category: "Mental Wellness",
//     type: "software",
//     description: `The BluHealth Mental Health module delivers real-time, AI-driven assessments that help clinicians evaluate, interpret, and act on patient mental health data with confidence.`,
//     slug: "products/blu-mental-health",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#a18cd1",
//   },
//   {
//     id: 7,
//     icon: "/logos/white/BluDms-logo.png",
//     title: "BluDMS™",
//     image: "/hero-popup/bludms.png",
//     category: "Secure Communication",
//     type: "software",
//     description: `BluDMS™ represents the pinnacle of clinical document architecture innovation—a sophisticated medical document ecosystem that transcends traditional information management paradigms.`,
//     slug: "products/blu-dms",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#fccb90",
//   },
// ];

// /* ================= NAV CONFIG ================= */
// const pages = [
//   { label: "Home", route: "/" },
//   { label: "About", route: "/about/" },
//   { label: "Blog", route: "/blog/" },
//   { label: "Our Products", route: "#", children: true, value: "products" },
//   { label: "Investor", route: "/investor/" },
//   { label: "Contact", route: "/contact/" },
//   { label: "Careers", route: "https://careerportal.bluai.ai/BLU-IXC" },
// ];

// /* ================= 3 TABS ================= */
// const tabs = [
//   {
//     label: "All",
//     value: "all",
//     icon: <AppsIcon sx={{ fontSize: 18 }} />,
//   },
//   {
//     label: "Products",
//     value: "product",
//     icon: <MedicalServicesIcon sx={{ fontSize: 18 }} />,
//   },
//   {
//     label: "Software",
//     value: "software",
//     icon: <SmartToyIcon sx={{ fontSize: 18 }} />,
//   },
// ];

// /* ================= FULLSCREEN SEARCH TRANSITION ================= */
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// export default function MainNavBar() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const isDesktop = useMediaQuery("(min-width:900px)");

//   /* ================= DESKTOP MEGA MENU STATE ================= */
//   const [productAnchor, setProductAnchor] = React.useState(null);
//   const productsOpen = Boolean(productAnchor);
//   const [hoveredItem, setHoveredItem] = React.useState(null);
//   const [activeTab, setActiveTab] = React.useState("all");

//   /* ================= MOBILE FULLSCREEN MENU STATE ================= */
//   const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);

//   /* ================= SEARCH STATE ================= */
//   const [openMobileSearch, setOpenMobileSearch] = React.useState(false);
//   const [searchValue, setSearchValue] = React.useState("");
//   const [selectedOption, setSelectedOption] = React.useState(null);

//   /* ================= SEARCH ROUTES ================= */
//   const searchOptions = React.useMemo(() => {
//     const pageRoutes = pages
//       .filter((p) => p.route && p.route !== "#" && !p.children)
//       .map((p) => ({
//         label: p.label,
//         route: p.route,
//         type: "Page",
//       }));

//     const productRoutes = products.map((p) => ({
//       label: p.title,
//       route: p.slug,
//       type: p.type === "product" ? "Product" : "Software",
//       category: p.category,
//       image: p.image,
//     }));

//     return [...pageRoutes, ...productRoutes];
//   }, []);

//   /* ===== CLOSE MENUS ON BREAKPOINT CHANGE ===== */
//   React.useEffect(() => {
//     setProductAnchor(null);
//     setMobileDrawerOpen(false);
//     setMobileProductsOpen(false);
//     setOpenMobileSearch(false);
//     setSearchValue("");
//     setSelectedOption(null);
//   }, [isDesktop]);

//   const closeAllMenus = () => {
//     setProductAnchor(null);
//     setMobileDrawerOpen(false);
//     setMobileProductsOpen(false);
//     setOpenMobileSearch(false);
//   };

//   const handleNavigate = (route) => {
//     if (!route || route === "#") return;
//     router.push(route);
//     closeAllMenus();
//   };

//   const handleSelectSearchRoute = (option) => {
//     if (!option?.route || option.route === "#") return;
//     router.push(option.route);
//     setOpenMobileSearch(false);
//     setSearchValue("");
//     setSelectedOption(null);
//     setMobileDrawerOpen(false);
//     setMobileProductsOpen(false);
//     setProductAnchor(null);
//   };

//   // Get filtered products based on active tab
//   const getFilteredProducts = () => {
//     if (activeTab === "all") return products;
//     return products.filter((p) => p.type === activeTab);
//   };

//   // Get products by type for category grouping
//   const getProductsByType = (type) => {
//     return products.filter((p) => p.type === type);
//   };

//   // Product Card Component
//   const ProductCard = ({ product, type }) => {
//     const isProduct = type === "product" || product.type === "product";
//     const accentColor = isProduct ? "#1b4dff" : "#ff6b6b";
//     const hoverBg = isProduct ? "rgba(65,84,241,0.06)" : "rgba(255,107,107,0.06)";
//     const borderColor = isProduct ? "rgba(27,77,255,0.12)" : "rgba(255,107,107,0.12)";

//     return (
//       <Box
//         onClick={() => handleNavigate(`/${product.slug}`)}
//         onMouseEnter={() => setHoveredItem(product.id)}
//         onMouseLeave={() => setHoveredItem(null)}
//         sx={{
//           borderRadius: 3,
//           overflow: "hidden",
//           cursor: "pointer",
//           transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//           border: "1px solid rgba(15,23,42,0.06)",
//           bgcolor: "#ffffff",
//           position: "relative",
//           "&:hover": {
//             transform: "translateY(-6px)",
//             boxShadow: `0 12px 40px ${isProduct ? "rgba(27,77,255,0.12)" : "rgba(255,107,107,0.12)"}`,
//             borderColor: borderColor,
//           },
//         }}
//       >
//         {/* Image Container */}
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             height: 140,
//             bgcolor: isProduct ? "rgba(27,77,255,0.04)" : "rgba(255,107,107,0.04)",
//             overflow: "hidden",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Image
//             src={product.image}
//             alt={product.title}
//             fill
//             style={{
//               objectFit: "contain",
//               padding: 16,
//               transition: "transform 0.4s ease",
//             }}
//             className="product-image"
//           />
//           {/* Gradient Overlay on Hover */}
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               background: `linear-gradient(to top, ${isProduct ? "rgba(27,77,255,0.08)" : "rgba(255,107,107,0.08)"}, transparent)`,
//               opacity: 0,
//               transition: "opacity 0.3s ease",
//               "&:hover": { opacity: 1 },
//             }}
//           />
//           {/* Type Badge */}
//           <Chip
//             label={isProduct ? "Product" : "Software"}
//             size="small"
//             sx={{
//               position: "absolute",
//               top: 10,
//               right: 10,
//               fontSize: 9,
//               fontWeight: 700,
//               height: 20,
//               bgcolor: isProduct ? "rgba(27,77,255,0.9)" : "rgba(255,107,107,0.9)",
//               color: "#fff",
//               backdropFilter: "blur(10px)",
//               "& .MuiChip-label": { px: 1.2 },
//             }}
//           />
//         </Box>

//         {/* Content */}
//         <Box sx={{ p: 2 }}>
//           <Typography
//             sx={{
//               fontWeight: 700,
//               fontSize: 15,
//               color: "#1f2a56",
//               mb: 0.5,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             {product.title}
//             {hoveredItem === product.id && (
//               <CheckIcon
//                 sx={{
//                   fontSize: 18,
//                   color: accentColor,
//                   animation: "fadeIn 0.2s ease",
//                 }}
//               />
//             )}
//           </Typography>
//           <Chip
//             label={product.category}
//             size="small"
//             sx={{
//               fontSize: 9,
//               fontWeight: 600,
//               height: 20,
//               bgcolor: "rgba(15,23,42,0.06)",
//               color: "#5f6268",
//               "& .MuiChip-label": { px: 1.2 },
//             }}
//           />
//         </Box>

//         {/* Hover Border Glow */}
//         <Box
//           sx={{
//             position: "absolute",
//             inset: -1,
//             borderRadius: 3,
//             border: `2px solid ${accentColor}`,
//             opacity: 0,
//             transition: "opacity 0.3s ease",
//             pointerEvents: "none",
//             "&:hover": { opacity: 0.15 },
//           }}
//         />
//       </Box>
//     );
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: "rgba(255, 255, 255, 0.92)",
//         backdropFilter: "blur(20px)",
//         boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)",
//         borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
//         zIndex: (theme) => theme.zIndex.drawer + 10,
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{
//             minHeight: { xs: 64, md: 76 },
//             px: { xs: 1, sm: 2 },
//             gap: 2,
//           }}
//         >
//           {/* ================= LOGO ================= */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               cursor: "pointer",
//               flexShrink: 0,
//               transition: "transform 0.2s ease",
//               "&:hover": { transform: "scale(1.02)" },
//             }}
//             onClick={() => handleNavigate("/")}
//           >
//             <Image
//               src="/logo.png"
//               alt="BluAI"
//               width={58}
//               height={58}
//               priority
//               style={{ width: "auto", height: "auto", maxHeight: 58 }}
//             />
//           </Box>

//           {/* ================= DESKTOP NAV ================= */}
//           {isDesktop ? (
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 width: "100%",
//                 justifyContent: "space-between",
//                 gap: 2,
//               }}
//             >
//               {/* CENTER LINKS */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: 0.5,
//                   flexWrap: "wrap",
//                   mx: "auto",
//                 }}
//               >
//                 {pages.map((page) => {
//                   const isActive = pathname === page.route;

//                   if (page.children) {
//                     return (
//                       <Button
//                         key={page.value || page.label}
//                         onClick={(e) =>
//                           setProductAnchor((prev) => (prev ? null : e.currentTarget))
//                         }
//                         endIcon={
//                           productsOpen ? (
//                             <KeyboardArrowUpIcon sx={{ transition: "transform 0.3s" }} />
//                           ) : (
//                             <KeyboardArrowDownIcon sx={{ transition: "transform 0.3s" }} />
//                           )
//                         }
//                         sx={{
//                           textTransform: "none",
//                           fontWeight: productsOpen ? 700 : 600,
//                           color: productsOpen ? "#1b4dff" : "#1f2a56",
//                           px: 1.8,
//                           py: 1,
//                           borderRadius: 3,
//                           position: "relative",
//                           "&::after": {
//                             content: '""',
//                             position: "absolute",
//                             bottom: 4,
//                             left: "50%",
//                             transform: productsOpen
//                               ? "translateX(-50%) scaleX(1)"
//                               : "translateX(-50%) scaleX(0)",
//                             width: "60%",
//                             height: 3,
//                             borderRadius: 3,
//                             backgroundColor: "#1b4dff",
//                             transition: "transform 0.3s ease",
//                           },
//                           "&:hover": {
//                             color: "#1b4dff",
//                             backgroundColor: "rgba(65, 84, 241, 0.06)",
//                           },
//                         }}
//                       >
//                         {page.label}
//                       </Button>
//                     );
//                   }

//                   return (
//                     <Button
//                       key={page.label}
//                       onClick={() => handleNavigate(page.route)}
//                       sx={{
//                         textTransform: "none",
//                         fontWeight: isActive ? 700 : 600,
//                         color: isActive ? "#1b4dff" : "#1f2a56",
//                         px: 1.8,
//                         py: 1,
//                         borderRadius: 3,
//                         position: "relative",
//                         "&::after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: 4,
//                           left: "50%",
//                           transform: isActive
//                             ? "translateX(-50%) scaleX(1)"
//                             : "translateX(-50%) scaleX(0)",
//                           width: "60%",
//                           height: 3,
//                           borderRadius: 3,
//                           backgroundColor: "#1b4dff",
//                           transition: "transform 0.3s ease",
//                         },
//                         "&:hover": {
//                           color: "#1b4dff",
//                           backgroundColor: "rgba(65, 84, 241, 0.06)",
//                         },
//                       }}
//                     >
//                       {page.label}
//                     </Button>
//                   );
//                 })}
//               </Box>

//               {/* RIGHT SIDE SEARCH */}
//               <Box sx={{ minWidth: 280, display: "flex", justifyContent: "flex-end" }}>
//                 <Autocomplete
//                   options={searchOptions}
//                   value={selectedOption}
//                   inputValue={searchValue}
//                   onInputChange={(e, newVal) => setSearchValue(newVal)}
//                   onChange={(e, option) => handleSelectSearchRoute(option)}
//                   getOptionLabel={(option) => option?.label || ""}
//                   isOptionEqualToValue={(opt, val) => opt?.route === val?.route}
//                   renderOption={(props, option) => (
//                     <Box
//                       component="li"
//                       {...props}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 2,
//                         py: 1.2,
//                         px: 2,
//                         borderRadius: 2,
//                         "&:hover": {
//                           backgroundColor: "rgba(65, 84, 241, 0.06)",
//                         },
//                       }}
//                     >
//                       {option.image && (
//                         <Box
//                           sx={{
//                             width: 40,
//                             height: 40,
//                             borderRadius: 2,
//                             bgcolor: "rgba(15,23,42,0.04)",
//                             position: "relative",
//                             flexShrink: 0,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <Image
//                             src={option.image}
//                             alt={option.label}
//                             fill
//                             style={{ objectFit: "contain", padding: 4 }}
//                           />
//                         </Box>
//                       )}
//                       <Box sx={{ flex: 1 }}>
//                         <Typography sx={{ fontWeight: 500, color: "#1f2a56" }}>
//                           {option.label}
//                         </Typography>
//                         {option.category && (
//                           <Typography sx={{ fontSize: 11, color: "#5f6268" }}>
//                             {option.category}
//                           </Typography>
//                         )}
//                       </Box>
//                       <Chip
//                         label={option.type}
//                         size="small"
//                         sx={{
//                           fontSize: 10,
//                           fontWeight: 700,
//                           bgcolor: option.type === "Product"
//                             ? "rgba(27,77,255,0.08)"
//                             : option.type === "Software"
//                               ? "rgba(255,107,107,0.08)"
//                               : "rgba(15,23,42,0.08)",
//                           color: option.type === "Product" ? "#1b4dff" :
//                             option.type === "Software" ? "#ff6b6b" : "#5f6268",
//                           height: 20,
//                           "& .MuiChip-label": { px: 1.2 },
//                         }}
//                       />
//                     </Box>
//                   )}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       placeholder="Search..."
//                       size="small"
//                       InputProps={{
//                         ...params.InputProps,
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <SearchIcon sx={{ color: "rgba(15,23,42,0.4)" }} />
//                           </InputAdornment>
//                         ),
//                       }}
//                       sx={{
//                         "& .MuiOutlinedInput-root": {
//                           borderRadius: 999,
//                           bgcolor: "rgba(15,23,42,0.03)",
//                           transition: "all 0.2s ease",
//                           "& fieldset": {
//                             borderColor: "rgba(15,23,42,0.08)",
//                             borderWidth: 1.5,
//                           },
//                           "&:hover fieldset": {
//                             borderColor: "rgba(27,77,255,0.3)",
//                             backgroundColor: "rgba(15,23,42,0.02)",
//                           },
//                           "&.Mui-focused fieldset": {
//                             borderColor: "#1b4dff",
//                             borderWidth: 2,
//                             boxShadow: "0 0 0 4px rgba(27,77,255,0.08)",
//                           },
//                         },
//                       }}
//                     />
//                   )}
//                   sx={{ width: 280 }}
//                 />
//               </Box>
//             </Box>
//           ) : (
//             /* MOBILE RIGHT SIDE ICONS */
//             <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 0.5 }}>
//               <IconButton
//                 onClick={() => setOpenMobileSearch(true)}
//                 sx={{
//                   transition: "all 0.2s",
//                   "&:hover": { backgroundColor: "rgba(65, 84, 241, 0.08)" },
//                 }}
//               >
//                 <SearchIcon />
//               </IconButton>

//               <IconButton
//                 onClick={() => setMobileDrawerOpen((prev) => !prev)}
//                 sx={{
//                   transition: "all 0.2s",
//                   "&:hover": { backgroundColor: "rgba(65, 84, 241, 0.08)" },
//                 }}
//               >
//                 {mobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
//               </IconButton>
//             </Box>
//           )}

//           {/* ================= DESKTOP MEGA MENU WITH 3 TABS & IMAGES ================= */}
//           {isDesktop && (
//             <Menu
//               anchorEl={productAnchor}
//               open={productsOpen}
//               onClose={() => setProductAnchor(null)}
//               anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//               transformOrigin={{ vertical: "top", horizontal: "center" }}
//               TransitionComponent={Fade}
//               transitionDuration={200}
//               PaperProps={{
//                 sx: {
//                   mt: 1.5,
//                   borderRadius: 4,
//                   boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.04)",
//                   p: 0,
//                   overflow: "hidden",
//                   backdropFilter: "blur(20px)",
//                   backgroundColor: "rgba(255,255,255,0.98)",
//                   border: "1px solid rgba(255,255,255,0.5)",
//                   maxWidth: "95vw",
//                   width: 1100,
//                   maxHeight: "85vh",
//                 },
//               }}
//             >
//               <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
//                 {/* 3 TABS HEADER */}
//                 <Box
//                   sx={{
//                     borderBottom: "1px solid rgba(15,23,42,0.06)",
//                     px: 3,
//                     pt: 2,
//                     pb: 0,
//                   }}
//                 >
//                   <Tabs
//                     value={activeTab}
//                     onChange={(e, newValue) => setActiveTab(newValue)}
//                     sx={{
//                       minHeight: 52,
//                       "& .MuiTab-root": {
//                         textTransform: "none",
//                         fontWeight: 600,
//                         fontSize: 15,
//                         color: "#5f6268",
//                         minHeight: 44,
//                         py: 1,
//                         px: 3,
//                         borderRadius: 2,
//                         "&.Mui-selected": {
//                           color: "#1b4dff",
//                           fontWeight: 700,
//                         },
//                         "&:hover": {
//                           backgroundColor: "rgba(65,84,241,0.06)",
//                         },
//                       },
//                       "& .MuiTabs-indicator": {
//                         backgroundColor: "#1b4dff",
//                         height: 3,
//                         borderRadius: 3,
//                       },
//                     }}
//                   >
//                     {tabs.map((tab) => (
//                       <Tab
//                         key={tab.value}
//                         label={
//                           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                             {tab.icon}
//                             <span>{tab.label}</span>
//                             {tab.value !== "all" && (
//                               <Chip
//                                 label={getProductsByType(tab.value).length}
//                                 size="small"
//                                 sx={{
//                                   fontSize: 10,
//                                   height: 18,
//                                   minWidth: 18,
//                                   bgcolor: activeTab === tab.value
//                                     ? "rgba(27,77,255,0.12)"
//                                     : "rgba(15,23,42,0.06)",
//                                   color: activeTab === tab.value ? "#1b4dff" : "#5f6268",
//                                   "& .MuiChip-label": { px: 0.8 },
//                                 }}
//                               />
//                             )}
//                           </Box>
//                         }
//                         value={tab.value}
//                       />
//                     ))}
//                   </Tabs>
//                 </Box>

//                 {/* PRODUCTS GRID WITH IMAGES */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     overflowY: "auto",
//                     maxHeight: 460,
//                     "&::-webkit-scrollbar": {
//                       width: 4,
//                     },
//                     "&::-webkit-scrollbar-thumb": {
//                       backgroundColor: "rgba(15,23,42,0.15)",
//                       borderRadius: 4,
//                     },
//                   }}
//                 >
//                   {activeTab === "all" ? (
//                     // Show grouped by type when "All" is selected
//                     <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                       {/* Products Group */}
//                       <Box>
//                         <Typography
//                           sx={{
//                             fontSize: 14,
//                             fontWeight: 700,
//                             color: "#1b4dff",
//                             mb: 2,
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 1,
//                             textTransform: "uppercase",
//                             letterSpacing: 0.5,
//                           }}
//                         >
//                           <MedicalServicesIcon sx={{ fontSize: 20 }} />
//                           Products ({getProductsByType("product").length})
//                         </Typography>
//                         <Box
//                           sx={{
//                             display: "grid",
//                             gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//                             gap: 2,
//                           }}
//                         >
//                           {getProductsByType("product").map((product) => (
//                             <ProductCard key={product.id} product={product} type="product" />
//                           ))}
//                         </Box>
//                       </Box>

//                       {/* Software Group */}
//                       <Box>
//                         <Typography
//                           sx={{
//                             fontSize: 14,
//                             fontWeight: 700,
//                             color: "#ff6b6b",
//                             mb: 2,
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 1,
//                             textTransform: "uppercase",
//                             letterSpacing: 0.5,
//                           }}
//                         >
//                           <SmartToyIcon sx={{ fontSize: 20 }} />
//                           Software ({getProductsByType("software").length})
//                         </Typography>
//                         <Box
//                           sx={{
//                             display: "grid",
//                             gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//                             gap: 2,
//                           }}
//                         >
//                           {getProductsByType("software").map((product) => (
//                             <ProductCard key={product.id} product={product} type="software" />
//                           ))}
//                         </Box>
//                       </Box>
//                     </Box>
//                   ) : (
//                     // Show flat grid when "Products" or "Software" tab is selected
//                     <Box
//                       sx={{
//                         display: "grid",
//                         gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//                         gap: 2,
//                       }}
//                     >
//                       {getFilteredProducts().map((product) => (
//                         <ProductCard key={product.id} product={product} type={activeTab} />
//                       ))}
//                     </Box>
//                   )}

//                   {getFilteredProducts().length === 0 && activeTab !== "all" && (
//                     <Box
//                       sx={{
//                         py: 6,
//                         textAlign: "center",
//                         color: "#5f6268",
//                       }}
//                     >
//                       <Typography>No {activeTab === "product" ? "products" : "software"} found</Typography>
//                     </Box>
//                   )}
//                 </Box>

//                 {/* FOOTER ACTION */}
//                 <Box
//                   sx={{
//                     borderTop: "1px solid rgba(15,23,42,0.06)",
//                     px: 3,
//                     py: 1.5,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography sx={{ fontSize: 12, color: "#5f6268" }}>
//                     {products.length} total products
//                   </Typography>
//                   <Button
//                     variant="text"
//                     onClick={() => handleNavigate("/products")}
//                     sx={{
//                       textTransform: "none",
//                       fontWeight: 600,
//                       color: "#1b4dff",
//                       "&:hover": {
//                         backgroundColor: "rgba(65,84,241,0.06)",
//                       },
//                     }}
//                   >
//                     View All Products →
//                   </Button>
//                 </Box>
//               </Box>
//             </Menu>
//           )}

//           {/* ================= MOBILE SEARCH ================= */}
//           {!isDesktop && (
//             <Dialog
//               fullScreen
//               open={openMobileSearch}
//               onClose={() => setOpenMobileSearch(false)}
//               TransitionComponent={Transition}
//               PaperProps={{
//                 sx: {
//                   bgcolor: "#ffffff",
//                   backgroundImage: "radial-gradient(circle at 20% 30%, rgba(65,84,241,0.03) 0%, transparent 70%)",
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   height: 70,
//                   px: 2,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   borderBottom: "1px solid rgba(15,23,42,0.06)",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: 20 }}>
//                   Search
//                 </Typography>
//                 <IconButton
//                   onClick={() => setOpenMobileSearch(false)}
//                   sx={{
//                     transition: "all 0.2s",
//                     "&:hover": { backgroundColor: "rgba(65, 84, 241, 0.08)" },
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </Box>

//               <Box sx={{ px: 2, pt: 3 }}>
//                 <Autocomplete
//                   autoFocus
//                   openOnFocus
//                   options={searchOptions}
//                   value={selectedOption}
//                   inputValue={searchValue}
//                   onInputChange={(e, newVal) => setSearchValue(newVal)}
//                   onChange={(e, option) => handleSelectSearchRoute(option)}
//                   getOptionLabel={(option) => option?.label || ""}
//                   isOptionEqualToValue={(opt, val) => opt?.route === val?.route}
//                   renderOption={(props, option) => (
//                     <Box
//                       component="li"
//                       {...props}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 2,
//                         py: 1.5,
//                         px: 2,
//                         borderRadius: 2,
//                         "&:hover": {
//                           backgroundColor: "rgba(65, 84, 241, 0.06)",
//                         },
//                       }}
//                     >
//                       {option.image && (
//                         <Box
//                           sx={{
//                             width: 48,
//                             height: 48,
//                             borderRadius: 2,
//                             bgcolor: "rgba(15,23,42,0.04)",
//                             position: "relative",
//                             flexShrink: 0,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <Image
//                             src={option.image}
//                             alt={option.label}
//                             fill
//                             style={{ objectFit: "contain", padding: 6 }}
//                           />
//                         </Box>
//                       )}
//                       <Box sx={{ flex: 1 }}>
//                         <Typography sx={{ fontWeight: 500, color: "#0f172a" }}>
//                           {option.label}
//                         </Typography>
//                         <Typography sx={{ fontSize: 12, color: "rgba(15,23,42,0.5)" }}>
//                           {option.route}
//                         </Typography>
//                       </Box>
//                       <Chip
//                         label={option.type}
//                         size="small"
//                         sx={{
//                           fontSize: 10,
//                           fontWeight: 700,
//                           bgcolor: option.type === "Product"
//                             ? "rgba(27,77,255,0.08)"
//                             : option.type === "Software"
//                               ? "rgba(255,107,107,0.08)"
//                               : "rgba(15,23,42,0.08)",
//                           color: option.type === "Product" ? "#1b4dff" :
//                             option.type === "Software" ? "#ff6b6b" : "#5f6268",
//                           height: 20,
//                           "& .MuiChip-label": { px: 1.2 },
//                         }}
//                       />
//                     </Box>
//                   )}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       autoFocus
//                       placeholder="Search pages, products..."
//                       InputProps={{
//                         ...params.InputProps,
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <SearchIcon sx={{ color: "rgba(15,23,42,0.4)" }} />
//                           </InputAdornment>
//                         ),
//                       }}
//                       sx={{
//                         "& .MuiOutlinedInput-root": {
//                           borderRadius: 999,
//                           height: 56,
//                           bgcolor: "rgba(15,23,42,0.03)",
//                           transition: "all 0.2s ease",
//                           "& fieldset": {
//                             borderColor: "rgba(15,23,42,0.08)",
//                             borderWidth: 1.5,
//                           },
//                           "&:hover fieldset": {
//                             borderColor: "rgba(27,77,255,0.3)",
//                           },
//                           "&.Mui-focused fieldset": {
//                             borderColor: "#1b4dff",
//                             borderWidth: 2,
//                             boxShadow: "0 0 0 4px rgba(27,77,255,0.08)",
//                           },
//                         },
//                       }}
//                     />
//                   )}
//                   sx={{ width: "100%" }}
//                 />

//                 <Typography
//                   sx={{
//                     mt: 3,
//                     fontSize: 12,
//                     fontWeight: 600,
//                     color: "rgba(15,23,42,0.4)",
//                     textAlign: "center",
//                   }}
//                 >
//                   🔍 Start typing to quickly navigate to any page or product
//                 </Typography>
//               </Box>
//             </Dialog>
//           )}

//           {/* ================= MOBILE DRAWER ================= */}
//           {!isDesktop && (
//             <Drawer
//               anchor="right"
//               open={mobileDrawerOpen}
//               onClose={closeAllMenus}
//               PaperProps={{
//                 sx: {
//                   width: "100vw",
//                   height: "100svh",
//                   bgcolor: "#ffffff",
//                   backgroundImage: "radial-gradient(circle at 90% 10%, rgba(65,84,241,0.03) 0%, transparent 60%)",
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   height: 70,
//                   px: 2,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   borderBottom: "1px solid rgba(15,23,42,0.06)",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 1.5,
//                     cursor: "pointer",
//                   }}
//                   onClick={() => handleNavigate("/")}
//                 >
//                   <Image src="/logo.png" alt="BluAI" width={48} height={48} priority />
//                   <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: 20 }}>
//                     BluAI
//                   </Typography>
//                 </Box>
//                 <IconButton
//                   onClick={closeAllMenus}
//                   sx={{
//                     transition: "all 0.2s",
//                     "&:hover": { backgroundColor: "rgba(65, 84, 241, 0.08)" },
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </Box>

//               <Box
//                 sx={{
//                   flex: 1,
//                   height: "calc(100svh - 70px)",
//                   overflowY: "auto",
//                   px: 2,
//                   py: 2,
//                 }}
//               >
//                 {pages.map((page, index) => {
//                   const isActive = pathname === page.route;

//                   if (page.children) {
//                     return (
//                       <Box key={page.value || index} sx={{ mb: 1 }}>
//                         <Button
//                           fullWidth
//                           onClick={() => setMobileProductsOpen((prev) => !prev)}
//                           endIcon={
//                             mobileProductsOpen ? (
//                               <KeyboardArrowUpIcon />
//                             ) : (
//                               <KeyboardArrowDownIcon />
//                             )
//                           }
//                           sx={{
//                             justifyContent: "space-between",
//                             textTransform: "none",
//                             fontWeight: 800,
//                             borderRadius: 3,
//                             px: 2.5,
//                             py: 1.8,
//                             bgcolor: mobileProductsOpen
//                               ? "rgba(65, 84, 241, 0.08)"
//                               : "rgba(65, 84, 241, 0.04)",
//                             color: mobileProductsOpen ? "#1b4dff" : "#0f172a",
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               bgcolor: "rgba(65, 84, 241, 0.10)",
//                             },
//                           }}
//                         >
//                           {page.label}
//                         </Button>

//                         <Collapse in={mobileProductsOpen} timeout={250} unmountOnExit>
//                           <Box sx={{ mt: 2 }}>
//                             {/* Products Section */}
//                             <Typography
//                               sx={{
//                                 fontSize: 11,
//                                 fontWeight: 800,
//                                 mb: 1.5,
//                                 color: "#1b4dff",
//                                 letterSpacing: 0.5,
//                                 textTransform: "uppercase",
//                                 px: 1.5,
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: 1,
//                               }}
//                             >
//                               <MedicalServicesIcon sx={{ fontSize: 16 }} />
//                               Products
//                             </Typography>
//                             {products
//                               .filter((p) => p.type === "product")
//                               .map((product) => (
//                                 <Button
//                                   key={product.id}
//                                   fullWidth
//                                   onClick={() => handleNavigate(`/${product.slug}`)}
//                                   sx={{
//                                     justifyContent: "flex-start",
//                                     textTransform: "none",
//                                     fontSize: 14,
//                                     fontWeight: 600,
//                                     borderRadius: 2.5,
//                                     px: 2.5,
//                                     py: 1.4,
//                                     color: "#0f172a",
//                                     mb: 0.5,
//                                     transition: "all 0.2s ease",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: 1.5,
//                                     "&:hover": {
//                                       bgcolor: "rgba(65, 84, 241, 0.06)",
//                                       color: "#1b4dff",
//                                       transform: "translateX(4px)",
//                                     },
//                                   }}
//                                 >
//                                   <Box
//                                     sx={{
//                                       width: 40,
//                                       height: 40,
//                                       borderRadius: 2,
//                                       bgcolor: "rgba(15,23,42,0.04)",
//                                       position: "relative",
//                                       flexShrink: 0,
//                                       overflow: "hidden",
//                                     }}
//                                   >
//                                     <Image
//                                       src={product.image}
//                                       alt={product.title}
//                                       fill
//                                       style={{ objectFit: "contain", padding: 4 }}
//                                     />
//                                   </Box>
//                                   {product.title}
//                                 </Button>
//                               ))}

//                             {/* Software Section */}
//                             <Typography
//                               sx={{
//                                 fontSize: 11,
//                                 fontWeight: 800,
//                                 mt: 2.5,
//                                 mb: 1.5,
//                                 color: "#ff6b6b",
//                                 letterSpacing: 0.5,
//                                 textTransform: "uppercase",
//                                 px: 1.5,
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: 1,
//                               }}
//                             >
//                               <SmartToyIcon sx={{ fontSize: 16 }} />
//                               Software
//                             </Typography>
//                             {products
//                               .filter((p) => p.type === "software")
//                               .map((product) => (
//                                 <Button
//                                   key={product.id}
//                                   fullWidth
//                                   onClick={() => handleNavigate(`/${product.slug}`)}
//                                   sx={{
//                                     justifyContent: "flex-start",
//                                     textTransform: "none",
//                                     fontSize: 14,
//                                     fontWeight: 600,
//                                     borderRadius: 2.5,
//                                     px: 2.5,
//                                     py: 1.4,
//                                     color: "#0f172a",
//                                     mb: 0.5,
//                                     transition: "all 0.2s ease",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: 1.5,
//                                     "&:hover": {
//                                       bgcolor: "rgba(255,107,107,0.06)",
//                                       color: "#ff6b6b",
//                                       transform: "translateX(4px)",
//                                     },
//                                   }}
//                                 >
//                                   <Box
//                                     sx={{
//                                       width: 40,
//                                       height: 40,
//                                       borderRadius: 2,
//                                       bgcolor: "rgba(15,23,42,0.04)",
//                                       position: "relative",
//                                       flexShrink: 0,
//                                       overflow: "hidden",
//                                     }}
//                                   >
//                                     <Image
//                                       src={product.image}
//                                       alt={product.title}
//                                       fill
//                                       style={{ objectFit: "contain", padding: 4 }}
//                                     />
//                                   </Box>
//                                   {product.title}
//                                 </Button>
//                               ))}
//                           </Box>
//                         </Collapse>

//                         <Divider sx={{ my: 1.5, opacity: 0.4 }} />
//                       </Box>
//                     );
//                   }

//                   return (
//                     <Button
//                       key={page.label}
//                       fullWidth
//                       onClick={() => handleNavigate(page.route)}
//                       sx={{
//                         justifyContent: "flex-start",
//                         textTransform: "none",
//                         fontSize: 15,
//                         fontWeight: isActive ? 900 : 700,
//                         borderRadius: 3,
//                         px: 2.5,
//                         py: 1.8,
//                         mb: 0.5,
//                         color: isActive ? "#1b4dff" : "#0f172a",
//                         bgcolor: isActive
//                           ? "rgba(65, 84, 241, 0.08)"
//                           : "transparent",
//                         transition: "all 0.2s ease",
//                         "&:hover": {
//                           bgcolor: "rgba(65, 84, 241, 0.06)",
//                           transform: "translateX(4px)",
//                         },
//                       }}
//                     >
//                       {page.label}
//                     </Button>
//                   );
//                 })}
//               </Box>
//             </Drawer>
//           )}
//         </Toolbar>
//       </Container>

//       {/* Global animation styles */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.8); }
//           to { opacity: 1; transform: scale(1); }
//         }
        
//         .product-image {
//           transition: transform 0.4s ease;
//         }
        
//         .product-image:hover {
//           transform: scale(1.05);
//         }
//       `}</style>
//     </AppBar>
//   );
// }