Making Tunes to play with a piezo on an arduino board, so you don't have to.

Sailor moon theme:
````
int melody[] = {
  NOTE_C4, NOTE_F4, NOTE_GS4, NOTE_C5, NOTE_C5, NOTE_AS4, NOTE_AS4, NOTE_GS4, NOTE_G4, NOTE_AS4,
  NOTE_C4, NOTE_E4, NOTE_G4, NOTE_AS4, NOTE_AS4, NOTE_GS4, NOTE_GS4, NOTE_G4, NOTE_F4, NOTE_GS4,
  NOTE_C4, NOTE_F4,NOTE_GS4, NOTE_C5, NOTE_C5, NOTE_AS4, NOTE_AS4, NOTE_C5, NOTE_DS5, NOTE_CS5,
  NOTE_CS5, NOTE_C5, NOTE_AS4, NOTE_C5, NOTE_AS4, NOTE_GS4, NOTE_G4, NOTE_F4};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = { 4, 4, 4, 4, 6, 4, 4, 4, 2, 2,
                        4, 4, 4, 4, 6, 4, 4, 4, 2, 2,
                        4, 4, 4, 4, 6, 4, 2, 4, 2, 2,
                        2, 4, 4, 6, 2, 4, 4, 2};
````
