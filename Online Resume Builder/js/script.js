// form repeater

$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty:false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide:function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() =>{
                generateCV();
            },500);
        },
        
        isFirstItemUndeletable: true

    })
    function preview() {
        var inputText = document.getElementById('inputText').value;
        var previewDiv = document.getElementById('previewDiv');
        previewDiv.innerHTML = inputText;
    }

})