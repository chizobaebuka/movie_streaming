import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Genre extends Model {
  public id!: string;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Genre.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  modelName: "Genre",
  tableName: "genres",
});

export default Genre;
