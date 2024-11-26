CREATE DATABASE guestbook;

USE guestbook;

CREATE TABLE guestbook_entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    job_title VARCHAR(100),
    company VARCHAR(100),
    linkedin_url VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    meet_location VARCHAR(50) NOT NULL,
    other_location VARCHAR(100),
    message TEXT,
    mailing_list VARCHAR(15),
    email_format ENUM('HTML', 'Text'),
    submission_time TIMESTAMP DEFAULT NOW()
);

INSERT INTO guestbook_entries (first_name, last_name, job_title, company, email, meet_location, other_location, mailing_list, 
email_format) 
VALUES ('John', 'Doe', 'Plumber','Green River College', 'jdoe@grc.edu', 'other', 'On the street.','on', 'Text');

SELECT * FROM guestbook_entries;
