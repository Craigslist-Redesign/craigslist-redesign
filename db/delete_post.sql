DELETE FROM posts WHERE post_id = $1;

DELETE FROM favorites WHERE post_id = $1;

SELECT * FROM posts WHERE uid = $2;

