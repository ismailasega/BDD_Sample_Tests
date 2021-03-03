const {Given, When, Then} = require('@cucumber/cucumber');
const { assertThat, is} = require('hamjest');

const Person = require('../../src/shouty');

Given('Lucy is located {int} metres from Sean', (distance)=>{
    console.log(distance)
    this.lucy = new Person;
    this.sean = new Person;
    this.lucy.moveTo(distance)
})

When('Sean shouts {string}', (message)=>{
    this.sean.shout(message);
    this.message = message
})

Then('Lucy hears Sean\'s message', ()=>{
    assertThat(this.lucy.messagesHeard(), is([this.message]));
})

