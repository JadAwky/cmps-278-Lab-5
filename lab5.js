var slider = document.getElementById("slider");

function getSize() {
    return document.getElementById("slider").value
}

function getMeat() {
    var toppings = [];
    var checkboxes = document.getElementById("toppings").getElementsByTagName("input");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            toppings.push(checkboxes[i].name); 
        } 
    }
    return toppings
}

function getVeg() {
    var veggies = [];
    var checkboxes = document.getElementById("veggies").getElementsByTagName("input");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            veggies.push(checkboxes[i].name); 
        } 
    }
    return veggies
}

function getCheese() {
    var radios = document.getElementById("cheese").getElementsByTagName("input")
    var cheesevalue = null;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == "Regular Cheese") {
                cheesevalue = 1
            }
            else if (radios[i].value == "No Cheese") {
                cheesevalue = 2
            }
            else if (radios[i].value == "Extra Cheese") {
                cheesevalue = 3
            }
        }
    }
    return cheesevalue;
}

function ChangePizzaSize() {
    var slidervalue = getSize();

    var PizzaSize = document.getElementById("PizzaSizeText");
    var PizzaImg = document.getElementById("PizzaImg");

    if (slidervalue === "1") {
        PizzaSize.textContent = "Small " + "6" + "$";
        PizzaImg.style.width = "100px";
        PizzaImg.style.height = "100px";
    } 
    else if (slidervalue === "2") {
        PizzaSize.textContent = "Medium " + "10" + "$";
        PizzaImg.style.width = "150px";
        PizzaImg.style.height = "150px";
    } 
    else if (slidervalue === "3") {
        PizzaSize.textContent = "Large " + "14" + "$";
        PizzaImg.style.width = "200px";
        PizzaImg.style.height = "200px";
    } 
    else if (slidervalue === "4") {
        PizzaSize.textContent = "X-Large " + "16" + "$";
        PizzaImg.style.width = "250px";
        PizzaImg.style.height = "250px";
    } 
}

function calculateTotal() {
    var slidervalue = getSize();
    var PizzaPrice = null;

    if (slidervalue == "1") {
        PizzaPrice = 6;
    }
    else if (slidervalue == "2") {
        PizzaPrice = 10;
    }
    else if (slidervalue == "3") {
        PizzaPrice = 14;
    }
    else if (slidervalue == "4") {
        PizzaPrice = 16;
    }

    var CheesePrice = null;

    if (getCheese() == 3) {
        CheesePrice = 3;
    }
    
    return PizzaPrice + getMeat().length * 2 + getVeg().length + CheesePrice;
}


function getCheeseValue() {
    var radios = document.getElementById("cheese").getElementsByTagName("input")
    var cheesevalue = null;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            cheesevalue = radios[i].value
        }
    }
    return cheesevalue;
}

function PizzaSize() {
    var slidervalue = getSize();
    var pizzaSize = null;

    if (slidervalue == "1") {
        pizzaSize = "Small";
    }
    else if (slidervalue == "2") {
        pizzaSize = "Medium";
    }
    else if (slidervalue == "3") {
        pizzaSize = "Large";
    }
    else if (slidervalue == "4") {
        pizzaSize = "X-Large";
    }
    return pizzaSize
}

function fillSummary() {
    var OrderSummary = document.getElementById("dlvrTo");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var phonenumber = document.getElementById("phonenumber");
    var city = document.getElementById("city");
    var address = document.getElementById("address");

    OrderSummary.textContent = firstname.value + ' ' + lastname.value + ', ' + email.value + ', ' + phonenumber.value + ', ' + city.value + '-' + address.value;

    var orderList = document.getElementById("orderList");
    orderList.innerHTML = ""
    let li = document.createElement("li");
    li.appendChild(document.createTextNode('-' + PizzaSize() + ' size'))
    orderList.append(li);

    var all = [];
    
    all = all.concat(getMeat());
    all = all.concat(getVeg());
    all = all.concat(getCheeseValue());
    
    for (let i = 0; i < all.length; i++) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(all[i]));
        orderList.appendChild(li);
    }

    var total = document.getElementById('total');
    total.innerHTML = 'Total: ' + calculateTotal() + ' $';
}

function gotoPage(value) {
    if (value == "ex1") {
        document.getElementById("ex1").style.display="inherit";
        document.getElementById("ex2").style.display="none";
        document.getElementById("OrderSummary").style.display="none";
        document.body.style.backgroundColor = "#01dddd";
    }
    if (value == "ex2") {
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="inherit";
        document.getElementById("OrderSummary").style.display="none";
        document.body.style.backgroundColor = "#e93a57";
    }
    if (value == "ordersummary") {
        if (checkInfo() == true) {
            document.getElementById("ex1").style.display="none";
            document.getElementById("ex2").style.display="none";
            document.getElementById("OrderSummary").style.display="inherit";
            document.body.style.backgroundColor = "#3fc38e";
        } 
        else if (checkInfo() == false) {
            alert("Please fill all fields!!!")
        }
    }
}

function checkInfo() {
    var ex2details = document.getElementById("ex2").getElementsByClassName("ex2info");
    for (let i = 0; i < ex2details.length; i++) {
      if (ex2details[i].value == "") 
        return false;
    }
    return true;
}
