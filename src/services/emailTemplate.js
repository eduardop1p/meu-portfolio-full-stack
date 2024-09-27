export default function emailTemplate({ email, name, message }) {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333333;
        }
        p {
          color: #555555;
        }
      </style>
      <title>Disponibilidade para Vaga - Desenvolvedor Full Stack</title>
    </head>
    <body>
      <div class="container">
        <h1>Oportunidade de Desenvolvedor Full Stack</h1>
        <p>Olá Eduardo, me chamo ${name}</p>
        <p>${message}</p>
        <p>
          Atenciosamente
          <br>
          ${name}: ${email}
        </p>
      </div>
    </body>
    </html>
  `;
}
