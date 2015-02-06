class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.text :name
      t.boolean :bald

      t.timestamps null: false
    end
  end
end
