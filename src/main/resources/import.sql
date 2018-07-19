INSERT INTO USER (ID, USER_ID, PASSWORD, NAME, EMAIL) VALUES(1, 'xbb123','123', 'dhshin', 'xbb123@naver.com')
INSERT INTO USER (ID, USER_ID, PASSWORD, NAME, EMAIL) VALUES(2, 'javajigi','test', '대환', 'javagiji@test.com')

INSERT INTO QUESTION (id, writer_id, title, contents, create_date, count_of_answer) VALUES(1, 1, '국내에서 Ruby on Rails와 Play', 'Ruby on Rails(이하 Ror)는 ', CURRENT_TIMESTAMP(), 0);
INSERT INTO QUESTION (id, writer_id, title, contents, create_date, count_of_answer) VALUES(2, 2, '자바지기가 쓴 글', '자바지기의 유래는 ', CURRENT_TIMESTAMP(), 0);