const { Router } = require("express");

const router = Router();

router.get("/api/v1/register", (req, res) => {
    res.send("hello");
});

module.exports = router;