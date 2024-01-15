document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Arabica", img: "1.jpg", price: 67900 },
      { id: 2, name: "Robusta", img: "2.jpg", price: 37800 },
      { id: 3, name: "Liberica", img: "3.jpg", price: 110000 },
      { id: 4, name: "Excelsa", img: "4.jpg", price: 105000 },
      { id: 5, name: "Bourbon", img: "5.jpg", price: 120000 },
      { id: 6, name: "Typica", img: "6.jpg", price: 75000 },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // Check if there's same items in cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // If cart empty
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // If the item is available, check whether the item is different or the same as the one in the cart
        this.items = this.items.map((item) => {
          // if the item is different
          if (item.id !== newItem.id) {
            return item;
          } else {
            // if the item already exists, add quantity and total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // delete items by id
      const cartItem = this.items.find((item) => item.id === id);
      // if item is more than 1
      if (cartItem.quantity > 1) {
        // search one by one
        this.items = this.items.map((item) => {
          // if not the item clicked
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // if only one item remains
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// convert to real currency
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
