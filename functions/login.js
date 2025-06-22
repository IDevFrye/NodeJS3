exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: "andrey.kostin.111",
    headers: {
      "Content-Type": "text/plain"
    }
  };
};
