
const bcryptjs = require('bcryptjs');
const jwt=require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
    createUser: (args) => {
        return User.findOne({ email: args.userInput.email })
            .then((user) => {
                if (user) {
                    throw new Error('User exists already.');
                }
              return  bcryptjs.hash(args.userInput.password, 12).then(
                    hashedPassword => {
                        const user = new User({

                            email: args.userInput.email,
                            password: hashedPassword
                        });
                        return user.save().then(result=>{
                            
                                console.log("res",result);
                                return { ...result._doc, password: "*",_id:result._id };
                        });
                    }
                )
            }
            ).catch(err => {
                throw err;
            })
    },
    login:(args)=>{
      return  User.findOne({email:args.email})
        .then(user=>{
            if(!user)
                {
                    throw new Error("Email is not found");
                }
              return  bcryptjs.compare(args.password,user.password).then(result=>{
                if(!result){
                    throw new Error("Your password is incorrect")
                }
               const token=jwt.sign({userId:user._id,email:user.email},'somesupersecretkey',{expiresIn:'1h'});
               return {userId:user._id,token:token,tokenExpiration:1};
                })
        })
        .catch(err=>{
            throw err;
        })
        }
    
};