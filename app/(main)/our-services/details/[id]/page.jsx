import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { servicesData } from "../../../../../components/data/services";
import Image from "next/image";


export function generateStaticParams() {
  return servicesData?.map((service) => ({
    id: service.id.toString(),
  }));
}

const ServiceDetailPage = async ({ params }) => {
  const { id } = await params;

  const service = servicesData.find(
    (item) => item.id == Number(id)
  );

  if (!service) return null;

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 320, md: 520 },
          width: "100%",
        }}
      >
        <Image
          src={service?.image} // replace with your image
          alt={service?.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(13,20,48,0.9), rgba(13,20,48,0.6))",
          }}
        />

        {/* Text */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {service.title}
            </Typography>
          </Box>
        </Container>

        {/* Curve */}
        <Box
          sx={{
            position: "absolute",
            bottom: -1,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 500 60"
            preserveAspectRatio="none"
            style={{ width: "100%", height: 60 }}
          >
            <path
              d="M0,0 C150,50 350,0 500,40 L500,60 L0,60 Z"
              style={{ fill: "#ffffff" }}
            />
          </svg>
        </Box>
      </Box>

      {/* ===== CONTENT SECTION ===== */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        {/* Description */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Service Description
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 900, mb: 6 }}
        >
          {service.description || ""}
        </Typography>

        {/* Process */}
        {service?.expertise_includes?.length > 0 && (
          <>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 3 }}
            >
              {service?.subtitle}
            </Typography>


            {service?.expertise_includes?.length ? (
              <List sx={{ maxWidth: 900 }}>
                {service.expertise_includes.map((item, index) => (
                  <ListItem key={index} disableGutters sx={{ mb: 1 }}>
                    <ArrowRightIcon
                      sx={{ color: "primary.main", mr: 1 }}
                    />
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: "body1",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                ))}
              </List>

            ) : ""}

          </>
        )}

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 900, mb: 6 }}
        >
          {service?.seconddescription || ""}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 900, mb: 6 }}
        >
          {service?.thirddescription || ""}
        </Typography>
      </Container>
    </>
  );
};

export default ServiceDetailPage;
