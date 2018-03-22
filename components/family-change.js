angular.module('themechanger').component('fontFamily', {
    templateUrl:'./templates/family-changer.html',
    bindings: {
        fontFamily:'<',
        update:'&',
    },
    // controller: function(){
    //     this.doStuffOnChange = function(){
    //         console.log('hi')
    //         this.update({size: this.fontSize})
    //     }
    // }
})