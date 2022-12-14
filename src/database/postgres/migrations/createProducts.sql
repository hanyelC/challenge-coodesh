--  TO SEPARATE THE QUERIES, USE --###

DO $$

BEGIN

IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'status_type')
	THEN CREATE TYPE status_type AS ENUM ('draft', 'imported');
END IF;

END

$$;

--###

CREATE TABLE IF NOT EXISTS products (
  id serial PRIMARY KEY,
  code bigint UNIQUE,
  barcode text,
  status status_type,
  product_name text,
  imported_t TIMESTAMP DEFAULT NOW(),
  url text,
  quantity text,
  categories text,
  packaging text,
  brands text,
  image_url text
);

--###

CREATE TABLE IF NOT EXISTS imports (
  id serial PRIMARY KEY,
  imported_t TIMESTAMP DEFAULT NOW(),
  page_number int NOT NULL
);