exports.handler = async (event) => {
  const [x1, x2] = event.path.split('/').slice(-2); // Получаем x1 и x2 из URL
  const result = Math.pow(Number(x1), Number(x2));
  
  return {
    statusCode: 200,
    body: result.toString(),
    headers: {
      "Content-Type": "text/plain"
    }
  };
};
