const ProductService = require('../src/ProductService');

describe('ProductService (Async Testing)', () => {
  let service;

  beforeEach(() => {
    service = new ProductService();
  });

  // Test 1: Caso exitoso
  test('debería agregar un producto de forma asíncrona', async () => {
    const productData = { name: 'Teclado Mecánico', price: 85000 };
    
    const savedProduct = await service.addProduct(productData);
    
    expect(savedProduct).toHaveProperty('id');
    expect(savedProduct.name).toBe('Teclado Mecánico');
  });

  // Test 2: Caso de error (Validación de precio)
  test('debería lanzar un RangeError si el precio es negativo', async () => {
    const badProduct = { name: 'Mouse', price: -10 };

    // Para capturar errores asíncronos en Jest usamos .rejects.toThrow
    await expect(service.addProduct(badProduct)).rejects.toThrow(RangeError);
  });

  // Test 3: Obtener producto por ID
  test('debería buscar y retornar un producto por su ID', async () => {
    const saved = await service.addProduct({ name: 'Monitor', price: 450000 });
    
    const found = await service.getProductById(saved.id);
    
    expect(found.name).toBe('Monitor');
  });

  // Test 4: Error al buscar ID que no existe
  test('debería lanzar un error si el producto no existe', async () => {
    await expect(service.getProductById(999)).rejects.toThrow('Producto no encontrado.');
  });
});