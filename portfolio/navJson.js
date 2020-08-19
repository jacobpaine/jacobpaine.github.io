const portfolioData = {
  caprice24: [
    {
      filename: "𝄞",
      header: "𝄞",
      div1:
        "Inspired by Drum Kit from Wes Bos, I made this small environment to play with musical scales. I found a open source font (StaffClefPitchesEasy) and recorded my own sounds on GarageBand.",
      div1class: "",
      div2: "",
      div2class: "",
      div3:
        "Use numbers 2 - 5 to change the octave, letters A - G to change the tone, and Shift, Control and Alt to change the accidental.",
      div3class: "g-clef-div3",
      next: "metronome",
      prev: "null",
    },
    {
      filename: "metronome",
      header: "Metronome",
      div1:
        "A little metronome using CSS transitions, CSS rotate, and setInterval.",
      div2: "",
      div3:
        "Use the radio buttons to change the count of notes per meter. Change the number in the box to start the metronome. The number in the box represents beats per minute.",
      next: "canvas-paint",
      prev: "𝄞",
    },
    {
      filename: "canvas-paint",
      header: "Playing on canvas",
      div1:
        "Simply click anywhere to get an ever-changing size and color paint brush.",
      div2: "",
      div3: "",
      next: null,
      prev: "metronome",
    },
  ],
};

export { portfolioData };
