class User {
  #id = 0;
  #name = "";
  #email = "";
  #password = "";
  #address = "";
  #history = [];
  #cart = [];
  #fav = [];

  constructor(id, name, email, password, address, history, cart, fav) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#password = password;
    this.#address = address;
    this.#history = history;
    this.#cart = cart;
    this.#fav = fav;
  }

  // Setters
  setId(id) {
    this.#id = id;
  }

  setName(name) {
    this.#name = name;
  }

  setEmail(email) {
    this.#email = email;
  }

  setPassword(password) {
    this.#password = password;
  }

  setAddress(address) {
    this.#address = address;
  }

  setHistory(history) {
    this.#history = history;
  }

  setCart(cart) {
    this.#cart = cart;
  }

  setFav(fav) {
    this.#fav = fav;
  }

  // Getters
  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getEmail() {
    return this.#email;
  }

  getPassword() {
    return this.#password;
  }

  getAddress() {
    return this.#address;
  }

  getHistory() {
    return this.#history;
  }

  getCart() {
    return this.#cart;
  }

  getFav() {
    return this.#fav;
  }

  /*Methods*/

  /*Buy */
    buy(){
        if (this.#cart.length === 0) {
            console.log("The cart is empty!");
            return;
        }

        // Add producs from cart to history
        this.#history.push(...this.#cart);

        // Clear Cart
        this.#cart = [];
    }


    addCart(product){
        this.#cart=this.#cart.push(product)
    }

    removeCart(product){
        // Find index in cart
        const index = this.#cart.indexOf(product);

        // If exists,remove
        if (index !== -1) {
            this.#cart.splice(index, 1);
        } else {
            console.log("This product don't exist in cart!");
        }
    }

    clearCart(){
        this.#cart=[]
    }

    addFav(product){
        this.#fav.push(product)
    }

    remFav(product){
        // Find index in fav
        const index = this.#fav.indexOf(product);

        // If exists,remove
        if (index !== -1) {
            this.#fav.splice(index, 1);
        } else {
            console.log("This product don't exist in fav!");
        }
    }

}

//Create Array
export let userDoc=[]

// Return the user that's authenticated
export function userAuth() {
    return JSON.parse(sessionStorage.userlog);
}