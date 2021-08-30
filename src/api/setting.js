import request from "./request";

export async function getSetting() {
    return request.get("/api/setting");
}