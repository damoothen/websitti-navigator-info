(function(){

    var parser = new UAParser();

    navigator.info = {
        browser: parser.getBrowser(),
        engine: parser.getEngine(),
        os: parser.getOS(),
        device: parser.getDevice()
    };

})();
