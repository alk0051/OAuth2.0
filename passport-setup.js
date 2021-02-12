const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID:"300206585665-vpf4q2kjko4f3e5c15q8d6jad57lenvc.apps.googleusercontent.com",
    clientSecret: 'ISSOAQNAODAPRAMOSTRARAMIGAOOUDASEILACOMOFUNCIONAISSOTOAPRENDENDOAINDA',
    callbackURL: "http://ww.localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, user);
  }
));
