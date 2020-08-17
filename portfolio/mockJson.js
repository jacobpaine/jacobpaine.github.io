const portfolioData = {
  thirtyDays: [
    {
      filename: "drum-kit",
      header: "Drum Kit",
      div1:
        "This is the first project of Wes Bos's Javascript 30. When I finished his projects, I put my own spin on a few of them. I added navigation at the bottom. Feel free to click the arrows to compare his projects to what I've created.",
      div1class: "",
      div2: "",
      div2class: "",
      div3: "",
      div3class: "",
      next: "𝄞",
      prev: null,
    },
    {
      filename: "𝄞",
      header: "𝄞",
      div1:
        "Inspired by the Drum Kit, I made this small environment to play with musical scales. I found a open source font (StaffClefPitchesEasy) and recorded my own sounds on GarageBand.",
      div1class: "",
      div2: "",
      div2class: "",
      div3:
        "Use numbers 2 - 5 to change the octave, letters A - G to change the tone, and Shift, Control and Alt to change the accidental.",
      div3class: "g-clef-div3",
      next: "css-js-clock",
      prev: "drum-kit",
    },
    {
      filename: "css-js-clock",
      header: "css-js-clock",
      div1:
        "Wes Bos's clock app uses CSS rotate, CSS transitions, and a setInterval. I figured those technologies could make for a good metronome. Check it out on the next page.",
      div2: "",
      div3: "",
      next: "metronome",
      prev: "𝄞",
    },
    {
      filename: "metronome",
      header: "Metronome",
      div1:
        "A little metronome using CSS transitions, CSS rotate, and setInterval.",
      div2: "",
      div3:
        "Use the radio buttons to change the count of notes per meter. Change the number in the box to start the metronome. The number in the box represents beats per minute.",
      next: "canvas-practice",
      prev: "css-js-clock",
    },
    {
      filename: "canvas-practice",
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
