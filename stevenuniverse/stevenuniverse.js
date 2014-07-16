var five = require("johnny-five"), board, piezo;
board = new five.Board();

board.on("ready", function() {

  piezo = new five.Piezo(8);

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
      ["C4", 1/2], ["A4", 1/3], ["G4", 1/3], ["F4", 1/4], ["G4", 1/4], ["E4", 1/2], ["C4", 1/3],
      ["A4", 1/4], ["G4", 1/4], ["F4", 1/3], ["E4", 1/3], ["F4", 1/2], ["C4", 1/3], ["A4", 1/4],
      ["G4", 1/4], ["F4", 1/3], ["G4", 1/4], ["C#4", 1/4], ["C4", 1/2], ["A4", 1/3], ["G4", 1/3],
      ["F4", 1/4], ["C#4", 1/4], ["C4", 1/2], ["C4", 1/2], ["A4", 1/3], ["G4", 1/3], ["F4", 1/4],
      ["D#4", 1/4], ["C#4", 1/2], ["A3", 1/3], ["G3", 1/4], ["G4", 1/4], ["F4", 1/3], ["F#4", 1/3],
      ["F4", 1/2], ["G4", 1/3], ["F4", 1/4], ["G4", 1/4], ["C#4", 1/3], ["F4", 1/4], ["G4", 1/4], ["F4", 1/2], ["C#4", 1/3], ["C4", 1/3]
    ],
    tempo: 100
  });

});
