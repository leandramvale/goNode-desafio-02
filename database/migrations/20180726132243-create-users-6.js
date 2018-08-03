module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.dropTable('Users');
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primarykey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Users');
  },
};
