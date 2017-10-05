var router = require('./router.js');

var app = router(3000);

var operadoras = [
    { nome: "Oi", codigo: 14, categoria: "Celular" },
    { nome: "Tim", codigo: 15, categoria: "Celular" },
    { nome: "Vivo", codigo: 16, categoria: "Celular" },
    { nome: "NET", codigo: 18, categoria: "Fixo" },
    { nome: "GVT", codigo: 32, categoria: "Fixo" }
];

var contatos = [
    { nome: "Phellipe", telefone: "1231-1233", data: new Date(), operadora: { nome: "Vivo", codigo: "16", categoria: "Celular" } },
    { nome: "Mariane", telefone: "1231-1233", data: new Date(), operadora: { nome: "Vivo", codigo: "16", categoria: "Celular" } }
];


app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});


app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    let contato = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
})

app.options('/contatos', function (req, res) {
    res.end();
})
