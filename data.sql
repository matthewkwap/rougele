CREATE DATABASE perntodo
CREATE TABLE Account(
    User-id SERIAL PRIMARY KEY,
    Password VARCHAR(255),
    Date-created VARCHAR(255)
    
);
CREATE TABLE useridPosts(
    Name SERIAL PRIMARY KEY,
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    Postid VARCHAR(455),
    comments VARCHAR(455)
);
CREATE TABLE Postidcomments(
    Name SERIAL PRIMARY KEY,
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    commentid VARCHAR(455),
);


CREATE TABLE useridfollowing(
    userid SERIAL PRIMARY KEY,
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    Postid VARCHAR(455)
);
CREATE TABLE useridfollowing(
    userid SERIAL PRIMARY KEY,
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    Postid VARCHAR(455)
);