
	create table master.contact (
cid serial primary key,
name varchar(255) ,
surname varchar (255),
email varchar(255) ,
content varchar (255) ,
createTime TimeStamp DEFAULT CURRENT_TIMESTAMP,
markfordelete INT DEFAULT 0
)

