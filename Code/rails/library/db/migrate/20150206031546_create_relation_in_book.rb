class CreateRelationInBook < ActiveRecord::Migration
  def change
  	remove_column :books, :author
    add_column :books, :author_id, :integer
    add_foreign_key :books, :authors
  end
end
