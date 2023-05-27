const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const response = await fetch('https://api-endpoint.com/scores', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': '1cd6817a94msh6c8d279955d47c1p1a4036jsn1634e629da9a'
        }
    });
    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
