import Mock from "mockjs";
Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://skill.phodal.com/#_rs2tu_1_Name",
});