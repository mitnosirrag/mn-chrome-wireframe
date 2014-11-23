var tab_on = {}

chrome.browserAction.onClicked.addListener(function(tab) {
    tab_on[tab.id] = !tab_on[tab.id];

    var is_on = tab_on[tab.id];

    chrome.browserAction.setBadgeText({
        text: is_on ? 'ON' : '',
        tabId: tab.id
    })  

    var method = ( is_on ) ? 'constructor' : 
                    'destructor';
    chrome.tabs.insertCSS(tab.id, {
        file: 'assets/css/mn_wireframe.css'
    }, function() {
        chrome.tabs.executeScript(tab.id, {
            file: 'assets/js/mn_script.js'
        }, function() {
            chrome.tabs.sendMessage(tab.id, {
                method: method
            }, function() {
            });
        });
    });
}); 
