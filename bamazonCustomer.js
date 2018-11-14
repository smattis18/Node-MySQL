var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
  });
  
  connection.connect();

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("-----------------------------------\nSHOP OUR GREAT SELECTION");
        for (var i = 0; i < res.length; i++) {
            console.log("-----------------------------------");
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        };
        console.log("\n");
        placeOrder(res);
    });

  function placeOrder(res) {
    var res = res;
    
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the item id for your item:",
        name: "item_id"
      },
      {
        type: "input",
        message: "Enter the quantity for your item:",
        name: "item_quantity"
      },
      {
        type: "confirm",
        message: "Are you sure?:",
        name: "confirm",
        default: true
      }
    ]).then(function(inquirerResponse) {
          if (inquirerResponse.confirm) {
        
            if (inquirerResponse.item_quantity > res[inquirerResponse.item_id - 1].stock_quantity) {
                console.log("Insufficient stock!");
                connection.end();
            } else {
                connection.query("UPDATE products SET ? WHERE ?", 
                [
                  {
                    stock_quantity: res[inquirerResponse.item_id - 1].stock_quantity - inquirerResponse.item_quantity
                  },
                  {
                    item_id: inquirerResponse.item_id
                  }
                ],
                function(err, res) {
                  if (err) throw err;
                });
                var total = inquirerResponse.item_quantity * res[inquirerResponse.item_id - 1].price;
                total = total.toFixed(2);
                console.log("\nYour order total is: $" + total);
                connection.end();
            };

          } else {
              console.log("\nThanks for visiting, please come back once you have decided.");
              connection.end();
          };
    });
  };