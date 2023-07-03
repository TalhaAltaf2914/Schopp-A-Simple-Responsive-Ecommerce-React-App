const updateLocalStorageCart = (updatedCart) => {
    try{
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('hihihihi')
    }
    catch(err){
        console.log(err);
    }
}

export default updateLocalStorageCart