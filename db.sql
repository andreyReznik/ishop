create database if not exists ishop;
use ishop;

DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `image`;
DROP TABLE IF EXISTS `product`;
DROP table if exists `brand`;
DROP TABLE IF EXISTS `gender`;
DROP table if exists `movement`;
DROP table if exists `order_product`;
DROP table if exists `price_group`;


CREATE TABLE `user` (
	`id_user` int NOT NULL AUTO_INCREMENT,
	`name` varchar(500) NOT NULL,
	`login` varchar(500) NOT NULL,
	`pass` varchar(500) NOT NULL,
	`email` varchar(500),
	`phone` varchar(500),
	`role` int NOT NULL,
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP,
	`active` bit,
	PRIMARY KEY (`id_user`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `product` (
	`id_product` int NOT NULL AUTO_INCREMENT,
	`id_brand` int NOT NULL,
	`model` varchar(200) NOT NULL,
	`info` varchar(500) NOT NULL,
	`price` DECIMAL(10,2) NOT NULL,
	`details` varchar(2000) NOT NULL,
	`id_gender` int NOT NULL,
	`id_movement` int NOT NULL,
	`imageLink` varchar(500) NOT NULL,
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP,
	`active` bit NOT NULL,
	PRIMARY KEY (`id_product`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `image` (
	`id_image` bigint NOT NULL AUTO_INCREMENT,
	`id_product` int NOT NULL,
	`link` varchar(500) NOT NULL,
	`smallLink` varchar(500) NOT NULL,
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP NULL,
	`active` bit NOT NULL,
	PRIMARY KEY (`id_image`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `order` (
	`id_order` int NOT NULL AUTO_INCREMENT,
	`id_user` int NOT NULL,
	`created` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id_order`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `brand` (
	`id_brand` int NOT NULL AUTO_INCREMENT,
	`name` varchar(500) NOT NULL,
	PRIMARY KEY (`id_brand`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `gender` (
	`id_gender` int NOT NULL AUTO_INCREMENT,
	`name` varchar(500) NOT NULL,
	`amount` int NOT NULL default 0,
	PRIMARY KEY (`id_gender`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `movement` (
	`id_movement` int NOT NULL AUTO_INCREMENT,
	`name` varchar(500) NOT NULL,
	`amount` int NOT NULL default 0,	
	PRIMARY KEY (`id_movement`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `order_product` (
	`id_order_product` int NOT NULL AUTO_INCREMENT,
	`id_order` int NOT NULL,
	`id_product` int NOT NULL,
	`count` int NOT NULL,
	PRIMARY KEY (`id_order_product`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `price_group` (
	`id_price_group` int NOT NULL ,
	`min_bound` DECIMAL(10,2) not null,
	`max_bound` DECIMAL(10,2) not null, 
	`name` varchar(50) NOT NULL,
	`amount` int NOT NULL,
	PRIMARY KEY (`id_price_group`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8;

insert into price_group(id_price_group, name, min_bound,max_bound, amount) value(0,'<$100',0,100,0);
insert into price_group(id_price_group, name, min_bound,max_bound, amount) value(1,'$100-$250',100,250,0);
insert into price_group(id_price_group, name, min_bound,max_bound, amount) value(2,'$250-$500',250,500,0);
insert into price_group(id_price_group, name, min_bound,max_bound, amount) value(3,'$500-$1000',500,1000,0);
insert into price_group(id_price_group, name, min_bound,max_bound, amount) value(4,'$1000-$5000',1000,5000,0);
insert into price_group(id_price_group, name, min_bound,max_bound, amount) value(5,'$5000+',5000,10000000,0);

-- function get category from price
DROP FUNCTION IF EXISTS getPriceCategoryId;
DELIMITER $$
CREATE FUNCTION getPriceCategoryId(price float)
  RETURNS int
BEGIN
	declare id int default 0;
	declare min decimal(10,2);
	declare max decimal(10,2);
	DECLARE done INT DEFAULT 0;
	DECLARE curs CURSOR FOR  SELECT id_price_group, min_bound, max_bound  FROM price_group;	
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

	
	OPEN curs;
	read_loop: LOOP
		FETCH curs INTO id,min,max;  
		IF done THEN
			LEAVE read_loop;  
		END IF;
		
		IF (price > min and price<= max) then
			LEAVE read_loop;
		END IF;
		
	 
	END LOOP;
	CLOSE curs; 
	
	return id;
END;
$$
DELIMITER ;
-- trigger on product insert
delimiter |
CREATE TRIGGER `tr_insert_product` BEFORE INSERT ON product
  FOR EACH ROW
  BEGIN
    DECLARE price_group_id int;
	select getPriceCategoryId(new.price) into @price_group_id;
    UPDATE price_group SET amount = amount + 1 WHERE id_price_group = @price_group_id;
	UPDATE movement SET amount = amount+1 where id_movement = new.id_movement;
	UPDATE gender   SET amount = amount+1 where id_gender = new.id_gender; 
  END;
|
delimiter ;

-- triggert on after update product

delimiter |
CREATE TRIGGER `tr_after_update_product` after update ON `product`
FOR EACH ROW 
	BEGIN
		DECLARE price_group_id int;	
	    IF NEW.price <> OLD.price THEN
			select getPriceCategoryId(old.price) into @price_group_id;
			UPDATE price_group SET amount = amount - 1 WHERE id_price_group = @price_group_id;

			select getPriceCategoryId(new.price) into @price_group_id;
			UPDATE price_group SET amount = amount + 1 WHERE id_price_group = @price_group_id;
		END IF;

		IF NEW.id_movement <> OLD.id_movement THEN
			UPDATE movement SET amount = amount-1 where id_movement = old.id_movement;
			UPDATE movement SET amount = amount+1 where id_movement = new.id_movement;
		END IF;
		
		IF NEW.id_gender <> OLD.id_gender THEN
			UPDATE gender   SET amount = amount-1 where id_gender = old.id_gender; 
			UPDATE gender   SET amount = amount+1 where id_gender = new.id_gender; 			
		END IF;
	END;
|
delimiter ;

-- trigger on after delete product

delimiter |
CREATE TRIGGER tr_after_delete_product AFTER DELETE ON product 
FOR EACH ROW
BEGIN
    DECLARE price_group_id int;
	select getPriceCategoryId(OLD.price) into @price_group_id;
    UPDATE price_group SET amount = amount - 1 WHERE id_price_group = @price_group_id;
	UPDATE movement SET amount = amount-1 where id_movement = OLD.id_movement;
	UPDATE gender   SET amount = amount-1 where id_gender = OLD.id_gender; 
END;
|
delimiter ;


ALTER TABLE `product` ADD CONSTRAINT `product_fk0` FOREIGN KEY (`id_brand`) REFERENCES `brand`(`id_brand`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk1` FOREIGN KEY (`id_gender`) REFERENCES `gender`(`id_gender`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk2` FOREIGN KEY (`id_movement`) REFERENCES `movement`(`id_movement`);

ALTER TABLE `image` ADD CONSTRAINT `image_fk0` FOREIGN KEY (`id_product`) REFERENCES `product`(`id_product`);

ALTER TABLE `order` ADD CONSTRAINT `order_fk0` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`);

ALTER TABLE `order_product` ADD CONSTRAINT `order_product_fk0` FOREIGN KEY (`id_order`) REFERENCES `order`(`id_order`);

ALTER TABLE `order_product` ADD CONSTRAINT `order_product_fk1` FOREIGN KEY (`id_product`) REFERENCES `product`(`id_product`);

