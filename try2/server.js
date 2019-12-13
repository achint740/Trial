const exp = require("express");
const app = exp();

app.use(exp.json())
app.use(exp.urlencoded({extended:true})) 

app.use('/',exp.static(__dirname + '/public'));

app.use('/menu',exp.static(__dirname + '/public/Menu'));

app.use('/cart/view',exp.static(__dirname + '/public/CartView'));

let cart = [];
// let total = 0;

app.post('/addcart',function(req,res){
    cart.push(
        {
            name : req.body.name,
            price : +(req.body.price)
        }
    );
    // total = total + req.query.price;
    res.send('Success');
});

app.get('/getcart',(req,res)=>{
    res.send(cart);
});

app.get('*',(req,res)=>{
    res.send('Not Found!!');
});

app.listen(5500,()=>{
    console.log('Server Started!!');
});

