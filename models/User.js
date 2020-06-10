module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userGithub: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cnpj:{
                type: DataTypes.INTEGER,
                allowNull:false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }, {
            timestamps: false,
        }
    );

    return User;
};