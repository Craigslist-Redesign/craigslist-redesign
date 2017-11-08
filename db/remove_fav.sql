DELETE FROM favorites WHERE uid = $1 AND post_id = $2;

-- SELECT * FROM posts FULL OUTER JOIN favorites ON posts.post_id = favorites.post_id WHERE favorites.uid = $1;
