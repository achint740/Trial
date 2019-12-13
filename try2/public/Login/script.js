let btn = $('#imp');
let name = $('#name');
let pin = $('#pswrd');

btn.on('click',function(){
    let x = name.val();
    let y = pin.val();
    let obj = {
        name : x,
        password : y
    }
    alert('Hello');
    console.log(x);
    console.log(y);
    $.post('/adduser',obj,(data)=>{
        console.log('Added User!!');
    });
});