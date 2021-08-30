export default function formatDate(timestamp, showTime = false) {
    const date = new Date(+timestamp);
    // 某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    let ymd = `${date.getFullYear()}-${month}-${day}`;
    if (showTime) {//判断是否显示时分秒
        const hours = date.getHours().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${ymd} ${hours}:${seconds}:${minutes}`;
    }
    return ymd;
}