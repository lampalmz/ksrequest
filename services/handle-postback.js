const { client } = require("../config/line");
const { updateRepairForm } = require("./repair/index");

exports.handlePostback = async (event) => {
  let repairDetail = event.postback.data; // น้ำไม่ไหล ไฟดับ
  // console.log(repairDetail);

  //update repair detail to repair table
  const repairData = {
    detail: repairDetail,
    repair_status: 1, // 1 = แจ้งซ่อมสำเร็จ
  };
  await updateRepairForm(global.repairId, repairData);

  let msg = {
    type: "text",
    text: "ได้รับใบแจ้งซ่อมเรียบร้อย หากดำเนินการเสร็จแล้วจะมีข้อความแจ้ง หรือเลือกที่เมนู ติดตามงานซ่อม ครับ",
  };

  return client.replyMessage(event.replyToken, msg);
};
