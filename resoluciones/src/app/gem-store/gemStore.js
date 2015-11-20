(function() {
    'use strict';
    
    angular
        .module('gemStore', ['app-templates', 'appConfig'])
        .config(function($compileProvider, debug) {
            $compileProvider.debugInfoEnabled(debug);
            if (debug) console.info('debugInfo is enabled');
        });
    
})();