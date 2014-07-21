define(function(require, exports, module){
    //preload cqwrap file
    require('cqwrap/index.js'); 

    var LoadingScene = require('src/view/loading_scene.js');

    //始终中文
    var loadingScene = new LoadingScene({country: 'CN'});
    director.runWithScene(loadingScene);

    /*native.call('getLocale').then(function(res){
        var loadingScene = new LoadingScene(res);
        director.runWithScene(loadingScene);
    }).otherwise(function(){
        var loadingScene = new LoadingScene({country: 'EN'});
        director.runWithScene(loadingScene);    
    }).otherwise(function(err){
        cc.log(err);
    });*/
});

