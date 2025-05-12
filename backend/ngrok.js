import ngrok from 'ngrok';

(async function() {
  const url = await ngrok.connect({
    addr: 4000, // порт твоего локального сервера
    authtoken: '2wcwMn4HyNvHW6kBp8IXSrfxP4j_5hzb8Hvtkgx7pEnY4ZFBN', // можно хранить в .env
    region: 'eu', // или 'us', 'ap', если нужно
  });

  console.log(`ngrok tunnel running at: ${url}`);
})();
