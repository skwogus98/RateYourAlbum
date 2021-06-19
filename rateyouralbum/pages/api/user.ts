import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../connection.ts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const query: string = 'select * from userDB'
		const [ rows, fields ] = await db.execute(query)

		//console.log(rows)
		res.status(200).json(rows)
	} catch (err) {
		return res.status(500).json(err)
	}
}