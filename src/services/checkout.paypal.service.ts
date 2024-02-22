

export class CheckoutServicePaypal {
    static merchantOrders = async (
        id: number,
        price: number,
        title: string,
        description: string,
        image: string
    ) => {
        try {
            const response = await fetch(`/api/paypal/order`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    price: price,
                    title: title,
                    description: description,
                    image: image
                })
            })
            const res = await response.json()
            return res
        } catch (error) {
            console.log(error)
        }
    }
}