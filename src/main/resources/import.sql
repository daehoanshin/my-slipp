INSERT INTO USER (ID, USER_ID, PASSWORD, NAME, EMAIL, CREATE_DATE) VALUES(1, 'xbb123','123', 'dhshin', 'xbb123@naver.com', CURRENT_TIMESTAMP());
INSERT INTO USER (ID, USER_ID, PASSWORD, NAME, EMAIL, CREATE_DATE) VALUES(2, 'javajigi','test', '대환', 'javagiji@test.com', CURRENT_TIMESTAMP());

INSERT INTO QUESTION (ID, WRITER_ID, TITLE, CONTENTS, CREATE_DATE, COUNT_OF_ANSWER) VALUES(1, 1, '국내에서 Ruby on Rails와 Play', 'Ruby on Rails(이하 Ror)는 ', CURRENT_TIMESTAMP(), 0);
INSERT INTO QUESTION (ID, WRITER_ID, TITLE, CONTENTS, CREATE_DATE, COUNT_OF_ANSWER) VALUES(2, 2, '자바지기가 쓴 글', '자바지기의 유래는 ', CURRENT_TIMESTAMP(), 0);