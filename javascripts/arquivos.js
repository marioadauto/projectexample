var data={"produtos":[
        {
            "Nome":"Produto A",
            "Preco":100.00,
            "picture": "http://placehold.it/32x32"
        },
        {
            "Nome":"Produto B",
            "Preco":50.00,
            "picture": "http://placehold.it/32x32"
        }
]}

var output="<ul>";
for (var i in data.produtos) {
    output+="<li>" + data.produtos[i].Nome + "</br> R$" + data.produtos[i].Preco + "<img src="+ data.produtos[i].picture+" /> </li>";
}
output+="</ul>";
var quantidadeProduto = data.produtos.length;
document.getElementById("produto_do_carrinho").innerHTML=output;
document.getElementById("quantidadeProduto").innerHTML=quantidadeProduto;
