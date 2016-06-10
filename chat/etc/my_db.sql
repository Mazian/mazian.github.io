-- MySQL Script generated by MySQL Workbench
-- 06/06/16 19:42:39
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `f` VARCHAR(45) NULL,
  `i` VARCHAR(45) NULL,
  `o` VARCHAR(45) NULL,
  `date_create` DATETIME NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id_message` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `message_create` DATETIME NULL,
  `id_user_from` INT NOT NULL,
  `id_user_to` INT NULL,
  PRIMARY KEY (`id_message`, `id_user_from`),
  INDEX `fk_message_user_idx` (`id_user_from` ASC),
  INDEX `fk_message_user1_idx` (`id_user_to` ASC),
  CONSTRAINT `fk_message_user`
    FOREIGN KEY (`id_user_from`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_user1`
    FOREIGN KEY (`id_user_to`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;