export const mapProduct = (product) => {
  return {
    id: product.id,
    name: product.name,
    category: product.category?.slug || "",
    tags: product.tags?.map((tag) => tag.name) || [],

    variants:
      product.variants
        ?.filter((variant) => variant.is_active === 1)
        .map((variant) => ({
          id: variant.id,
          weight: variant.weight,
          price: Number(variant.price),
          stock: variant.stock,
          sku: variant.sku,
        })) || [],

    image: product.image,
    backImage: product.back_image,

    slug: product.slug,
    shortDescription: product.short_description,
    description: product.description,
    isBestSeller: product.is_best_seller,
    isActive: product.is_active,
  };
};

export const mapCategory = (category) => {
  return {
    id: category.slug,
    label: category.name,
  };
};
