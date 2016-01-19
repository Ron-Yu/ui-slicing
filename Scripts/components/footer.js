define(['knockout', 'text!components/footer.html'], function(ko, htmlString) {
    function FooterComponentViewModel(params) {
    };
    return { 
        viewModel: {
            createViewModel:function(params,componentInfo){
                return new FooterComponentViewModel(params);
            }
        },
        template: htmlString
    };
});