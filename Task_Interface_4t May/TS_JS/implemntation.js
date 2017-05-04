/**
 * Created by semantic on 4/5/17.
 */
var products=[];
var i=0;
 function add()
{
    $(document).ready(function () {

        var name=$("#p_name").val();
        var category=$("#p_category").val();
        var price=$("#p_price").val();
        var product = { name: name, category: category,price:price };
        products.push(values(product));
       // alert(i)
        i++;

    })
}
function sort() {
    products.sort(compare);
}
function compare(a,b) {
    if (a.last_nom < b.last_nom)
        return -1;
    if (a.last_nom > b.last_nom)
        return 1;
    return 0;
}
function display() {
     alert(products.length)
    for(i=0;i<products.length;i++)
    {
        console.log(products[i].name);
        console.log(products[i].category);
        console.log(products[i].price);

    }
}

