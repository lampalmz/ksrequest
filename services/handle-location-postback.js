const { client } = require("../config/line");
const { botSendRepairDetail } = require("./bot-user-step/3-bot-send-repair-detail");
const { updateRepairForm } = require("./repair/index");


exports.handleLocationPostback = async (event) => {
    // console.log("location", event.message);

    // update lat, long to repair table
    let location = event.postback.data;
   
    const repairData = {
        location: location,
        repair_status: 0
    }
    // console.log(location);
    await updateRepairForm(global.repairId, repairData);
    // send repair detail
    let msg = botSendRepairDetail();


    return client.replyMessage(event.replyToken, msg);
}