const express = require("express");
const { MENU_LINKS } = require("../constants/navigation");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("home", {
    headTitle: "Shop - Home",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/"
  });
});

module.exports = router;