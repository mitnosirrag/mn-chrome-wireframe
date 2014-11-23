var mn_wireframe = mn_wireframe || (function() {
    this.prototype = {
        "className": "mn_show_wireframe",
        "constructor": function() {
            document.body.classList.add(this.className);
        },
        "destructor": function() {
            document.body.classList.remove(this.className);
        }
    }
    var that = this;

    chrome.runtime.onMessage.addListener(function(request, 
                                                  sender, 
                                                  sendResponse) {
        var data = {};
        
        console.log('METHOD',request.method);
        if ( 'function' == typeof that.prototype[request.method] ) {
            data = that.prototype[request.method]();
        }
        sendResponse({
            data: data
        });
        return true;
    });

    return true;

})();
