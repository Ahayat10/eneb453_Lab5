const express = require('express');
const app = express();
const port = 3000;
// Hardcoded user for validation, provide credentials in writeup to verify
const user = {
username: '',
password: ''
};
// API endpoint for user validation
app.get('/validate-user', (req, res) => {
const { username, password } = req.query;
/*if user credential return 200 status and redirect
else send error */
});
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});