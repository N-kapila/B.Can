import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Stack, Drawer, Typography, Link } from "@mui/material";
// hooks
import useResponsive from "../../../hooks/useResponsive";
import useCollapseDrawer from "../../../hooks/useCollapseDrawer";
// utils
import cssStyles from "../../../utils/cssStyles";
// config
import { NAVBAR } from "../../../config";
// components
import Scrollbar from "../../../components/Scrollbar";
import { NavSectionVertical } from "../../../components/nav-section";
//
import navConfig from "./NavConfig";
import NavbarAccount from "./NavbarAccount";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }) {
  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: "center" }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: "flex",
            pl: 2,
          }}
        >
          {/* Logo  */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src="/logo/logo.png" alt="logo" width="30" height="50" />
            <Typography
              sx={{ ml: 1, color: "purple", fontFamily: "sans-serif" }}
              variant="h4"
              gutterBottom
            >
              HOPE
            </Typography>
          </Link>

          {/* {isDesktop && !isCollapse && (
            <CollapseButton
              onToggleCollapse={onToggleCollapse}
              collapseClick={collapseClick}
            />
          )} */}
        </Stack>

        <NavbarAccount isCollapse={isCollapse} />
      </Stack>

      <NavSectionVertical navConfig={navConfig} isCollapse={isCollapse} />

      <Box sx={{ flexGrow: 1 }} />

      {/* {!isCollapse && <NavbarDocs />} */}
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: "absolute",
        }),
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: "dashed",
              bgcolor: "background.default",
              transition: (theme) =>
                theme.transitions.create("width", {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                ...cssStyles(theme).bgBlur(),
                boxShadow: (theme) => theme.customShadows.z24,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
