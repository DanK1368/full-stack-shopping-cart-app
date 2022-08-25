export const PRODUCT_QUERY = `
query{
       products {
         data {
          id
           attributes {
             title
             description
             slug
             price
             image {
               data {
                 attributes {
                  formats
                 }
               }
             }
           }
         }
       }
     }
`;

export const GET_SINGLE_PRODUCT = `
     query getProduct($slug: String!) {
        products(filters: {slug: {eq: $slug}}) {
          data {
            attributes {
              title
              slug,
              description,
              price,
              image {
                data {
                  attributes {
                    formats
                  }
                }
              }
            }
          }
        }
     }
`;
