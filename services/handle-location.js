const { client } = require("../config/line");
const { botSendRepairDetail } = require("./bot-user-step/3-bot-send-repair-detail");
const { updateRepairForm } = require("./repair/index");

exports.handleLocation = async (event) => {
   console.log("location " , event.message);

    //update lat,long to repair table
   let location = { type: 'Point', coordinates: [event.message.latitude, event.message.longitude]};
    const repairData = {
        location: location,
        repair_status: 0
    }
    await updateRepairForm(global.repairId, repairData);

    //send repair detail
    let msg = botSendRepairDetail();

    return client.replyMessage(event.replyToken, msg);
}