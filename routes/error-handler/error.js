const wrap = fn => (req, res, next) => {
    fn(req,res,next).catch((error) => next(error));
};

function appErrorHandler(error, req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(500).send(`something wen't wrong`);
    }
    res.status(500).send(`DEVELOPMENT ERROR: 👍👍, ${error.stack} `);
}

function appGuards() {
    process.on('uncaughtException', (error) => {
        console.error(error);
        process.exit();
    });

    process.on('unhandledRejection', (error) => {
        console.error(error);
    })
}

function notFound(req, res) {
    res.status(404).send('404');
}

module.exports = {
    wrap,
    appGuards,
    appErrorHandler,
    notFound
}