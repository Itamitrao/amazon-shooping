$(function () {

    var data = ["select all category", "Electronics", "Footwear", "Mens Fashion"];

    var electronics = ["Select Electronics", "JBL Speakers", "Ear Pods"];
    var footwear = ["Select Footwear", "Nike sports", "Nike Casuals"];
    var mensFashion = ["Select Fashion", "T-Shirts", "Full t-Shirts"];
    var product = [];



    var productPerview = [

        { Name: "JBL Speakers", Price: "35000", Photo: "../assets/image/jbl.jpg" },
        { Name: "Ear Pods", Price: "22000", Photo: "../assets/image/ear.jpg" },
        { Name: "Nike Casuals", Price: "12000", Photo: "../assets/image/shoe1.jpg" },
        { Name: "Nike sports", Price: "20000", Photo: "../assets/image/shoe2.jpg" },
        { Name: "T-Shirts", Price: "1000", Photo: "../assets/image/t-shirt.jpg" },
        { Name: "Full t-Shirts", Price: "1500", Photo: "../assets/image/full-tshirt.jpg" },

    ];
    var cartitems = [];



    $.each(data, function (property, value) {

        $(`<option>${value}</option>`).appendTo("#selecttxt");

    });
    function LoadProducts() {
        $("#productslt").html("");
        $.each(product, function (property, value) {
            $(`<option>${value}</option>`).appendTo("#productslt");

        })
    };


    $("#selecttxt").change(function () {
        switch ($("#selecttxt").val()) {

            case "Electronics":
                product = electronics;
                LoadProducts();
                break;

            case "Footwear":
                product = footwear;
                LoadProducts();
                break;

            case "Mens Fashion":
                product = mensFashion;
                LoadProducts();
                break;
            default:
                product = ["Select a category"];
                LoadProducts();

        }
    });

    var searchitem;
    $("#productslt").change(function () {
        var selectedproduct = $("#productslt").val();
        searchitem = productPerview.find(function (product) {
            return product.Name == selectedproduct;
        });
        $("#lblname").html(searchitem.Name);
        $("#lblprice").html("&#8377;" + searchitem.Price + "/-");
        $("#lblphoto").attr("src", searchitem.Photo);
    });

    function getcount() {
        $("#lblCount").html(cartitems.length);
    };

    $("#addcart").click(function () {
        cartitems.push(searchitem);
        alert("Item added to cart");
        getcount();
    })



    $("#cartshow").click(function () {
        $("#tbody").html("");
        $.each(cartitems,function(property,value){

            $(`<tr><td>${value.Name}</td><td>${value.Price}</td><td><img src= ${value.Photo} width = "100px" height ="100px"></td></tr>`).appendTo("#tbody");
        });


    });













});