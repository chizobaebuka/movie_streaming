import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Watchlist extends Model {
  public id!: string;
  public userId!: string;
  public movieId!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Watchlist.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  movieId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'movies',
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
  modelName: "Watchlist",
  tableName: "watchlists",
});

export default Watchlist;
