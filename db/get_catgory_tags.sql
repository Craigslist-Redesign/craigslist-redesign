SELECT t.tag
FROM tags t
JOIN categories c ON c.cat_id = t.cat_id
WHERE c.name = $1;
