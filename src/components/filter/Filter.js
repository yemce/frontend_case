export const filterProducts = (products, filters) => {
  const { priceRange, category, rating, stockStatus, discount, newProducts, searchQuery = "" } = filters;

  // Arama sorgusu 3 karakterden küçükse, arama yapılmaz
  if (searchQuery.length < 3) {
    return products?.filter((product) => {
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const ratingMatch = product.rating >= rating;
      const stockMatch = stockStatus ? (stockStatus === 'high' ? product.stock > 10 : product.stock <= 10) : true;
      const discountMatch = discount ? product.discountPercentage > 0 : true;
      const newProductMatch = newProducts ? new Date(product.meta.createdAt) > new Date() - 30 * 24 * 60 * 60 * 1000 : true;

      // Category match
      const categoryMatch = category ? product.category.toLowerCase().includes(category.toLowerCase()) : true;

      return priceMatch && ratingMatch && stockMatch && discountMatch && newProductMatch && categoryMatch;
    });
  }

  // Arama sorgusu 3 veya daha fazla karakterse, arama yapılır
  return products?.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = product.rating >= rating;
    const stockMatch = stockStatus ? (stockStatus === 'high' ? product.stock > 10 : product.stock <= 10) : true;
    const discountMatch = discount ? product.discountPercentage > 0 : true;
    const newProductMatch = newProducts ? new Date(product.meta.createdAt) > new Date() - 30 * 24 * 60 * 60 * 1000 : true;

    // Search query match for Product Name and Category
    const searchMatch = searchQuery
      ? (product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;

    // Category match
    const categoryMatch = category ? product.category.toLowerCase().includes(category.toLowerCase()) : true;

    return priceMatch && ratingMatch && stockMatch && discountMatch && newProductMatch && searchMatch && categoryMatch;
  });
};
