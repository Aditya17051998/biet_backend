const express = require("express");
const passport = require("passport");
const router = express.Router();

const userApi = require("../../../controllers/api/v1/user_api");
router.post("/create-session", userApi.createSession);
router.post("/signup", userApi.create);
router.post(
  "/edit/:id",
  // passport.authenticate("jwt", { session: false }),
  userApi.update
);
router.get(
  "/fetch",
  userApi.getUsers
);
router.get(
  "/sorted/:year",
  userApi.getSorted
);
router.get("/search", userApi.searchUsers);
router.get("/profile/:id", userApi.profile);
module.exports = router;
