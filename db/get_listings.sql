SELECT posts.* , case when favorited.post_id is not null then 'true' when favorited.post_id is null then 'false' end AS favorited FROM posts
LEFT JOIN (SELECT post_id, uid from favorites GROUP BY post_id, uid) AS favorited
ON posts.post_id = favorited.post_id AND favorited.uid = $4
WHERE (category = $1 AND tag = $2 AND LOWER(title) LIKE LOWER( CONCAT($3, '%') ))
OR (category = $1 AND $2 = 'all' AND LOWER(title) LIKE LOWER( CONCAT($3, '%') ))
ORDER BY posts.post_id DESC;
