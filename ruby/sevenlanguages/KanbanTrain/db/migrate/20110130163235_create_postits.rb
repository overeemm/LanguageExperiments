class CreatePostits < ActiveRecord::Migration
  def self.up
    create_table :postits do |t|
      t.text :text
      t.datetime :created
      t.integer :id

      t.timestamps
    end
  end

  def self.down
    drop_table :postits
  end
end
