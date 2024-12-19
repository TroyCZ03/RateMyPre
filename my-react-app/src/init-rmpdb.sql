--  Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

--  Comments Table
CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  text TEXT,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);


<<<<<<< HEAD
-- simple table 
CREATE TABLE IF NOT EXISTS test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    test_value VARCHAR(255) NOT NULL
);



=======
>>>>>>> 43db2ff31ceec79f3d286e20841a94aad73afcc2
ALTER TABLE items
ADD COLUMN price DECIMAL(10, 2),
ADD COLUMN caffeine INT,
ADD COLUMN l_citrulline DECIMAL(10, 2),
ADD COLUMN beta_alanine DECIMAL(10, 2),
ADD COLUMN bcaas DECIMAL(10, 2),
ADD COLUMN creatine_monohydrate DECIMAL(10, 2),
ADD COLUMN beetroot_extract DECIMAL(10, 2),
ADD COLUMN pomegranate_extract DECIMAL(10, 2),
ADD COLUMN l_glutamine DECIMAL(10, 2),
ADD COLUMN vasodilators VARCHAR(255),
ADD COLUMN vitamin_b DECIMAL(10, 2),
ADD COLUMN flavor VARCHAR(255),
ADD COLUMN serving_size VARCHAR(100),
ADD COLUMN rating DECIMAL(3, 2),
ADD COLUMN review_count INT;

