import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors"
import paypal from '@paypal/checkout-server-sdk'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY

const enviroment = new paypal.core.SandboxEnvironment(clientId, secretKey)
const client = new paypal.core.PayPalHttpClient(enviroment)

const corsMiddleware = Cors({
    methods: ['GET', 'POST', 'OPTIONS']
})

async function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, rejects) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return rejects(result);
            }
            return resolve(result)
        })
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, corsMiddleware)
    const params = req.body
    console.log(params)
    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "100.00",
                },
            },
        ],
    })

    const response = await client.execute(request)
    res.send(JSON.stringify(response.result.id))
}