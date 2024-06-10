CREATE DATABASE db_list;

create table if not exists tasks(
	id SERIAL primary key,
	title VARCHAR(255),
	description VARCHAR(255),
	date VARCHAR(255)
)
