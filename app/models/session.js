module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING,
      primarykey: true,
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  });

  return Session;
};
