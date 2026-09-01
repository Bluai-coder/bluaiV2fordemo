"use client";

import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
    {
        q: "What is Embedded System Development, and how can it benefit my business?",
        a: "Embedded System Development involves creating specialized computing systems that are integrated into larger devices to perform specific functions. Our service offers a comprehensive approach, from initial concept through to final product delivery and support. By partnering with us, clients can leverage our expertise in creating robust, efficient, and tailored embedded solutions that enhance the functionality and performance of their products.",
    },
    {
        q: "What are PCB simulations, and why are they important?",
        a: "PCB simulations involve using software tools to model and analyze the performance of a printed circuit board before physical production. These simulations help identify potential issues, optimize the design, and ensure the board functions correctly under various conditions.",
    },
    {
        q: "How do you ensure the quality and reliability of your embedded systems?",
        a: "Quality and reliability are paramount in our development process. We utilize rigorous testing protocols and quality assurance measures at each stage of development. Our team follows industry best practices and standards to deliver robust and reliable embedded systems that meet the highest quality benchmarks.",
    },
    {
        q: "Can BluAI help with PCB design and layout?",
        a: "Yes, BluAI offers comprehensive PCB design and layout services. We create detailed schematics and layouts for printed circuit boards, ensuring optimal performance and reliability for your electronic systems.",
    },
    {
        q: "Can you provide support and maintenance for existing embedded systems?",
        a: "Yes, we offer comprehensive maintenance and support services for both newly developed and existing embedded systems. Our support includes troubleshooting, system monitoring, updates, and enhancements to ensure your system remains efficient and effective throughout its lifecycle.",
    },
    {
        q: "How do you tailor your embedded system solutions to specific client needs?",
        a: "We begin each project with a detailed discovery phase where we gather information about your specific needs, challenges, and objectives. This allows us to design and develop a customized solution that precisely fits your requirements, ensuring optimal performance and value.",
    },
];

export default function FaqSection() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
            <Container maxWidth="xl">

                <Stack spacing={2} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>

                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 0.9,
                            borderRadius: 99,
                            bgcolor: "rgba(27,77,255,0.10)",
                            border: "1px solid rgba(27,77,255,0.18)",
                        }}
                    >
                        {/* <VerifiedIcon sx={{ fontSize: 18, color: "#1B4DFF" }} /> */}
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: 12,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#1B4DFF",
                            }}
                        >
                            F.A.Q
                        </Typography>
                    </Box>
                    <Typography
                        variant="h4"
                        mb={1}
                        sx={{
                            textAlign: "center",
                            fontWeight: 800,
                            fontSize: { xs: 24, sm: 28, md: 32 },
                            color: "#0f172a",
                            mb: { xs: 4, md: 5 },
                        }}
                    >
                        <Box component="span" className="!text-[#1b4dff]" color="primary.main">
                            Frequently {" "}
                        </Box>
                        <Box component="span" className="!text-[#1f2a56]" color="text.primary">

                            Asked Questions
                        </Box>
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                    >
                        Find quick answers to common questions about our services and support.
                    </Typography>
                </Stack>




                {/* FAQ GRID */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >
                    {faqs.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={index}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Accordion
                                elevation={0}
                                sx={{
                                    width: "100%",          //  SAME WIDTH
                                    maxWidth: 520,          //  CONTROLLED COLUMN WIDTH
                                    borderBottom: "1px solid #e5e7eb",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon sx={{ color: "#1b4dff" }} />
                                    }
                                >
                                    <Typography fontWeight={600} color="#0b1b5c">
                                        {item.q}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.a}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}
