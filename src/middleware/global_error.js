const {responeJson}=require('../utils/http');

exports.errorHandling = (err, req, res, next) => {
    if (err?.name === 'Bad Request') {
        responeJson(res, null, 400);
        return;
    }
    if (err?.name === 'BNot Found') {
        responeJson(res, null, 400);
        return;
    }

    console.log(err?.meessage);
    responeJson(res, null,"internal_server_error", 500);
    return;
};