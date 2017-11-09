SELECT *  FROM posts FULL OUTER JOIN favorites ON posts.post_id = favorites.post_id WHERE favorites.uid = $1
ORDER BY fav_id DESC;
