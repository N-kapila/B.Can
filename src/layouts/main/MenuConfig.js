// routes
import { PATH_PAGE } from "../../routes/paths";

// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/",
  },
  {
    title: "Admin",
    icon: <Iconify icon={"gg:profile"} {...ICON_SIZE} />,
    path: PATH_PAGE.admin_user_management,
  },
  {
    title: "Services",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Mammography",
        items: [
          { title: "Mammography One", path: PATH_PAGE.mammography1 },
          { title: "Mammography Two", path: PATH_PAGE.mammography2 },
          { title: "Mammography Three", path: PATH_PAGE.mammography3 },
        ],
      },

      {
        subheader: "Prediction",
        items: [
          {
            title: "Risk Level Prediction",
            path: PATH_PAGE.risk_level_prediction,
          },
          {
            title: "Calculate Risk Form",
            path: PATH_PAGE.calculate_risk_form,
          },
          {
            title: "Survival Prediction",
            path: PATH_PAGE.survival_prediction,
          },
          {
            title: "Predict Survival Form",
            path: PATH_PAGE.predict_survival_form,
          },
        ],
      },

      {
        subheader: "Chat Bot",
        items: [{ title: "Chat Box", path: PATH_PAGE.chat_box }],
      },

      // {
      //   title: "For you",
      //   path: PATH_PAGE.for_you,
      // },
    ],
  },
];

export default menuConfig;
