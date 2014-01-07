CREATE SCHEMA `blog` ;

CREATE  TABLE `blog`.`user` (

  `username` VARCHAR(45) NOT NULL ,

  `password` VARCHAR(45) NOT NULL ,

  PRIMARY KEY (`username`) ,

  UNIQUE INDEX `username_UNIQUE` (`username` ASC) );

 INSERT INTO `blog`.`user` (`username`, `password`) VALUES ('admin', 'admin');