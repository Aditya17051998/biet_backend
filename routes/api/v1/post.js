const express = require("express");

const router = express.Router();
const passport = require("passport");
const postApi = require("../../../controllers/api/v1/api_post");
router.get("/", postApi.index);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  postApi.create
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  postApi.destroy
);
module.exports = router;
