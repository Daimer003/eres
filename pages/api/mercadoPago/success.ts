import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const token: string = process.env.NEXT_PUBLIC_SERVICE_ACCESS_TOKEN;

//*Configuracion de mercadopago
const client = new MercadoPagoConfig({ accessToken: token, options: { timeout: 5000 } });

const corsMiddleware = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
});

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

//*Busca la orden aprobada
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.body
    await runMiddleware(req, res, corsMiddleware);
    const payment = new Payment(client);

    try {
        const data = await payment.get({ id: id.id })
        res.send(data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}