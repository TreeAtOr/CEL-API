import passport from "passport";
import { Strategy } from "passport-local"
import ClientModel, { Client } from "../../datatypes/client-types";

passport.use(new Strategy({
    session:true,
    usernameField: 'email',
    passwordField: 'password'
},
    async function (username:string, password:string, done) {
        let client = await ClientModel.findOne({name:username});
        if (!client) return done(null,false,{message:'Incorrect email'});
        if (client.password != password)
            return done(null,false, {message:"Incorrect Password"})
        return done(null,client)
    }
))


passport.serializeUser(function(user:any,done) {
    console.log(typeof user);
    
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    ClientModel.findById(id, function(err:any, client:Client) {
      done(err, client);
    });
  });
export default passport;