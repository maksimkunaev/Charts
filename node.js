const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static('dist'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

;(async function() {

        http.listen(8080, function() {
            console.log('listening on *:8080');
        });
})();
