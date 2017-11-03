INSERT INTO posts (title, tag, price, description, location, make, model, size, condition, zipcode, email, uid, cat_id, category, image_url, employment_type, compensation, company_name, phone_number, contact_name, rent, bedrooms, bathrooms, available_date)
VALUES (${title}, ${tag}, ${price}, ${description}, ${location}, ${make}, ${model}, ${size}, ${condition}, ${zipcode}, ${email}, ${uid}, ${catId}, ${category}, ${imageUrl}, ${employmentType}, ${compensation}, ${companyName}, ${phoneNumber}, ${contactName}, ${rent}, ${bedrooms}, ${bathrooms}, ${availableDate});
SELECT * FROM posts
WHERE title = (${title});
