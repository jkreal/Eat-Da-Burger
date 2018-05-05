
USE twvba86k6qns43xi;

CREATE TABLE IF NOT EXISTS burgers (
	id INT(32) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(32) NOT NULL,
    devoured BOOL NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;