var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
mongoClient.connect(url, (err, server) => {
    if (!err) {

        var database = server.db("angulardb");
        var data = [{
            ProductId: 1,
            Name: "Samsung Tv",
            Price: 40000.30,
            Mfd: new Date("2019/3/20"),
            Photo: "assets/tv.jpg",
            CategoryId: 1
        },
        {
            ProductId: 2,
            Name: "Mobile",
            Price: 20000.30,
            Mfd: new Date("2019/4/25"),
            Photo: "assets/phone.jpg",
            CategoryId: 2
        },
        {
            ProductId: 3,
            Name: "Nike Casual",
            Price: 15000.30,
            Mfd: new Date("2019/5/20"),
            Photo: "assets/shoe.jpg",
            CategoryId: 1
        }, {
            ProductId: 4,
            Name: "Lee Cooper Boot",
            Price: 4000.30,
            Mfd: new Date("2019/6/27"),
            Photo: "assets/lee.jpg",
            CategoryId: 2
        }, {
            ProductId: 5,
            Name: "Lenovo laptop",
            Price: 50000.30,
            Mfd: new Date("2019/2/20"),
            Photo: "assets/laptop.jpg",
            CategoryId: 1
        },];
        database.collection("tblproducts").insert(data, (err, result) => {
            if (!err) {
                console.log("Record inserted");
            } else {
                console.log(err);
            }

        })

    } else {
        console.log(err);
    }

})