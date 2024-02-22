import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const token: string = process.env.NEXT_PUBLIC_SERVICE_ACCESS_TOKEN;

const corsMiddleware = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
});

//*Configuracion de mercadopago
const client = new MercadoPagoConfig({ accessToken: token, options: { timeout: 5000 } });

async function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

//*Espera la confirmacion del pago webhook
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, corsMiddleware);
    const payment = new Payment(client);
    const getPayment = req.query
    try {
        if (getPayment.type === "payment") {
            const data = await payment.get({ id: String(getPayment["data.id"]) })
            res.status(204).json(data);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}