class ProductService {
  constructor() {
    this.products = [];
  }

  // Simula una operación asíncrona (como guardar en una Base de Datos)
  async addProduct(product) {
    if (!product.name || !product.price) {
      throw new Error('El producto debe tener nombre y precio.');
    }
    if (product.price < 0) {
      throw new RangeError('El precio no puede ser negativo.');
    }
    
    // Simula un pequeño retraso de red
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const newProduct = { id: Date.now(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  async getProductById(id) {
    await new Promise(resolve => setTimeout(resolve, 50));
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new Error('Producto no encontrado.');
    }
    return product;
  }
}

module.exports = ProductService;