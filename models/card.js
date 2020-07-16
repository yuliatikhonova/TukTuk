module.exports = (sequelize, DataTypes) => {
    const card = sequelize.define("card", {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      countryName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      blogPost: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      imageUpload: {
        type: DataTypes.STRING
      }
  
    });
    card.associate = models => {
      card.belongsTo(models.post, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return card;
  };
  