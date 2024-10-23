import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Movie extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public genreId!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Movie.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  genreId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    },
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
  modelName: "Movie",
  tableName: "movies",
});

export default Movie;
