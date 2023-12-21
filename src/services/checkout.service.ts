
const key: string = process.env.NEXT_PUBLIC_SERVICE_PUBLIC_kEY;
const v1: string = process.env.NEXT_PUBLIC_BASE_API_VERSION;
const token: string = process.env.NEXT_PUBLIC_SERVICE_ACCESS_TOKEN;

export class CheckoutService {
    static pay = async () => {
        try {
            const response = await fetch(`/api/payments`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'aplication/json',
                },
            })
            const res = await response.json()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    static merchantOrders = async (
        id: number,
        name: string,
        lastName: string,
        email: string,
        phone: number,
        price: number,
        title: string,
        description: string,
        image: string

    ) => {
        try {
            const response = await fetch(`/api/order`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    name: name,
                    lastName: lastName,
                    email: email,
                    phone: phone,
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

    static getSuccess = async (id: string) => {
        try {
            const response = await fetch(`/api/success`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            })

            const res = await response.json()
            return res
        } catch (error) {

        }
    }
}