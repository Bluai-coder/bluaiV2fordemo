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

