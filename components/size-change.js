angular.module('themechanger').component('fontSize', {
    templateUrl:'./templates/size-changer.html',
    bindings: {
        fontSize:'<',
        update:'&',
    },
    controller: function(){
        this.doStuffOnChange = function(){
            console.log('hi')
            this.update({size: this.fontSize})
        }
    }
})