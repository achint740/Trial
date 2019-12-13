// let total = +(0);

function refresh(){
    $('#mycart').empty();
    $.get('/getcart',(data)=>{
        for(let y of data){
            $('#mycart').append(
                $('<li>').append(
                    `<b>${y.name}</b>  `,
                    y.price
                )
            )
            //1
            // let mx =  +(y.price);
            // console.log(mx);
            // total = +(+total + +mx);
            // alert(total);
            //2
            // total+=y.price;
        }
    });
    // x.append(`<b>${total}</b>`);
};

