// Корзина Онлайн Магазина

const cart = {
    value: 0,
    items: [],
    getItems() {
        return this.items
    },
    add(product) {
        const { items } = this

        for (const item of items) {
            if (item.name === product.name) {
                console.log("Такой продукт уже есть", product.name)
                item.quantity += 1
                return
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }
        this.items.push(newProduct)
    },
    remove(productName) {
        const { items } = this
        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i]
            if (productName === name) {
                console.log("Нашли такой продукт", productName)
                items.splice(i, 1)
                console.log("Удалили этот продукт", productName)
            }
        }
    },
    clear() {
        this.items = []
    },
    countTotalPrice() {
        const { items } = this
        let total = 0
        for (const { price, quantity } of items) {
            total += price * quantity
        }
        return total
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (productName) {
                item.quantity += 1
                return
            }
        }
    },
    decreaseQuantity() {
        console.log("decrement -> this", this)
        this.value -= 1
    },
}

cart.add({ name: "🍎", price: 50 })
cart.add({ name: "🍇", price: 60 })
cart.add({ name: "🍑", price: 60 })
cart.add({ name: "🍌", price: 110 })

console.log(cart.getItems())
console.log("Total: ", cart.countTotalPrice())
