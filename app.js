const express = require('express');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '****', // Change Password Here
    database: 'guestbook'
});

async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log("Connected to the database");
        return conn;
    } catch (err) {
        console.log("Error connecting to the database" + err);
    }
};

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

	console.log("Hello, world - server!");

    res.render('home');
});


app.post('/success', async (req, res) => {
    const data = req.body;
    console.log(data);

    const conn = await connect();

    await conn.query(`INSERT INTO guestbook_entries 
        (first_name, last_name, job_title, company, linkedin_url, email, meet_location, other_location, message, mailing_list, email_format)
        VALUES ('${data.firstName}', '${data.lastName}', '${data.job}', '${data.company}', '${data.linkedIn}', '${data.email}', '${data.options}', 
        '${data.other}', '${data.message}', '${data.addToList}', '${data.emailFormat}');`
    );

    res.render('success', { details: data });
});

app.get('/admin', async (req, res) => {
    const conn = await connect();
    const data = await conn.query('SELECT * FROM guestbook_entries');

    res.render('admin', { details: data });
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
