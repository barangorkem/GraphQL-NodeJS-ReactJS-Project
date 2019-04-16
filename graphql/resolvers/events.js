const Event = require('../../models/event');
const {dateToString} =require('../../helpers/date');
const {transformEvent}=require('./merge');


module.exports={
    events: () => {
        return Event.find().then((events) => {

            return events.map(event => {
                return transformEvent(event);
            })
        }).catch(err => {
            throw err;
        })
    },createEvent: (args) => {
        const event = new Event({

            title: args.eventInput.title,
            description: args.eventInput.description,
            price: args.eventInput.price,
            date: dateToString(args.eventInput.date),
            creator: '5cb3bf2a197bdb62a0562efa'
        })

        return event.save().then(result => {
            createdEvent = result;
            return User.findById('5cb3bf2a197bdb62a0562efa')
                .then(user => {
                    if (!user) {
                        throw new Error('User Not Found');
                    }
                    user.createdEvents.push(event);
                    user.save()
                }).then(() => {
                    return transformEvent(createdEvent);
                })
                .catch(err => {
                    throw err;
                })
        }).catch(err => {
            throw err;
        })
    },
}