const mongoose = require('mongoose');

const LoginScheema = new mongoose.Schema({
   login: { String, required: true },
   pass: { String, required: true }
});

const LoginModel = mongoose.model('login', LoginScheema);