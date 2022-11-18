$('#category-tabs li a').click(function(){
    $(this).next('ul').slideToggle('500');
    $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle')
});