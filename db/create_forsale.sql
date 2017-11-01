INSERT INTO for_sale (title, forsale_cat, price, description, location, make, model, size, condition, zipcode)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
SELECT * FROM for_sale
WHERE title = ($1);