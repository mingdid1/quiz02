const router = require("express").Router();

const memberCtrl = require("../../controller/member/member_ctrl");
//router.get("/", (req, res)=> {res.send("member 연동")});
router.get("/login", memberCtrl.login);

router.post("/login_check", memberCtrl.loginCheck);

router.get("/logout", memberCtrl.logout);

router.get("/list", memberCtrl.list);

module.exports = router;
