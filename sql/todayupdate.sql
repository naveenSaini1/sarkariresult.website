create table master.todayupdate(
id serial primary key,
url varchar(255),
content TEXT,
matchingDate varchar(255),
createTime TimeStamp DEFAULT CURRENT_TIMESTAMP,
markfordelete INT DEFAULT 0
)
