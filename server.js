import express from 'express';
import { hostname } from 'os';
import open from 'open';
import morgan from 'morgan';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set("host", "http://localhost");
app.use(express.static('out'));
app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    var h = `${(app.get('host') || hostname() || 'unknown')}:${app.get('port')}`;
    console.log(`Express server listening at ${h}`);

    open("http://localhost:3000");
});
