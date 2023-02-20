let items=[];
function AddItem(name, price){
    let newItem ={
        Name: name,
        Price: price
    };
    items.push(newItem);
}

function ShoppingCart(p){
let Reciept="";
    items.forEach((p)=><li>p.Name</li>>)

    return Reciept;}

    document.querySelector("main").innerHTML=
    <ol>
        ${ShoppingCart(items)}
    </ol>



