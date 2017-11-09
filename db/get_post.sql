SELECT posts.* , case when favorited.post_id is not null then 'true' when favorited.post_id is null then 'false' end AS favorited FROM posts
LEFT JOIN (SELECT post_id, uid from favorites GROUP BY post_id, uid) AS favorited
ON posts.post_id = favorited.post_id AND favorited.uid = $2
WHERE posts.post_id = $1;
