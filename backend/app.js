import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use('/', (req, res) => {
    res.send('Welcome to AI powered Chat Application!!');
});

app.listen(5000, console.log('Server started at port 5000'));