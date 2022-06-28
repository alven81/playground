const buildProductQuery = (id) => `{           
    product (id: "${id}") {
        name
        inStock
        gallery
        description
        brand
        prices {
            currency {
                label
                symbol
            }
            amount
        }
        attributes {
            id
            name
            type
            items {
                displayValue
                value
                id
            }
        }
    }
}`;

const buildCategoryQuery = (id) => `{           
    category (input: {
               title: "${id}"
             })  {
        products {
            id
            name
            inStock
            gallery
            description
                prices {
                    currency {
                        label
                        symbol
                    }
            amount
            }
        }
    }
}`;

const menuQuery = `{
    categories  {
    name
    }
}`;

const currencyQuery = `{
    currencies  {
        label
        symbol
    }
}`;

export { buildProductQuery, buildCategoryQuery, menuQuery, currencyQuery };
