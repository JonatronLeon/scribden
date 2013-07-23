/***********************************
Author: Jonathan S. Collins Leon
Desc: Creates the Conversation, Post, and FollowedConversation tables
Modified: 05/18/2013
************************************/

DROP PROCEDURE IF EXISTS FeatureConversationDDL;
delimiter $
CREATE PROCEDURE FeatureConversationDDL()
BEGIN

/********************************** Remove Constraints on table Conversation ********************************************/

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Conversation' AND CONSTRAINT_TYPE = 'PRIMARY KEY') > 0 THEN
	ALTER TABLE Conversation
	CHANGE ConversationKey ConversationKey int unsigned,
	DROP PRIMARY KEY;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Conversation' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_Conversation_fCommonRoomKey') > 0 THEN
	ALTER TABLE Conversation DROP FOREIGN KEY FK_Conversation_fCommonRoomKey;
END IF;

/********************************** Remove Constraints and drop table Branch ********************************************/

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Branch' AND CONSTRAINT_TYPE = 'PRIMARY KEY') > 0 THEN
	ALTER TABLE Branch
	CHANGE BranchKey BranchKey int unsigned,
	DROP PRIMARY KEY;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Branch' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_Branch_fPostKey') > 0 THEN
	ALTER TABLE Branch DROP FOREIGN KEY FK_Branch_fPostKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Branch' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_Branch_fParentConversationKey') > 0 THEN
	ALTER TABLE Branch DROP FOREIGN KEY FK_Branch_fParentConversationKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Branch' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_Branch_fChildConversationKey') > 0 THEN
	ALTER TABLE Branch DROP FOREIGN KEY FK_Branch_fChildConversationKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.tables WHERE TABLE_NAME = 'Branch') > 0 THEN
	DROP TABLE Branch;
END IF;

/********************************** Remove Constraints and drop table Post ********************************************/

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Post' AND CONSTRAINT_TYPE = 'PRIMARY KEY') > 0 THEN
	ALTER TABLE Post
	CHANGE PostKey PostKey int unsigned,
	DROP PRIMARY KEY;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Post' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_Post_fScribdenUserKey') > 0 THEN
	ALTER TABLE Post DROP FOREIGN KEY FK_Post_fScribdenUserKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'Post' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_Post_fConversationKey') > 0 THEN
	ALTER TABLE Post DROP FOREIGN KEY FK_Post_fConversationKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.tables WHERE TABLE_NAME = 'Post') > 0 THEN
	DROP TABLE Post;
END IF;

/********************************** Remove Constraints and drop table FollowedConversation ********************************************/

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'FollowedConversation' AND CONSTRAINT_TYPE = 'PRIMARY KEY') > 0 THEN
	ALTER TABLE FollowedConversation
	CHANGE FollowedConversationKey FollowedConversationKey int unsigned,
	DROP PRIMARY KEY;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'FollowedConversation' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_FollowedConversation_fScribdenUserKey') > 0 THEN
	ALTER TABLE FollowedConversation DROP FOREIGN KEY FK_FollowedConversation_fScribdenUserKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.table_constraints WHERE TABLE_NAME = 'FollowedConversation' AND CONSTRAINT_TYPE = 'FOREIGN KEY' AND CONSTRAINT_NAME = 'FK_FollowedConversation_fConversationKey') > 0 THEN
	ALTER TABLE FollowedConversation DROP FOREIGN KEY FK_FollowedConversation_fConversationKey;
END IF;

IF (SELECT COUNT(*) FROM information_schema.tables WHERE TABLE_NAME = 'FollowedConversation') > 0 THEN
	DROP TABLE FollowedConversation;
END IF;

/*********************************************** Drop table Conversation *******************************************************/

IF (SELECT COUNT(*) FROM information_schema.tables WHERE TABLE_NAME = 'Conversation') > 0 THEN
	DROP TABLE Conversation;
END IF;

/********** Create Conversation Table ************/

CREATE TABLE Conversation(
ConversationKey int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
fCommonRoomKey int unsigned NOT NULL,
IsBranch boolean NOT NULL,
IsClosed boolean NOT NULL,
Active boolean NOT NULL,
ModDate timestamp NOT NULL,
CONSTRAINT FK_Conversation_fCommonRoomKey FOREIGN KEY (fCommonRoomKey) REFERENCES CommonRoom (CommonRoomKey)
) ENGINE=InnoDB;

ALTER TABLE Conversation ALTER COLUMN IsBranch SET DEFAULT false;
ALTER TABLE Conversation ALTER COLUMN IsClosed SET DEFAULT false;
ALTER TABLE Conversation ALTER COLUMN Active SET DEFAULT true;

/********** Create Post Table ************/

CREATE TABLE Post(
PostKey int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
Content varchar(700) NOT NULL,
fScribdenUserKey int unsigned NOT NULL,
fConversationKey int unsigned NOT NULL,
Active boolean NOT NULL,
ModDate timestamp NOT NULL,
CONSTRAINT FK_Post_fScribdenUserKey FOREIGN KEY (fScribdenUserKey) REFERENCES ScribdenUser (ScribdenUserKey),
CONSTRAINT FK_Post_fConversationKey FOREIGN KEY (fConversationKey) REFERENCES Conversation (ConversationKey)
) ENGINE=InnoDB;

ALTER TABLE Post ALTER COLUMN Active SET DEFAULT true;

/********** Create Branch Table ************/
CREATE TABLE Branch(
BranchKey int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
fPostKey int unsigned NOT NULL,
fParentConversationKey int unsigned NOT NULL,
fChildConversationKey int unsigned NOT NULL,
Active boolean NOT NULL,
ModDate timestamp NOT NULL,
CONSTRAINT FK_Branch_fPostKey FOREIGN KEY (fPostKey) REFERENCES Post (PostKey),
CONSTRAINT FK_Branch_fParentConversationKey FOREIGN KEY (fParentConversationKey) REFERENCES Conversation (ConversationKey),
CONSTRAINT FK_Branch_fChildConversationKey FOREIGN KEY (fChildConversationKey) REFERENCES Conversation (ConversationKey)
) ENGINE=InnoDB;

ALTER TABLE Branch ALTER COLUMN Active SET DEFAULT true;

/********** Create FollowedConversation Table ************/

CREATE TABLE FollowedConversation(
FollowedConversationKey int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
fScribdenUserKey int unsigned NOT NULL,
fConversationKey int unsigned NOT NULL,
Active boolean NOT NULL,
ModDate timestamp NOT NULL,
CONSTRAINT FK_FollowedConversation_fScribdenUserKey FOREIGN KEY (fScribdenUserKey) REFERENCES ScribdenUser (ScribdenUserKey),
CONSTRAINT FK_FollowedConversation_fConversationKey FOREIGN KEY (fConversationKey) REFERENCES Conversation (ConversationKey)
) ENGINE=InnoDB;

ALTER TABLE FollowedConversation ALTER COLUMN Active SET DEFAULT true;

END$

delimiter ;

CALL FeatureConversationDDL();
