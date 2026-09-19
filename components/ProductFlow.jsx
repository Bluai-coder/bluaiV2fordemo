



"use client";

import { Box, Typography, Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import StepsExplain from "./popups/StepsExplain";

const Description = [
    {
        id: 1,
        name: "Step 1",
        des: "Create Patient ID on BluID™ or BluHealth™",
        details: `
      <p>
      Register a new patient using <b>BluID™</b> or <b>BluHealth™</b> by completing the registration process. 
      The system collects the patient’s demographic, contact, health, and lifestyle information and 
      generates a unique <b>BluID™</b> for secure identification across all connected BluHealth services and devices.
      </p>

      <p><b>The registration process includes the following steps:</b></p>

      <p><b>Step 1: Basic Information</b><br/>
      Enter the patient's <b>First Name, Last Name, Date of Birth, Gender, and Address</b>, then click <b>Next</b> to continue.</p>

      <p><b>Step 2: Contact Details</b><br/>
      Provide <b>Phone Number, Email Address, Aadhaar (last 4 digits), Profile Photo</b>, and 
      <b>Aadhaar Document</b> upload.</p>

      <p>Use <b>Next</b> to proceed or <b>Back</b> to edit previous information.</p>

      <p><b>Step 3: Health Information</b><br/>
      Enter <b>Blood Group, Vaccination Status, Organ Donor Status</b>, and 
      <b>Disability details</b> (if applicable).</p>

      <p><b>Step 4: Lifestyle Information</b><br/>
      Provide lifestyle details such as <b>Addictions (Smoking / Alcohol / Drugs)</b> with type,
      frequency, and duration, and <b>Diet Preference (Vegetarian / Non-Vegetarian / Other)</b>.</p>

      <p>
      After completing all required fields, click <b>Register</b>. The system will create the patient record 
      and generate a unique <b>BluID™</b>.
      </p>

      <p><b>Completion</b><br/>
      Once registration is successful, the user will be automatically redirected to the 
      <b>Login Page</b>.
      </p>
    `,
    },
    {
        id: 2,
        name: "Step 2",
        des: "Login to VitalsChair™",
        details: `
    <p>
      Patients or authorized healthcare staff can securely access the <b>VitalsChair™</b> system using the patient’s <b>BluID™</b>.
      This login process ensures secure identification while maintaining clinical data protection and role-based access.
    </p>

    <p><b>Login Process</b></p>

    <ol style="padding-left:18px;">
      <li>
        <b>Enter BluID™</b><br/>
        The patient or healthcare staff enters the patient’s <b>BluID™</b> in the login field.
      </li>

      <li style="margin-top:6px;">
        <b>Request OTP</b><br/>
        Click <b>Get OTP</b> to receive a one-time password on the registered mobile number.
      </li>

      <li style="margin-top:6px;">
        <b>OTP Verification</b><br/>
        Enter the received OTP and click <b>Verify</b> to authenticate the login.
      </li>

      <li style="margin-top:6px;">
        <b>Automatic Patient Retrieval</b><br/>
        Once the OTP is successfully verified, the system automatically <b>fetches and loads the patient’s profile and medical record</b>
        in the VitalsChair™ dashboard.
      </li>
    </ol>

    <p style="margin-top:10px;">
      This process allows both <b>self-login by patients</b> and <b>assisted login by healthcare staff</b> while ensuring secure and
      accurate patient identification.
    </p>
  `
    },
    {
        id: 3,
        name: "Step 3",
        des: "VitalsChair™ Data & Dashboard Overview",
        details: `
    <p>
      After entering the patient’s <b>BluID™</b>, the user requests an <b>OTP</b> on the registered mobile number. 
      Once the OTP is verified, the system securely logs in and automatically fetches the patient’s profile. 
      This login process can be performed by <b>patients (self-login)</b> or <b>authorized medical staff</b>.
    </p>

    <p>
      Once logged in, the <b>BluHealth Home Page</b> displays the patient’s complete health profile, including 
      personal details, emergency contact, blood group, organ donor status, allergies, addictions, diagnoses, 
      and the latest vital signs such as blood pressure, heart rate, ECG rate, SpO₂, respiratory rate, and temperature.
    </p>

    <p>
      The <b>top navigation menu</b> provides access to key modules including 
      <b>Vitals, ECG, Appointments, Encounters/Notes, Labs, Radiology, Cardiology, IPD, Plans, Wrap-Up, 
      Near Labs, and ZygoteBody</b>.
    </p>

    <p>
      The <b>Vital Signs Dashboard</b> shows the latest recorded vitals with the current date and time. 
      It also includes AI-powered sections that provide <b>Health Insights, Possible Medical Conditions, 
      and Health Advice</b> based on the patient’s vitals. Users also have the option to 
      <b>add vitals manually</b>, which instantly updates the dashboard and sidebar.
    </p>

    <p>
      The <b>sidebar</b> provides a quick medical summary, including patient profile information, allergies, 
      addictions, latest vital signs, body composition access, and recorded diagnoses.
    </p>

    <p>
      The <b>Body Composition page</b> presents more than <b>50 synchronized measurements</b> such as 
      BMI, body fat, muscle mass, body water, visceral fat, BMR, metabolic indicators, segmental analysis 
      of arms, legs, and trunk, along with additional metrics like bone mass and metabolic age.
    </p>

    <p>
      The <b>Vitals Graph section</b> visualizes trends of vital signs over time. Users can select 
      individual vitals, change chart types (line, bar, or area), apply date filters, and review 
      average values across selected time ranges.
    </p>

    <p>
      The <b>ECG section</b> allows users to analyze ECG signals with <b>12-lead or 5-lead views</b>. 
      It displays key measurements such as heart rate, PR interval, and respiration rate, and provides 
      controls for zoom, gain, speed, lead selection, and ECG export. The ECG data remains synchronized 
      with the same timestamp as other recorded vitals.
    </p>
  `
    },
    {
        id: 4,
        name: "Step 4",
        des: "AI Consultation Analysis in VitalsChair™",
        details: `
    <p>
      During the consultation, the conversation between the <b>patient and medical staff</b> is securely recorded 
      within the <b>VitalsChair™ system</b>. This includes the patient’s <b>chief complaint, previous diseases, 
      symptoms, and other relevant medical details</b> discussed during the visit.
    </p>

    <p>
      Along with the <b>recorded vitals</b>, the system processes this information through 
      <b>BluHealth’s AI model</b> to generate structured clinical documentation and analysis. 
      This helps improve diagnosis accuracy and maintain a complete digital health record.
    </p>

    <p><b>The AI automatically generates the following outputs:</b></p>

    <ul style="padding-left:18px;">
      <li>
        <b>Consultation Transcription</b> – Full transcription of the conversation between the patient and healthcare staff.
      </li>

      <li>
        <b>Summary SOAP Analysis</b> – A short structured medical summary based on the SOAP format 
        (Subjective, Objective, Assessment, Plan).
      </li>

      <li>
        <b>Detailed SOAP Analysis</b> – A comprehensive clinical breakdown of the consultation.
      </li>

      <li>
        <b>Medical Analysis</b> – AI-driven evaluation of the patient’s condition using conversation data and vital signs.
      </li>

      <li>
        <b>Identified Symptoms</b> – Key symptoms detected from the discussion and health data.
      </li>

      <li>
        <b>Prescription</b> – Suggested medications or treatment recommendations.
      </li>

      <li>
        <b>Referrals</b> – Recommendations for specialist consultations if required.
      </li>

      <li>
        <b>Follow-up Instructions</b> – Suggested next steps for monitoring or future appointments.
      </li>
    </ul>

    <p style="margin-top:10px;">
      All generated insights are available to <b>both the patient and the doctor</b>, enabling better diagnosis, 
      improved treatment planning, and maintaining a complete <b>digital health record</b> for future reference.
    </p>
  `
    }
];

function StepBox({ step, text, position, handleClickOpen }) {
    const getPositionStyles = () => {
        const baseStyles = {
            position: "absolute",
            cursor: "pointer",
            zIndex: 10,
            // transition: "all 0.3s ease",
            // '&:hover': {
            //     transform: "scale(1.05)",
            //     boxShadow: "0 15px 40px rgba(37,99,235,0.5)"
            // }
        };

        switch (position) {
            case 'top':
                return {
                    ...baseStyles,
                    top: -30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            case 'right':
                return {
                    ...baseStyles,
                    top: '50%',
                    right: -80,
                    transform: 'translateY(-50%)',
                };
            case 'bottom':
                return {
                    ...baseStyles,
                    bottom: -30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            case 'left':
                return {
                    ...baseStyles,
                    top: '50%',
                    left: -80,
                    transform: 'translateY(-50%)',
                };
            default:
                return baseStyles;
        }
    };

    return (
        <Paper
            elevation={0}
            onClick={() => handleClickOpen()}
            sx={{
                width: { xs: 130, sm: 150, md: 180 },
                minHeight: { xs: 80, sm: 90, md: 100 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 1.5, sm: 2, md: 2 },
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                background: "linear-gradient(135deg, #1b4dff 0%, #1b4dff 100%)",
                boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                ...getPositionStyles(),
            }}
        >
            <Typography
                variant="caption"
                sx={{ 
                    opacity: 0.8, 
                    mb: 0.5, 
                    fontSize: { xs: 10, sm: 11, md: 12 } 
                }}
            >
                {step}
            </Typography>

            <Typography
                variant="body2"
                sx={{ 
                    fontWeight: 600, 
                    fontSize: { xs: 11, sm: 12, md: 13 },
                    lineHeight: 1.3
                }}
            >
                {text}
            </Typography>
        </Paper>
    );
}

export default function CircularProcessDiagram() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 900);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClickOpen = (key) => {
        const newData = Description?.find((item) => item.name === key);
        setData(newData);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // For mobile view
    if (isMobile) {
        return (
            <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#05070b", color: "#fff" }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: 26, sm: 32, md: 36 },
                            mb: { xs: 4, md: 6 },
                            fontWeight: 800,
                            lineHeight: 1.2,
                            textAlign: "center",
                            color: "#fff",
                        }}
                    >
                        VitalsChair™ Workflow
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {Description.map((step, index) => (
                            <Paper
                                key={step.id}
                                elevation={0}
                                onClick={() => handleClickOpen(step.name)}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    background: "linear-gradient(135deg, #1b4dff 0%, #1b4dff 100%)",
                                    boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    color: "#fff",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    '&:hover': {
                                        transform: "translateX(10px)",
                                        boxShadow: "0 15px 40px rgba(37,99,235,0.5)"
                                    }
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: "50%",
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: "bold",
                                            fontSize: 18
                                        }}
                                    >
                                        {index + 1}
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                            Step {index + 1}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, sm: 16 } }}>
                                            {step.des}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        ))}
                    </Box>
                </Container>
                <StepsExplain data={data} handleClose={handleClose} open={open} />
            </Box>
        );
    }

    // Desktop view - Circular diagram
    const centerX = 260;
    const centerY = 260;
    const radius = 180;

    return (
        <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#05070b", color: "#fff", overflow: "hidden" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: { xs: 26, sm: 32, md: 36 },
                        mb: { xs: 4, md: 6 },
                        fontWeight: 800,
                        lineHeight: 1.2,
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    VitalsChair™ Workflow
                </Typography>

                <Box
                    sx={{
                        position: "relative",
                        width: 520,
                        height: 520,
                        mx: "auto",
                    }}
                >
                    {/* Central Circle */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #1b4dff20 0%, #1b4dff40 100%)",
                            border: "2px solid #1b4dff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            zIndex: 5,
                        }}
                    >
                        <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>
                            VitalsChair<br/>Workflow
                        </Typography>
                    </Box>

                    {/* SVG Circles and Arrows */}
                    <svg
                        width="520"
                        height="520"
                        viewBox="0 0 520 520"
                        style={{ position: "absolute", top: 0, left: 0 }}
                    >
                        <defs>
                            <marker
                                id="arrow"
                                markerWidth="10"
                                markerHeight="7"
                                refX="8"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                            </marker>
                        </defs>

                        {/* Outer Dashed Circle */}
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius}
                            fill="none"
                            stroke="#1b4dff"
                            strokeOpacity="0.4"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />

                        {/* Inner Dashed Circle */}
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius - 40}
                            fill="none"
                            stroke="#fff"
                            strokeOpacity="0.2"
                            strokeWidth="1.5"
                            strokeDasharray="6 6"
                        />

                        {/* Arrows connecting steps in a circle */}
                     
                        {/* Arrow from Step 4 to Step 1 */}
                    
                    </svg>

                    {/* Step Boxes positioned around the circle */}
                    {/* Step 1 - Top */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 20,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                        }}
                    >
                        <StepBox
                            step="Step 1"
                            text="Create Patient ID on BluID™ or BluHealth™"
                            position="top"
                            handleClickOpen={() => handleClickOpen("Step 1")}
                        />
                    </Box>

                    {/* Step 2 - Right */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: 20,
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 10,
                        }}
                    >
                        <StepBox
                            step="Step 2"
                            text="Login to VitalsChair™"
                            position="right"
                            handleClickOpen={() => handleClickOpen("Step 2")}
                        />
                    </Box>

                    {/* Step 3 - Bottom */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 20,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                        }}
                    >
                        <StepBox
                            step="Step 3"
                            text="VitalsChair™ Data & Dashboard Overview"
                            position="bottom"
                            handleClickOpen={() => handleClickOpen("Step 3")}
                        />
                    </Box>

                    {/* Step 4 - Left */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: 20,
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 10,
                        }}
                    >
                        <StepBox
                            step="Step 4"
                            text="AI Consultation Analysis in VitalsChair™"
                            position="left"
                            handleClickOpen={() => handleClickOpen("Step 4")}
                        />
                    </Box>
                </Box>
            </Container>
            <StepsExplain data={data} handleClose={handleClose} open={open} />
        </Box>
    );
}