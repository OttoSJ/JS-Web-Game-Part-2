const playerInventory = []
console.log(playerInventory)
let inventory

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom, name){
    let item = newImage(url, left, bottom)
    item.addEventListener("click", function() {
        item.remove()
        
        aquirredInventory(url)
    })
}


function aquirredInventory(url) {
    let inventoryItem = document.createElement("img")
    inventoryItem.src = url
    inventory.appendChild(inventoryItem)
}



function newInventory(){
    inventory = document.createElement('div')
    inventory.setAttribute("id", "container")
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px'
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '75px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

// console.log(inventory)

newInventory()
newImage('assets/green-character.gif', 100, 150)
newImage('assets/tree.png', 200, 350)
newImage('assets/pillar.png', 350, 150)
newImage('assets/pine-tree.png', 450, 250)
newImage('assets/crate.png', 150, 250)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 425, "sword")
newItem('assets/shield.png', 165, 245, "shield")
newItem('assets/staff.png', 600, 120, "staff")





