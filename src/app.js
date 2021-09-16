const express = require('express');
const app = express();
//console.log(app); 
const port = 3001;
const projectURLs = ["/p5js01","/p5js02"];
const path = require('path');
const router = express.Router();

router.get("/p5js01", (req, res) => {
    res.sendFile(path.join(__dirname+'/views/p5js01.html'));
});

app.use(express.static('src'));

app.use('/',router);
app.listen(port, ( ) => {
    console.log("listening on port " + port);
    projectURLs.forEach(element => {
        console.log(`listening at http://localhost:${port}${element}`);
    });
}); 
