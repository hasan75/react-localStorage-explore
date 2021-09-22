//use local storage as your database for now
const getDb = () => localStorage.getItem('shopping_cart');

const addToDb = (id) => {
    const exists = getDb();
    let shopping_cart = {};
    if(!exists){
        shopping_cart[id] = 1;
    }
    else{
        shopping_cart = JSON.parse(exists);
        if(shopping_cart[id]){
            const new_count = shopping_cart[id] + 1;
            shopping_cart[id] = new_count;
        }
        else{
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
    
}

const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));

}



const removeFromDb = id => {
    const exists = getDb();
    if(!exists){

    }
    else{
       const shopping_cart = JSON.parse(exists);
       delete shopping_cart[id];
       updateDb(shopping_cart)
    }
}

export { addToDb, removeFromDb as deleteFromDb }