"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Link } from "@mui/material";
import { links, menus } from "..";

interface Props {
  open: boolean;
}
export default function ControlledAccordions({ open }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const panals = ["panal1", "panal2", "panal3", "panal4"];
  return (
    <Box
      sx={{
        display: {
          xs: open ? "block" : "none",
          md: "none",
        },
      }}
    >
      {menus.map((ele, ind) => {
        return (
          <Accordion
            expanded={expanded === panals[ind]}
            onChange={handleChange(panals[ind])}
            key={ind}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {ele}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {links[ind].map((ele, ind) => {
                return <Link key={ind}>{ele}</Link>;
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
