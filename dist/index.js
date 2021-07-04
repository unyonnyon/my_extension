"use strict";
const randomPick = (items) => {
    const index = Math.floor(items.length * Math.random());
    return items[index];
};
const items = ["m", "o", "c", "h", "i"];
const greeting = () => {
    const message = "めっちゃmochimochiしてるじゃん";
    alert(message);
    const changeBackgroundColor = () => {
        document.body.style.backgroundColor = "#FF0000";
    };
    changeBackgroundColor();
};
chrome.action.onClicked.addListener((tab) => {
    if (tab.id === undefined) {
        console.log("tab error");
        return;
    }
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: greeting,
    });
});
