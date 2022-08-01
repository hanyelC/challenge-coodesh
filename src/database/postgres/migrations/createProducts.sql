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
  code int UNIQUE,
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