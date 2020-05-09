import { NextApiRequest, NextApiResponse} from "next";

/**
 * API
 *
 * @param _
 * @param res
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello'})
}