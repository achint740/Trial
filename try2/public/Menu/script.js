alert('Connected!!');
let test1 = $('.add');

test1.on('click',function(){
    let obj = {
        name : ($(this).parent()).siblings(".name").children().text(),
        price : +(($(this).parent()).siblings(".price").children().text())
    };
    $.post('/addcart',obj,(data)=>{
        if(data == 'Success')
            alert('Yass!!');
    });
});