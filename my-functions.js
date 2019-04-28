const faker = require('faker');
const moment = require('moment');

function generateRandomData(userContext, events, done) {
  // Generate data with Faker
  const id = Math.floor(Math.random() * 10000000);
  const comment = `${faker.lorem.sentence()}`;
  const date = `${moment(faker.date.recent()).format('MMMM Do YYYY, h:mm:ss a')}`;
  const imageurl = `https://s3-us-west-1.amazonaws.com/photowheelopentabs/Photo/s${(Math.floor(Math.random() * 100) + 1).toString()}_tn.jpg`;
  const userid = Math.floor((id - 1) / 10) + 1;

  userContext.vars.id = id;
  userContext.vars.comment = comment;
  userContext.vars.date = date;
  userContext.vars.imageurl = imageurl;
  userContext.vars.userid = userid;

  return done();
}

module.exports = {
  generateRandomData,
};
