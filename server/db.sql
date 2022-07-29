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