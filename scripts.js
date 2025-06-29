const products = [
  {
      "photo": "img/big-mac.png",
      "name": "Big Burguer",
      "price": 5.99,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/mc-chicken.png",
      "name": "Chicken",
      "price": 4.99,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/double-cb.png",
      "name": "Double Cheese Burger",
      "price": 2.99,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/fries.png",
      "name": "Batata frita",
      "price": 2.99,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/nuggets.png",
      "name": "Nuggets",
      "price": 3.49,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/salad.png",
      "name": "Salada",
      "price": 2.79,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/cola.png",
      "name": "Coca Cola",
      "price": 1.99,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/lipton.png",
      "name": "Ice Tea",
      "price": 1.99,
      "active": false,
      "quantity": 1
  },
  {
      "photo": "img/water.png",
      "name": "Água",
      "price": 1.49,
      "active": false,
      "quantity": 1
  }
];

const SelfServiceMachine = {
  data() {
    return {
      products: window.products || products,
      message: "oi"
    }
  }, 
  methods: {
    total: function() {
      let total = 0;

      this.products
      .filter(product => product.active)
      .forEach(product => {
          total += product.price * product.quantity;
        });

        return total.toFixed(2);
    }
  }
};

const app = Vue.createApp(SelfServiceMachine);
app.mount('#app');
