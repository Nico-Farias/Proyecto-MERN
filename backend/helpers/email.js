import nodemailer from 'nodemailer'


export const emailRegistro = async (datos) => {

    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    //Informacion del email

    const info = await transport.sendMail({
        from: '"UpTask - Adminitrados de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Confirma tu cuenta",
        text: "Confirma tu cuenta en UpTask",
        html: `<p>Hola: ${nombre} confirma tu cuenta en UpTask</p>
        <p>Tu cuenta ya casi esta lista, solo debes confirmarla en el siguiente enlace:
        </p>

        <a href='${process.env.FRONTEND_URL1}/confirmar/${token}'>Confirmar Cuenta</a>

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>

        `
    })

}

export const emailOlvidePassword = async (datos) => {

    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //Informacion del email

    const info = await transport.sendMail({
        from: '"UpTask - Adminitrados de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:
        </p>

        <a href='${process.env.FRONTEND_URL1}/olvide-password/${token}'>Reestablecer password</a>

        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>

        `
    })

}