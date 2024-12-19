const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Ensure jwt is required
require('dotenv').config();

// allows our backend to access apis 
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // Use environment-defined port or default to 3001

app.use(cors());
app.use(express.json());

 const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to database.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Your endpoint implementations...


app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  // Check if username already exists
  connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      return res.status(500).send('Error checking user');
    } else if (results.length > 0) {
      return res.status(409).send('Username already exists');
    } else {
      // Hash password and save the user
      const hashedPassword = await bcrypt.hash(password, 10);
      connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) {
          return res.status(500).send('Error saving user');
        } else {
          return res.status(201).send('User created');
        }
      });
    }
  });
});



app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) {
            console.error('Login error:', err);
            return res.status(500).send('Error during login');
        }
        if (results.length === 0) {
            return res.status(401).send('Invalid username or password');
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('Invalid username or password');
        } else {
            const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
        }
    });
});




 // Adding a pre-workout supplement to the database, requires authentication
app.post('/add-preworkout', authenticateToken, async (req, res) => {
    const { name, price, flavor, caffeine, l_citrulline, beta_alanine, bcaas, creatine_monohydrate, beetroot_extract, pomegranate_extract, l_glutamine, vasodilators, vitamin_b, rating } = req.body;
    const query = `
        INSERT INTO preworkouts (name, price, flavor, caffeine, l_citrulline, beta_alanine, bcaas, creatine_monohydrate, beetroot_extract, pomegranate_extract, l_glutamine, vasodilators, vitamin_b, rating)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(query, [name, price, flavor, caffeine, l_citrulline, beta_alanine, bcaas, creatine_monohydrate, beetroot_extract, pomegranate_extract, l_glutamine, vasodilators, vitamin_b, rating], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
        res.status(201).json({ message: "Pre-workout added successfully!", id: result.insertId });
    } catch (err) {
        res.status(500).send('Failed to add new pre-workout.');
    }
});


// Additional endpoint implementations...


 
