const helper = require('./helper.js');

test('Time should be sane', (time) => {
  let time = new helper.Time();    
  expect(time).toBeTruthy();
});

test('Time should return a number', () => {
  let time = new helper.Time();  

  time.addCallback((newTime) => {
    expect(newTime).toBe('number');
  });
});