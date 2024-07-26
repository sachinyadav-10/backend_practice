const express = require("express");
const getcoursecontroller = require("../controllers/courses/getcoursecontroller");
const router = express.Router();

router.get("/", getcoursecontroller);
router.get("/id/:id", getcoursecontroller);
router.get("/title/:title", getcoursecontroller);
router.get("/instructor_id/:instructor_id", getcoursecontroller);
router.get("/duration_weeks/:duration_weeks", getcoursecontroller);
router.get("/price/:price", getcoursecontroller);

module.exports = router;
