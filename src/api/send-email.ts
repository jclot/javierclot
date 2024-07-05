import type { NextApiRequest, NextApiResponse } from 'next'
import emailjs from '@emailjs/browser'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { name, email, message } = req.body

    try {
        await emailjs.send(
            process.env.SERVICE_ID!,
            process.env.TEMPLATE_ID!,
            { name, email, message },
            process.env.PUBLIC_KEY!
        )

        res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        console.error('Failed to send email:', error)
        res.status(500).json({ message: 'Failed to send email' })
    }
}