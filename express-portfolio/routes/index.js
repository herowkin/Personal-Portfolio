/**
 * routes/index.js
 * Author: Braiden Jensen (301475238)
 * Date: 2025-09-26
 * Purpose: Page routes + contact form handler
 */

var express = require('express');
var router = express.Router();

router.get('/',         (req, res) => res.render('home',     { title: 'Home' }));
router.get('/about',    (req, res) => res.render('about',    { title: 'About' }));
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects' }));
router.get('/services', (req, res) => res.render('services', { title: 'Services' }));
router.get('/contact',  (req, res) => res.render('contact',  { title: 'Contact' }));

router.post('/contact', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  console.log('Contact form submission:', { firstName, lastName, phone, email, message });

  res.redirect('/?sent=1');
});

module.exports = router;
