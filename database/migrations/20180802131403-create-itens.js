module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        references: { model: 'Projects', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
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
    queryInterface.dropTable('Itens');
  },
};
