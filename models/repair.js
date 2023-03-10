const { DataTypes } = require("sequelize");
const sequelize = require("../config/mysql");

const Repair = sequelize.define(
  "Repair",
  {
    // Model attributes are defined here
    created_by: DataTypes.STRING, // LINE user_id 
    detail: DataTypes.TEXT, // อาการเสีย
    repair_by: DataTypes.STRING, // LINE user_id ของช่างซ่อม
    finished_date: DataTypes.DATEONLY, // วันที่ซ่อมเสร็จแล้ว
    repair_status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    picture: DataTypes.STRING,
    location: DataTypes.GEOGRAPHY("POINT")
  },
  {
    // Other model options go here
    tableName: "repairs",
    // timestamps: true, // false เมื่อไม่มีคอลัมน์ createdAt และ updatedAt
    // underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Repair;