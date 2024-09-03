create table master.course_post(
course_postid serial primary key,
postid Integer,
courseid Integer,
createTime TimeStamp DEFAULT CURRENT_TIMESTAMP,
markfordelete INT DEFAULT 0
)