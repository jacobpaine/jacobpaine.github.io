const portfolioData = {
  caprice24: [
    {
      filename: "intro",
      header: "Hi there!",
      div1:
        "This is my front-end portfolio of plain Javascript projects. When I run across projects with interesting functionality or designs, I code an example. If I like it, I share my working example here.",
      div1class: "",
      div2: "",
      div2class: "",
      div3: "",
      div3class: "",
      next: "𝄞",
      prev: "null",
    },
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
      prev: "intro",
    },
    {
      filename: "metronome",
      header: "Metronome",
      div1:
        "A little metronome using CSS transitions, CSS rotate, and setInterval.",
      div1class: "",
      div2: "",
      div2class: "",
      div3:
        "Use the radio buttons to change the count of notes per meter. Change the number in the box to start the metronome. The number in the box represents beats per minute.",
      div3class: "",
      next: "canvas-paint",
      prev: "𝄞",
    },
    {
      filename: "canvas-paint",
      header: "Playing on canvas",
      div1:
        "Simply click on the screen to use a basic paint program. The dotted box will randomly select a color. The plus/minus change the size of the brush. The shapes on the right change the shape of the brush.",
      div1class: "",
      div2: "",
      div2class: "",
      div3: "",
      div3class: "",
      next: null,
      prev: "metronome",
    },
  ],
};

export { portfolioData };
