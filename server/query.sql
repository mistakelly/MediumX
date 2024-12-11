-- Active: 1733575962706@@127.0.0.1@3306@mediumx
CREATE DATABASE `mediumx`

SHOW DATABASES


drop database mediumx

SHOW TABLES
    

USE mediumx

DROP DATABASE  mediumx;

SHOW DATABASES

SELECT * FROM post_comments

SELECT * FROM posts


SHOW TABLES

USE mediumx

-- DELETE  FROM posts

-- SHOW TABLESPACE

SELECT * FROM user

SELECT * FROM posts

SELECT * FROM posts LIMIT 5 OFFSET 19

UPDATE posts SET id = "4e4cbf1accbe4b2f98d38795e55b205t" WHERE title = "first post"

DELETE FROM posts WHERE title = ''

UPDATE posts SET title = 'wefawef' WHERE id = 1

DELETE FROM posts

DELETE FROM user

DESCRIBE posts


INSERT INTO posts (author_id, title, body, slug, created_at) VALUES
(1, 'Another post by Author 1', 'Dynamic body content 11', 'another-post-1', '1991-04-18'),
(2, 'Another post by Author 2', 'Dynamic body content 12', 'another-post-2', '1993-07-25'),
(3, 'Another post by Author 3', 'Dynamic body content 13', 'another-post-3', '1996-10-03'),
(4, 'Another post by Author 4', 'Dynamic body content 14', 'another-post-4', '1999-01-14'),
(5, 'Another post by Author 5', 'Dynamic body content 15', 'another-post-5', '2001-06-30'),
(6, 'Another post by Author 6', 'Dynamic body content 16', 'another-post-6', '2006-04-08'),
(7, 'Another post by Author 7', 'Dynamic body content 17', 'another-post-7', '2011-11-11'),
(8, 'Another post by Author 8', 'Dynamic body content 18', 'another-post-8', '2016-09-29'),
(9, 'Another post by Author 9', 'Dynamic body content 19', 'another-post-9', '2021-03-20'),
(10, 'Another post by Author 10', 'Dynamic body content 20', 'another-post-10', '2024-10-05')


SHOW TABLES

SELECT * FROM post_comments

SELECT * FROM post_likes

DESCRIBE post_likes

SHOW TABLES
