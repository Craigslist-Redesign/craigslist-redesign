INSERT INTO for_sale (title, tag, price, description, location, make, model, size, condition, zipcode, email, uid)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
SELECT * FROM for_sale
WHERE title = ($1);
