exports.botSendLocationP = () => {
    let items  = [];
  
    let repairLocationDetail = ['ตึกอนุบาล','ตึกประถม','อาคารประกอบ','หอพัก','อื่นๆ']
  
    items = repairLocationDetail.map((item)=>{
       return {
          type: "action",
          action: {
              type: "postbackLocation",
              label: item,
              data: item,
          }
       }
    });
    // quickreply ได้แค่ 13 ตัว
    let msg = 
      {
        type: "text",
        text: "กรุณาแจ้งสถานที่ต้องการซ่อม",
        quickReply: {
          items: items
        },
      }
    
  
    return msg;
  };
  