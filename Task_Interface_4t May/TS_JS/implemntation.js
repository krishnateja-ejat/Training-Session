/**
 * Created by semantic on 4/5/17.
 */
var products=[];
var  oTable;
var i=0;
 function add()
{
    $(document).ready(function () {

        var name=$("#p_name").val();
        var category=$("#p_category").val();
        var price=$("#p_price").val();
        var product = { name: name, category: category,price:price };
        var obj=values(product);
        products.push(obj)
        document.getElementById("myForm").reset();
        display()
    })
}
function sort() {
   function compare(a, b) {
        const genreA = a.name.toUpperCase();
        const genreB = b.name.toUpperCase();

        var comparison = 0;
        if (genreA > genreB) {
            comparison = 1;
        } else if (genreA < genreB) {
            comparison = -1;
        }
        return comparison;
    }

    products.sort(compare)
    display()
}

function display() {
   for(i=0;i<products.length;i++)
   {
       console.log(products[i].name)
       console.log(products[i].category)
       console.log(products[i].price)
   }

}

