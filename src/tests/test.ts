import mongoose = require('mongoose');
import { internalTest } from './internal-test';
import { testWordlist } from './wordlist-test';

mongoose.connect(`mongodb+srv://Worker:SOM24t2c9g2zLTpO@wordlist.0mdoj.mongodb.net/Users?retryWrites=true&w=majority`,
{useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },async (err) => {
    //await internalTest();
    await testWordlist();
    mongoose.disconnect()
})