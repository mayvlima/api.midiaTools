'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('newsletter', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('newsletter')
  }
};
