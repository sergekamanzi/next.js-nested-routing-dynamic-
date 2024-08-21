export default function productdetails( {params} : {
    params : {productID: string}
} ) {
    return <h1>details about products {params.productID}</h1>;
}
