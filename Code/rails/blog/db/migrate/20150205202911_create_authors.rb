class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.text :name
      t.boolean :hair
      t.text :email
      t.text :bio

      t.timestamps null: false
    end
  end
end
