var http = require('http');


var creatRouter = function (port) {

    var api = {};
    var routers = {};
    var methods = ['GET', 'POST', 'OPTIONS'];
    var interceptors = [];

    methods.forEach(function (method) {
        routers[method] = {};
        api[method.toLowerCase()] = function (path, fn) {
            routers[method][path] = fn;
        };
    });

    api.interceptor = function (interceptor) {
        interceptors.push(interceptor);
    }

    var executeInterceptor = function (number, req, res) {
        var interceptor = interceptors[number];
        if (!interceptor) return;
        interceptor(req, res, function () {
            executeInterceptor(++number, req, res);
        })
    }

    var handleBody = function (req, res, next) {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        });
        req.on('end', function () {
            req.body = Buffer.concat(body).toString();
            next();
        });
    }

    http.createServer(function (req, res) {
        handleBody(req, res, function () {
            executeInterceptor(0, req, res);
            if (!routers[req.method][req.url]) {
                res.statusCode = 404;
                return res.end();
            }
            routers[req.method][req.url](req, res);
        });
    }).listen(port);
    return api;

}

module.exports = creatRouter;