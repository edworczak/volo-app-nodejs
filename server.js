import fs from 'node:fs';
import express from 'express';

const port = 3003;

export const serveData = (data) => {
    const file = fs.readFileSync(`data/${data}.json`, {
        encoding: 'utf8',
    })
    return JSON.parse(file)
}

const server = express();

server.get('/events', (req, res) => {
    res.send(serveData('events'))
})

server.get('/events/:id', (req, res) => {
    const event = serveData('events').find((event) => event.id === req.params.id);
    res.send(event)
})

server.get('/events-volo', (req, res) => {
    res.send(serveData('events-volo'))
})

server.listen(port);
console.log('volo app');