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

export { buildProductQuery, menuQuery, currencyQuery };
