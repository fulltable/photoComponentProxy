const nr = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');

const axios3001 = axios.create({
  baseURL: 'http://ec2-54-67-119-225.us-west-1.compute.amazonaws.com',
});
const axios3002 = axios.create({
  baseURL: 'http://ec2-54-153-51-4.us-west-1.compute.amazonaws.com',
});
const axios3003 = axios.create({
  baseURL: 'http://ec2-54-67-75-182.us-west-1.compute.amazonaws.com',
});
const axios3004 = axios.create({
  baseURL: 'http://ec2-3-214-157-167.compute-1.amazonaws.com',
});

app.get('/api/restaurants/:id/menus', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/menus/:menu', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus/${req.params.menu}`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/info', (req, res) => {
  axios3003.get(`/api/restaurants/${req.params.id}/info`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  axios3003.get(`/api/restaurants/${req.params.id}/overview`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/photos', (req, res) => {
  axios3002.get(`/api/restaurants/${req.params.id}/photos`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.post('/api/restaurant/:id/photos', (req, res) => {
  axios3002.post(`/api/restaurant/${req.params.id}/photos`, req.body)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  axios3001.get(`/api/restaurants/${req.params.id}/reviews`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});


// app.use(morgan('dev'));
app.use('/restaurants/:id', express.static(path.join(__dirname, '../public')));

// For loader.io
app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});