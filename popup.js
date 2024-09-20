const dmp_all_btn = document.getElementById("dmp_all_btn");
const dmp_btn = document.getElementById("dmp_btn");
const all_tabs = document.getElementById("all_tabs");
const fileInput = document.getElementById("fileInput");
var textFile = null;

chrome.tabs.query({windowID: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
    tabs.foreach((tab, index) => {
        const tabItem = document.createElement('div');
        tabItem.className = 'tab-item'

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `tab${index}`;
        checkbox.name = 'tabs';
        checkbox.value = JSON.stringify(tab);
        checkbox.className = 'tab-checkbox';

        const label = document.createElement('label');
        label.htmlFor = `tab${index}`;
        label.className = 'tab-label';
        label.appendChild(document.createTextNode(tab.title));
    })
});