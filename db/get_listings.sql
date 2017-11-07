SELECT * FROM posts
WHERE (category = $1 AND tag = $2)
OR (category = $1 AND $2 = 'all')
ORDER BY post_id ASC;
