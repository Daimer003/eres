import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import fetch from 'node-fetch';

const key: string = process.env.NEXT_PUBLIC_API_KER;
const v1: string = process.env.NEXT_PUBLIC_BASE_API_VERSION;
const token: string = process.env.NEXT_PUBLIC_SERVICE_ACCESS_TOKEN;
const url: string = process.env.NEXT_PUBLIC_BASE_API_URL

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


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, corsMiddleware);

  try {
    const response = await fetch(`${url}/${v1}/payment_methods`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
