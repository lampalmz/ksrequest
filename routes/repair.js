const express = require("express");
const router = express.Router();
const service = require("../services/repair/index");

// localhost:4000/repair/getrepairall
router.get("/getrepairall", async function (req, res, next) {
  const repair = await service.findAllRepair()
  return res.status(200).json({ repairdata: repair });
});



module.exports = router;
