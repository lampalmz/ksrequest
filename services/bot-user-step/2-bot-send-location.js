exports.botSendLocation = () => {
  let msg = {
    type: "text",
    text: "กรุณาส่ง Location ครับ",
    quickReply: {
      items: [
        {
          type: "action",
          imageUrl: "https://codingthailand.com/site/img/location.png",
          action: {
            type: "location",
            label: "ส่ง Location",
          },
        },
        {
          type: "action",
          imageUrl: "https://codingthailand.com/site/img/cancel.png",
          action: {
            type: "message",
            label: "ยกเลิกแจ้งซ่อม",
            text: "ยกเลิกการแจ้งซ่อม",
          },
        },
        /*{
          type: "message",
          imageUrl: "https://codingthailand.com/site/img/cancel.png",
          action: {
            type: "message",
            label: "สถานที่ซ่อม",
            text: "สถานที่ซ่อม",
          },
        },*/
      ],
    },
  };

  return msg;
};
