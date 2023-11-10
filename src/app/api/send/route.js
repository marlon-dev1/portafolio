// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_JRDfWbcc_DWHx5ggxnvVgLj5dWcGGT4uC');
const fromEmail = 'onboarding@resend.dev';

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: 'varon.marlon83@gmail.com',
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>{email}</p>
                    <p>{message}</p>
                </>
            ),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
