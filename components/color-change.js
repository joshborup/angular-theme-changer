angular.module('themechanger').component('colorChanger', {
    templateUrl:'./templates/color-changer.html',
    bindings: {
        fontColor:'<',
        update:'&',
        allowEdit:'<'
    },
    controller: function(){
        this.doStuffOnChange = function(){
            console.log('hi')
            this.update({val: this.fontColor})
        }
    }
})