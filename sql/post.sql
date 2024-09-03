
	create table master.post (
pid serial primary key,
otitle varchar(255) unique,
ourl varchar (255) unique,
url varchar(255) ,
newtitile varchar (255) unique,
totalPost Integer,
expiryDate varchar(255),
active INT DEFAULT 0,
createTime TimeStamp DEFAULT CURRENT_TIMESTAMP,
markfordelete INT DEFAULT 0
)

CREATE INDEX idx_fts_content ON master.post USING GIN (to_tsvector('english', newtitile));

