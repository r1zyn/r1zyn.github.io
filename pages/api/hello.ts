import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<string>
): void {
    res.status(200).send("You found a secret easter egg!");
}
