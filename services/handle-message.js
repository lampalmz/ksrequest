const config = require('../config/line');
const { botSendCamera } = require('./bot-user-step/1-bot-send-camera');
const { deleteImageWhenUnCompleted, deleteRepairFormUnCompleted } = require('./repair');
const { sendRepairFormUser } = require('./send-repairform-user');

exports.handleMessage = async (event) => {
    let msg;

    let msgFromUser = event.message.text.trim();
       // console.log(msgFromUser);
    if (msgFromUser === "เริ่มการแจ้งซ่อม") {
        await deleteImageWhenUnCompleted(event.source.userId);
        await deleteRepairFormUnCompleted(event.source.userId);
        msg = botSendCamera();
    } else if (msgFromUser === "ยกเลิกการแจ้งซ่อม") {
        await deleteImageWhenUnCompleted(event.source.userId);
        await deleteRepairFormUnCompleted(event.source.userId);
        msg = { type: "text", text: "ขอบคุณที่ใช้บริการ ต้องการแจ้งซ่อมพิมพ์ เริ่มการแจ้งซ่อม หรือเลือกที่เมนู" };
    } else if (msgFromUser === "ใบแจ้งซ่อมของฉัน") {
        msg = await sendRepairFormUser(event);
   /* } else if (msgFromUser === "location") {
        msg = await sendRepairFormUser(event);*/
    } else {
        if(msgFromUser === "สถานที่ซ่อม"){
            msg = { type: "text", text: "กรุณาพิม Location :" };
            msg = { type: "text", text: "แล้วตามด้วยชื่อสถานที่" };
        }else{
            msg = { type: "text", text: "หากต้องการแจ้งซ่อม พิมพ์ เริ่มการแจ้งซ่อม หรือเลือกที่เมนู" };
         }
    }

    return config.client.replyMessage(event.replyToken, msg);
}