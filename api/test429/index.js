module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  delete req.headers.authorization;
  context.log('Request Headers = ' + JSON.stringify(req.headers));

  const retryAfter = req.query.retryAfter;
  const retryAttempt = req.headers['retry-attempt'];

  context.res = {
    status: 429,
    headers: { 'retry-after': retryAfter },
  };

  context.log('Retry-Attempt = ' + retryAttempt);
  context.log('Response Headers = ' + JSON.stringify(context.res.headers));
};
