module.exports = (sequelize, DataTypes) => {
    const Newsletter = sequelize.define(
        "Newsletter", {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
              },
              email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
              },      
              createdAt: DataTypes.DATE,
              updatedAt: DataTypes.DATE,
        }, {
            tableName:'newsletter',
            timestamps: false,
        }
    );

    return Newsletter;
};