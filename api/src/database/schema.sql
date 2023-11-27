CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	email text NOT NULL,
	password text NOT NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id)
);
