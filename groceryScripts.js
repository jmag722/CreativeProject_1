var foods = new Array();
var i = 0;

function startPage() {
    if (window.localStorage.getItem("foodlist") === undefined) {
        
    }
    else {
        var retrieved = (window.localStorage.getItem("foodlist"));
        foods = JSON.parse(retrieved.split(","));
        display();
    }

}


function addItem(item) {
    foods.push(item);
    window.localStorage.setItem("foodlist", JSON.stringify(foods));
}

// function removeItem(name) {
//     var pos = foods.indexOf(name);
//     if (pos > -1) {
//     foods.splice(pos, 1);
//     window.localStorage.setItem("foodlist", JSON.stringify(foods));
//     }
// }


function display() {
    for (i; i < foods.length; i++) {
        console.log(foods[i]);
        var node = document.createElement("input");
        node.type = "checkbox";
        node.name = foods[i];
        node.value = "value" + i;
        node.id = "val" + i;
    
        var label = document.createElement('label')
        label.htmlFor = node.id;
        // console.log(document.getElementById(node.id).htmlfor);
        // node.onchange=removeItem(document.getElementById(node.id).htmlfor);
    
        var br = document.createElement("br");
    
        label.appendChild(document.createTextNode(foods[i]));
        document.getElementById("groceryList").appendChild(node);
        document.getElementById("groceryList").appendChild(label);
        document.getElementById("groceryList").appendChild(br);
    }
    
}