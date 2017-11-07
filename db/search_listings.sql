SELECT * FROM posts
WHERE (category = $1 AND tag = $2 AND LOWER(title) LIKE LOWER( CONCAT($3, '%') ))
OR (category = $1 AND $2 = 'all' AND LOWER(title) LIKE LOWER( CONCAT($3, '%') ))
ORDER BY post_id ASC;
