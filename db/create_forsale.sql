INSERT INTO posts (title, tag, price, description, location, make, model, size, condition, zipcode, email, uid, cat_id, category, image_url, employment_type, compensation, company_name, phone_number, contact_name, rent, bedrooms, bathrooms, available_date, time_stamp)
VALUES (${title}, ${tag}, ${price}, ${description}, ${location}, ${make}, ${model}, ${size}, ${condition}, ${zipcode}, ${email}, ${uid}, ${catId}, ${category}, ${imageUrl}, ${employmentType}, ${compensation}, ${companyName}, ${phoneNumber}, ${contactName}, ${rent}, ${bedrooms}, ${bathrooms}, ${availableDate}, ${recordDate});
SELECT * FROM posts
WHERE title = (${title})
ORDER BY post_id DESC;
