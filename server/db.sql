CREATE TABLE user (
    id BIGINT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE category (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE post (
    id BIGINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    content VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    userId BIGINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(userId) REFERENCES user(id)
);