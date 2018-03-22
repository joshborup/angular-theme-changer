angular.module('themechanger').component('app', {
    templateUrl:'./templates/app.html',
    controller: function(){
        this.allowEdit = 'true';
        this.fontColor = 'black';
        this.fontSize = '12px';
        this.fontFamily = 'monospace';
        this.updateColor = function(val){
            this.fontColor = val;
        };
        this.updateSize= function(size){
            this.fontSize = size;
        }
        this.updateFamily= function(fam){
            this.fontFamily = fam;
        }
        this.toggleEdit = function(val){
            this.allowEdit = val
        } 
    },
    controllerAs: 'myCtrl'
})

