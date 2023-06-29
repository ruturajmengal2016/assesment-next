"use client";
import type { NextPage } from "next";
import React from "react";
import styles from "./index.module.css";
import {
  Box,
  List,
  IconButton,
  Collapse,
  Typography,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ControlledAccordions from "./components/menu";

export const menus: string[] = ["Home", "About", "Contact", "Login"];
export const links: string[][] = [
  ["HomeLink", "HomeLink", "HomeLink", "HomeLink", "HomeLink"],
  ["AboutLink", "AboutLink", "AboutLink", "AboutLink", "AboutLink"],
  ["ContactLink", "ContactLink", "ContactLink", "ContactLink", "ContactLink"],
  ["LoginLink", "LoginLink", "LoginLink", "LoginLink", "LoginLink"],
];

const Desktop: NextPage = () => {
  const [menu, setMenu] = React.useState<boolean>(true);
  const [index, setIndex] = React.useState<number>(0);

  const handleMenu = (index: number) => {
    setIndex(index);
  };
  const handleOpen = () => {
    setMenu(!menu);
  };
  return (
    <Box
      className={styles.desktop}
      component="div"
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        handleOpen();
      }}
    >
      <Box
        className={styles.groupParent}
        component="div"
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          event.stopPropagation();
          handleOpen();
        }}
      >
        <Box className={styles.naviParent}>
          <Box className={styles.navi}>
            <Box
              className={styles.rectangleParent}
              sx={{
                backgroundColor: {
                  xs: "#003057",
                  md: "white",
                },
              }}
            >
              <Box
                sx={{
                  padding: "0.2rem",
                  boxSizing: "border-box",
                }}
                component="div"
              >
                <img
                  className={styles.frameChild}
                  alt="logo"
                  src="https://thumbs.dreamstime.com/b/technology-concept-business-logo-template-vector-illustration-network-creative-sign-digital-cryptocurrency-icon-technology-concept-113832666.jpg"
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <IconButton onClick={handleOpen}>
                  {!menu ? (
                    <MenuIcon
                      sx={{
                        fontSize: "5rem",
                        color: "white",
                      }}
                    />
                  ) : (
                    <CloseIcon
                      sx={{
                        fontSize: "5rem",
                        color: "white",
                      }}
                    />
                  )}
                </IconButton>
              </Box>
              <Box
                className={styles.frameParent}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {menus.map((element, indexMenu) => {
                  return (
                    <Box
                      className={styles.frameContainer}
                      key={indexMenu}
                      component="div"
                    >
                      <Box
                        component="div"
                        className={styles.ipsumWrapper}
                        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                          event.stopPropagation();
                          handleMenu(indexMenu);
                        }}
                        borderBottom={
                          index === indexMenu ? "5px solid black" : ""
                        }
                      >
                        <b className={styles.ipsum}>{element}</b>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ControlledAccordions open={menu} />
      <Box
        sx={{
          height: "20rem",
          display: {
            xs: "none",
            md: menu ? "flex" : "none",
          },
          backgroundColor: "whitesmoke",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "0rem 1rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography fontWeight="bold">Ipsum lorem</Typography>
          {links[index].map((ele, ind) => {
            return (
              <Link
                key={ind}
                borderBottom="1px solid gray"
                sx={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "lightgrey",
                  },
                }}
              >
                {ele}
              </Link>
            );
          })}
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography fontWeight="bold">Ipsum lorem</Typography>
          {links[index].map((ele, ind) => {
            return (
              <Link
                key={ind}
                borderBottom="1px solid gray"
                sx={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "lightgrey",
                  },
                }}
              >
                {ele}
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
