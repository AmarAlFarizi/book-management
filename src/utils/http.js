const responeJson = (res, data, msg, code) => {
    res.status(code).json({
        message: msg,
        data: data
    });
};

module.exports={
    responeJson,
};