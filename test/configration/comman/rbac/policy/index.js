//const userPolicy=require('../userPolacy');
const roles=require('../../enum/role')
const adminPolacy = require('./adminPolacy');
const opts={
   /* [roles.USER]:{
        can:userPolicy
    },*/
    
        [roles.ADMIN]:{
            can:adminPolacy
        }
    
}

module.exports=opts;