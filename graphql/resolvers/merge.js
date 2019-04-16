const Event=require('../../models/event');
const User=require('../../models/user');
const {dateToString} =require('../../helpers/date');

const transformEvent=event=>{
    return { 
        ...event._doc, 
        _id: event._id, 
        date: dateToString(event._doc.date), 
        creator: user.bind(this, event.creator) 
    };

}

const transformBooking=booking=>{
    return { ...booking._doc, _id: booking._id,
        user:user.bind(this,booking._doc.user),
        event:singleEvent.bind(this,booking._doc.event),
        createdAt: dateToString(booking._doc.createdAt), 
        updatedAt: dateToString(booking._doc.updatedAt)
    }
}

const events = eventId => {
    return Event.find({ _id: { $in: eventId } })
        .then(events => {
            return events.map(event => {
                return transformEvent(event);
            })
        })
        .catch(err => {
            throw err;
        })
}

const user = userId => {
    return User.findById(userId)
        .then(user => {
            return { ...user._doc, _id: user.id, createdEvents: events.bind(this, user._doc.createdEvents) };
        })
        .catch(err => { throw err; })
}
const singleEvent = eventId=>{
    return Event.findById(eventId)
    .then(event=>{
        return {...event._doc,_id:event._id,creator:user.bind(this,event.creator)};
    })
}

exports.transformEvent=transformEvent;
exports.transformBooking=transformBooking;
