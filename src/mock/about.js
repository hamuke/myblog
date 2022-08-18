import Mock from "mockjs";
Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://blog.csdn.net/qq_44790595?spm=1000.2115.3001.5343",
    // https://skill.phodal.com/#_rs2tu_1_Name
});