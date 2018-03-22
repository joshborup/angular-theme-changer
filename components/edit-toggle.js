angular.module('themechanger').component('editToggle', {
    templateUrl:'./templates/edit-toggle.html',
    bindings: {
        editToggle: '<',
        update:'&'
    }
})