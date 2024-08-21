export default function reviewdetail( {params} : {
    params: {
        productID: string
        reviewsID: string
    }
}) {
    return ( <h1>
                reviews {params.reviewsID} for product {params.productID}
          </h1>
    );
}
