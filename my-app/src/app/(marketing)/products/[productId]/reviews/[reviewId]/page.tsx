import {notFound} from "next/navigation"

export default async function ReviewProduct ({ 
params,
}: {
    params: Promise<{productId: string; reviewId: string}>;
}) {
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000){
        notFound();
    } 
    return <h1>Review number: {reviewId} for product {productId} </h1>
}

// export default async function ReviewProduct( {
//     params,
// }: {
//     params: Promise<{ reviewId: string }>;
// }) {
//     const productId = (await params).reviewId;
//     return <h1>Product detail</h1>;
// }

