const express = require("express");
const { generateFinancialReport } = require("../controllers/reportController");
const router = express.Router();

router.get("/", generateFinancialReport);

module.exports = router;
