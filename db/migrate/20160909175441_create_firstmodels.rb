class CreateFirstmodels < ActiveRecord::Migration[5.0]
  def change
    create_table :firstmodels do |t|
      t.string :name

      t.timestamps
    end
  end
end
