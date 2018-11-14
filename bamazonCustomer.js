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
        connection.end();
    });

  function placeOrder(res) {
    var res = res;
    
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the item id for your first item:",
        name: "item_id"
      },
      {
        type: "input",
        message: "Enter the quantity for your first item:",
        name: "item_quantity"
      },
      {
        type: "confirm",
        message: "Are you sure?:",
        name: "confirm",
        default: true
      }
    ]).then(function(inquirerResponse) {
        console.log(res[inquirerResponse.item_id - 1].stock_quantity - inquirerResponse.item_quantity);
        console.log(inquirerResponse.item_id);
        //console.log(res[inquirerResponse.item_id - 1].stock_quantity);
        
            if (inquirerResponse.item_quantity > res[inquirerResponse.item_id - 1].stock_quantity) {
                console.log("Insufficient stock!");
                return;
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
                function() {}); //this may have to be run as a separate function
            };
    });
  };