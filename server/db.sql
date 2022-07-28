CREATE TABLE user (
    id bigint NOT NULL AUTO_INCREMENT,
    email varchar(200) NOT NULL UNIQUE,
    password varchar(200) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY(id)
);