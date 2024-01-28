const fs = require ('fs');
const path = require ('path');
const {v4: uuidv4} = require ('uuid');

const users = {

    fileName: path.join(__dirname,'/usersDataBase.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
    },

    saveData: function(userData){
        fs.writeFileSync(this.fileName,JSON.stringify(userData,null,' '));
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;  
    },
    
    findByField: function (field,text){
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound;
    },

    store: function (userData){
        console.log(`Creating User ${userData.first_name}`);
        const allUsers = this.findAll();
        const newUser = {
            id: uuidv4(),
            ...userData
        }
        allUsers.push(newUser);
        this.saveData(allUsers);        
    },

    update: function(id,userData){
        console.log(`Updating users ${userData.first_name}`);
        const allUsers = this.findAll();
        const userToEdit = allUsers.find(oneUser => oneUser.id == id);
        Object.assign(userToEdit,userData);
        this.saveData(allUsers);
    },

    delete: function(id){
        console.log(`Deleting user with id: ${id}`);
        const allUsers = this.findAll();
        const finalUsers = allUsers.filter(oneUser => oneUser.id != id);
        this.saveData(finalUsers);
    }

}

module.exports = users;
