import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { MercadoPagoConfig, Preference } from 'mercadopago';
// import { parse } from 'path';


// const key: string = process.env.NEXT_PUBLIC_API_KER;
// const v1: string = process.env.NEXT_PUBLIC_BASE_API_VERSION;
const token: string = process.env.NEXT_PUBLIC_SERVICE_ACCESS_TOKEN;
const url: string = process.env.NEXT_PUBLIC_DOMAIN_URL
const urls: string = process.env.NEXT_PUBLIC_DOMAIN_URLS

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

//* Crea la orden de pago
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const params = req.body
    await runMiddleware(req, res, corsMiddleware);
    const preference = new Preference(client);

    try {
        /** 
        * Crear una orden de compra
        * @param id: id del item 
        * @param title: titulo del item
        * @param currency_id: tipo de moneda
        * @param picture_url: url de la imagen del item
        * @param description: descripciòn del item
        * @param category_id: categoria del item
        * @param quantity: cantiad
        * @param unit_price: precio del item
        */
        const response = await preference.create({
            body: {
                items: [
                    {
                        id: params?.id,
                        title: params?.title,
                        currency_id: "COL",
                        picture_url: params?.image,
                        description: params?.description,
                        category_id: "curso",
                        quantity: 1,
                        unit_price: 10000
                    }
                ],
                payer: {
                    name: params?.name,
                    surname: params?.lastName,
                    email: params?.email,
                    phone: {
                        area_code: "57",
                        number: params?.phone
                    }
                },
                notification_url: `${url}/api/webhook`,
                back_urls: {
                    success: `${urls}/success`
                },
            }
        })
        const data = await response
        res.send(data)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
