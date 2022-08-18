const { object } = require("joi");

const roles=Object.freeze({
    ADMIN:"admin",
    USER:"user"
});
module.exports=roles;