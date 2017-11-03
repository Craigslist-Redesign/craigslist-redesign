UPDATE posts SET view_counter = view_counter + 1 WHERE post_id = $1;

SELECT * FROM posts WHERE post_id = $1
