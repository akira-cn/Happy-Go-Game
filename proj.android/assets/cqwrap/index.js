// load modules
define(function(require, exports, module){

    //preload all modules
    require('cqwrap/base');
    require('cqwrap/events');
    require('cqwrap/when');
    require('cqwrap/native');

    if(!global.md5){
        require('cqwrap/md5');
    }

    require('cqwrap/audio');

    require('cqwrap/style');
    require('cqwrap/nodes');
    require('cqwrap/sprites');
    require('cqwrap/labels');
    require('cqwrap/scenes');
    require('cqwrap/layers');
    require('cqwrap/buttons');
    require('cqwrap/transitions');
    require('cqwrap/scroll');
    
    require('cqwrap/wrapper');
});
