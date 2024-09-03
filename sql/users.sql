create table master.users (
uid serial primary key,
name varchar(255),
bio varchar(255),
age Integer,
password varchar(255),
email varchar(255),
role varchar(255)
)