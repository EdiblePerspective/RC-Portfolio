CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    title varchar(50) NOT NULL,
    username varchar(50) NOT NULL,
    content varchar(1500)
);
CREATE TABLE IF NOT EXISTS comments (
    postId int NOT NULL,
    username varchar(50) NOT NULL,
    content varchar(255) NOT NULL
);