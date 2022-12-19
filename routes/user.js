const express = require("express");
const { client } = require("../config/line");
const router = express.Router();

const service = require("../services/user/index");

// post localhost:4000/user/sendmessagetouser/
router.get("/sendmessagetouser/", async function (req, res, next) {
  const message = {
    type: "text",
    text: "สวัสดี ข้อความมาจากแอดมินปาล์ม อย่าเครียมดนะสู้ๆ"
  }
  await client.multicast(['U1bef6dae991ac70cbab1837c7016d99b'],[message]);
  
  //if(!sendMessage == null){
   // return res.status(200).json({ msg: sendMessage });
  //}else{
    return res.status(200).json({ msg: 'success' });
  //}
});
// localhost:4000/user/getuserbyid/U1bef6dae991ac70cbab1837c7016d99b
router.get("/getuserbyid/:id", async function (req, res, next) {
  const user = await service.getUerById(req.params.id);
  if(!user == null){
    return res.status(200).json(user);
  }else{
    return res.status(200).json({ });
  }
});

// localhost:4000/user/getuserphonenumber/U1bef6dae991ac70cbab1837c7016d99b
router.get("/getuserphonenumber/:id", async function (req, res, next) {
  const user = await service.getUerPhoneNumber(req.params.id);
  if(!user == null){
    return res.status(200).json({ user_phone: user.user_phone });
  }else{
    return res.status(200).json({ user_phone: "" });
  }
});

// localhost:4000/user/update/U1bef6dae991ac70cbab1837c7016d99b
router.put("/update/:id", async function (req, res, next) {
  const body = req.body;
  // console.log(body);
  const user = await service.updateUser(req.params.id, 1, body.displayName, body.pictureUrl,body.userPhone);
  return res.status(200).json({ "message": "แก้ไขข้อมูลส่วนตัวสำเร็จ"});
});

module.exports = router;
