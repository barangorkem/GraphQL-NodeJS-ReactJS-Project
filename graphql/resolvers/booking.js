const Event=require('../resolvers/events');
const Booking = require('../../models/booking');
const {transformBooking,transformEvent}=require('./merge');



module.exports = {
  
    bookings: () => {
        return Booking.find().then((bookings) => {
            return bookings.map(booking => {
                return transformBooking(booking)
            })
        })
    },
  bookEvent:(args)=>{
    return  Event.findOne({_id:args.eventId})
      .then(event=>{
          if(!event)
          {
              throw new Error('Event not found.');

          }
         
          const booking=new Booking({
              user:'5cb3bf2a197bdb62a0562efa',
              event:event
          });
          return booking
          .save()
          .then(book=>{
              return transformBooking(book);
          })
          .catch(err=>{
              throw err;
          })
      
      })
      .catch(err=>{throw err;})
  },
  cancelBooking:(args)=>{
    console.log("cancel",args.bookingId);
    return Booking.findById(args.bookingId).populate('event')
    .then(booking=>{
        if(!booking)
          {
              throw new Error("Booking Not Found");
          }
      console.log("booking",booking);
       const event=transformEvent(booking._doc.event);
       console.log("event",event)
      return Booking.deleteOne({_id:booking.event._doc.creator})
       .then(()=>{
           return event;
       })
       .catch(err=>{
           throw err;
       })
    })
    .catch(err=>{
        throw err;
    })
}
}