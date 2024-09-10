create table master.todayupdate(
id serial primary key,
content TEXT,
matchingDate varchar(255),
createTime TimeStamp DEFAULT CURRENT_TIMESTAMP,
markfordelete INT DEFAULT 0
)