define(['knockout', 'text!components/header.html'], function(ko, htmlString) {
    function HeaderComponentViewModel(params) {
        // Data: value is either null, 'like', or 'dislike'
        this.headerVM = params.value;
    };
    return { 
        viewModel: {
            createViewModel:function(params,componentInfo){
                return new HeaderComponentViewModel(params);
            }
        },
        template: htmlString };
});