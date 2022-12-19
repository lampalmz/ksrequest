exports.botSendRepairDetail = () => {
  let items = [];
  
  let repairDetail = ['คอมเปิดไม่ติด', 'คอมช้า', 'หมึกปริ้นเตอร์หมด', 'จอดับ', 'ดูกล้องCCTV', 'ปริ้นไม่ได้','โปรเจ็คเตอร์เปิดไม่ติด', 'จัดห้องประชุม'];

  items = repairDetail.map((item) => {
    return {
        type: "action",
        action: {
            type: "postback",
            label: item,
            data: item
        }
    }
  });

  let msg = {
    type: "text",
    text: "กรุณาแจ้งอาการเสีย",
    quickReply: {
      items: items
    },
  };

  return msg;
};
