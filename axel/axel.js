var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo({
    controller: "I2C_BACKPACK",
    pin: 3
  });

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

   // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ['D4', 1/4], ['F4', 1/4], ['D4',1/6], ['D4', 1/8], ['G4', 1/4], ['D4', 1/6], ['C4', 1/6],
      ['D4', 1/4], ['A4', 1/4], ['D4',1/6], ['D4', 1/8], ['A#4', 1/4], ['A4', 1/6], ['F4', 1/6],
      ['D4', 1/6], ['A4', 1/6], ['D5', 1/8], ['D4', 1/6], ['C4', 1/6], ['C4', 1/6], ['A3', 1/8], ['E4', 1/4], ['D4', 1/6]
    ],
    tempo: 45
  });

});