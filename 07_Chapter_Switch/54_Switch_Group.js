let browser = "Safari";

switch (browser) {
    case "Chrome":
    case "Brave":
    case "Opera":
    case "Edge":
       console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}