'use strict';

const { DataTypes } = require('sequelize');

const WatchState = {
  UNWATCHED: 'unwatched',
  WATCHING: 'watching',
  WATCHED: 'watched'
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};