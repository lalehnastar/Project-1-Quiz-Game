var game = {
  players: [{ name: 'Nicola Tesla', score: 0 }, { name: 'Albert Einstein', score: 0 }],
  currentPlayer: null,
  currentQuestionIndex: 0,
  questions: [ //All questions except last one are standard.  Last question will be used in case of a tie-breaker
    {
      question: "1. What is the name of a country in Africa ?",
      answers: [
        { value: "Romania", correct: false },
        { value: "Nepal", correct: false },
        { value: "Honduras", correct: false },
        { value: "Zimbabwe", correct: true }
      ]
    },
    {
      question: "2. What happend in 1917 ?",
      answers: [
        { value: "French revolution", correct: false },
        { value: "Invention of car", correct: false },
        { value: "Russian revolution", correct: true },
        { value: "End of the world war 1", correct: false }
      ]
    },
    {
      question: "3. What is the capital of Chile ?",
      answers: [
        { value: "Santiago", correct: true },
        { value: "Dublin", correct: false },
        { value: "Lima", correct: false },
        { value: "Ankara", correct: false }
      ]
    },
    {
      question: "4. Who is the inventor of theory of relativity ?",
      answers: [
        { value: "Alessandro Volta", correct: false },
        { value: "Albert Einstein", correct: true },
        { value: "Marie Curie", correct: false },
        { value: "Max Planck", correct: false }
      ]
    },
    {
      question: "5. What animals are not mammals ?",
      answers: [
        { value: "Lions", correct: false },
        { value: "Humans", correct: false },
        { value: "Crocodiles", correct: true },
        { value: "Whales", correct: false }
      ]
    },
    {
      question: "6. Who won the 2010 FIFA World Cup ?",
      answers: [
        { value: "Brazil", correct: false },
        { value: "Germany", correct: false },
        { value: "Spain", correct: true },
        { value: "Italy", correct: false }
      ]
    },
    {
      question: "Tie Breaker: Who is the first president of the United States?",
      answers: [
        { value: "George Washington", correct: true },
        { value: "Bill Clinton", correct: false },
        { value: "Jimmy Carter", correct: false },
        { value: "Abraham Lincoln", correct: false }
      ]
    }
  ],
  init: function () {
    //Reset Question Index
    this.currentQuestionIndex = 0;

    //Start with Player 1
    $("#player2-box").removeClass("player-box-active");
    $("#player1-box").addClass("player-box-active");
    this.currentPlayer = this.players[0];

    //Reset to Question #1.
    this.changeQuestion(this.currentQuestionIndex);

    //Set Scores to 0
    this.players[0].score = 0;
    this.players[1].score = 0,
      $('.score').text("0");
  },