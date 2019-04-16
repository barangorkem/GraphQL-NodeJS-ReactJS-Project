const authResolver=require('./auth');
const bookingResolver=require('./booking');
const eventResolver=require('./events');


const rootResolver={
    ...authResolver,
    ...eventResolver,
    ...bookingResolver
};
module.exports=rootResolver;