import mongoose = require('mongoose');
import { internalTest } from './unit-test';
import { testWordlist } from './wordlist-e2e-test';

mongoose.connect(process.env.TEST_DATABASE_URI,
{useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },async (err) => {
    //await internalTest();
    await testWordlist();
    mongoose.disconnect()
})