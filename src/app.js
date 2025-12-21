document.addEventListener("alpine:init", () => {
  // COMPONENT PRODUCTS
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "DayPack 20 Liter", img: "DayPack.jpeg", price: 20000 },
      { id: 2, name: "Jaket", img: "jaket.jpeg", price: 20000 },
      { id: 3, name: "Tenda", img: "tenda.jpeg", price: 20000 },
      { id: 4, name: "Headlamp baterai", img: "headlamp.jpeg", price: 5000 },
      { id: 5, name: "Topi Rimba", img: "topi.jpeg", price: 12000 },
    ],
    // STATE MODAL
    openModal: false,
    activeItem: null,

    showDetail(item) {
      console.log("DETAIL:", item);
      this.activeItem = item;
      this.openModal = true;
    },
  }));

  // STORE CART
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    // TAMBAH ITEM
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({
          ...newItem,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
      }

      this.quantity++;
      this.total += newItem.price;
    },

    // HAPUS ITEM
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (!cartItem) return;

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.total -= cartItem.price;
      } else {
        this.items = this.items.filter((item) => item.id !== id);
      }

      this.quantity--;
      this.total -= cartItem.price;
    },

    // FORMAT RUPIAH
    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(number);
    },
  });
});

// document.addEventListener("alpine:init", () => {
//   Alpine.data("products", () => ({
//     items: [
//       { id: 1, name: "DayPack 20 Liter", img: "DayPack.jpeg", price: 20000 },
//       { id: 2, name: "Jaket", img: "jaket.jpeg", price: 20000 },
//       { id: 3, name: "Tenda", img: "tenda.jpeg", price: 20000 },
//       { id: 4, name: "Headlamp baterai", img: "headlamp.jpeg", price: 5000 },
//       { id: 5, name: "Topi Rimba", img: "topi.jpeg", price: 12000 },
//     ],
//   }));
// });

// Alpine.store("cart", {
//   items: [],
//   total: 0,
//   quantity: 0,
//   add(newItem) {
//     this.items.push(newItem);
//     this.quantity++;
//     this.total += newItem.price;
//     console.log(this.items);
//   },

//   rupiah(number) {
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR",
//       minimumFractionDigits: 0,
//     }).format(number);
//   },
// });

// document.addEventListener("alpine:init", () => {
//   Alpine.data("products", () => ({
//     items: [
//       { id: 1, name: "DayPack 20 Liter", img: "DayPack.jpeg", price: 20000 },
//       { id: 2, name: "Jaket", img: "jaket.jpeg", price: 20000 },
//       { id: 3, name: "Tenda", img: "tenda.jpeg", price: 20000 },
//       { id: 4, name: "Headlamp baterai", img: "headlamp.jpeg", price: 5000 },
//       { id: 5, name: "Topi Rimba", img: "topi.jpeg", price: 12000 },
//     ],
//   }));

//   Alpine.store("cart",
//   {
//     items: [],
//     total: 0,
//     quantity: 0,

//     add(newItem) {
//     },

//     remove(id) {
//       //ambil item yang mau diremove berdasarkan id nya
//       const cartItem = this.items.find((item) => item.id === id);

//       //jika item lebih dari 1
//       if(cartItem.quantity > 1) {
//         //telusuri satu satu
//         this.items = this.items.map((item) => {
//           //jika bukan barang yang di klik, skip saja
//           if(item.id !== id) {
//             return item;
//           } else {
//             item.quantity--;
//             item.total = item.price * item.quantity;
//             this.quantity--;
//             this.total -= item.price;
//             return item;
//           }
//         })
//       } else if (cartItem.quantity === 1) {
//         //jika barangnya sisa satu
//         this.item = this.items.filter((item) => item.id != id);
//         this.quantity--;
//         this.total -= cartItem.price;
//       }

//     }

//       //cek apakah ada barang yang sama dalam cart
//       const cartItem = this.items.find((item) => item.id === newItem.id);

//       //jika cart kosong/belum ada id yang sama maka...
//       if (!cartItem) {
//         this.items.push({ ...newItem, quantity: 1, total: newItem.price });
//         this.quantity++;
//         this.total += newItem.price;
//       }
//       else {
//         //jika barangnya udah ada dicart , apakah barang sama atau tidak?
//         this.items = this.items.map((item) => {
//           //jika barang berbeda...
//           if (item.id !== newItem.id) {
//             return item;
//           } else {
//             //jika barang sudah ada, tambah saja quantity dan total harga
//             item.quantity++;
//             item.total = item.price * item.quantity;
//             this.quantity++;
//             this.total += item.price;
//             return item;
//           }
//         }),
//       },
//     });
//     },

//     rupiah(number) {
//       return new Intl.NumberFormat("id-ID", {
//         style: "currency",
//         currency: "IDR",
//         minimumFractionDigits: 0,
//       }).format(number);
//     };
// });
