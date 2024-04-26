const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const user = {
    username: 'username',
    password: 'password'
  };

app.get('/api/validate-user', (req, res) => {

  const { username, password } = req.query;

  if (username === user.username && password === user.password) {
    res.json({ success: true, message: 'User is valid' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

});

app.get('/', (req, res) => {
  
    res.json({ success: true, message: 'insert /api/validate-user' });
  
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});