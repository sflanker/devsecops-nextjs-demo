import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) : Promise<void> {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        res.status(200).json({ time: new Date().toString() });
        resolve();
      },
      2000
    )
  })
}