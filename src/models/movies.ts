import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { WatchState } from "./interfaces";

class Movie extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public rating!: number;
  public watchState!: WatchState;
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
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  watchState: {
    type: DataTypes.ENUM(...Object.values(WatchState)),
    allowNull: true,
    defaultValue: WatchState.UNWATCHED,
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
