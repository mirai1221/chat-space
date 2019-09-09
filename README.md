# README

userテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :message
- has_many :group, through: :user_group
  
##messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group_id|integer|null: false|
|user_id|integer|null: false|
### Association
- belongs_to :user
- belongs_to :group

##groupテーブル
Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|groupname|string|null: false|
### Association
- has_many :user, through: :user_group

##user_groupテーブル
Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false foreign_key: true|
|group_id|integer|null: false foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
