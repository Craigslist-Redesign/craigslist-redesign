INSERT INTO for_sale (title, forsale_cat)
VALUES ($1, $2);
SELECT * FROM for_sale
WHERE title = ($1);