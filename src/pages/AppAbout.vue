<script></script>

<template>
  <div class="container mx-auto">
    <div class="about-section px-5 mb-5">
      <h1 class="mb-3">About Us</h1>
      <p>
        Creare Cocktail è un'arte, si sa, e come ogni pittore possiede il suo
        stile, ogni Mixologist può eseguire una ricetta cocktail secondo delle
        varianti suggerite dal suo sapere, oltre che dal mestiere di barman. Si
        scelgono dosi, strumenti e attrezzature bar adeguate, si studiano le
        diluizioni e le interazioni tra distillati e bevande. Non creiamo semplici
        cocktail ma esperienze sensoriali che coinvolgono tutti i nostri sensi,
        dalla vista, attraverso l'estetica e il dettaglio dei nostri cocktail, al
        gusto particolare, ricercato, raffinato che vi farà scoprire nuove
        frontiere del sapore. Ubriacatevi di Arte!
      </p>
    </div>

    <h3 class="text-center">Our Team</h3>
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            src="https://img.freepik.com/premium-vector/retro-70s-alcohol-cocktails-cartoon-style-nostalgia-80s-groovy-martini-glass-character-y2k_693602-533.jpg?w=1060"
            alt="Gabriella Valentina">
          <div class="container">
            <h2>Gabriella Valentina</h2>
            <p class="title">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>jane@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/77/97/blue-lagoon-cocktail-cartoon-character-design-vector-36717797.webp"
            alt="Gianluca Ligori">
          <div class="container">
            <h2>Gianluca Ligori</h2>
            <p class="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/70/33/a-cartoon-drawing-mai-tai-cocktail-in-super-vector-36717033.webp"
            alt="Andrea Serra">
          <div class="container">
            <h2>Andrea Serra</h2>
            <p class="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/79/43/wink-margarita-character-cartoon-style-vector-20767943.jpg"
            alt="Matteo Mancuso">
          <div class="container">
            <h2>Matteo Mancuso</h2>
            <p class="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://img.myloview.com/stickers/a-wealthy-bloody-mary-cocktail-cartoon-character-with-much-money-700-209043758.jpg"
            alt="Gabriele Barcellona">
          <div class="container">
            <h2>Gabriele Barcellona</h2>
            <p class="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>john@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  background: var(--bg);

  /*COLORS*/
  --bg: #738376;
  --firstColor: #59583a;
  --secondColor: #b54426;
  --thirdColor: #dcb06f;
  --button: #dcb06f;

  /*FONTS*/
  --mono: 'source-code-pro';
  --display: 'lust-sans';
}

h2 {
  font-size: 1.3rem;
  margin-top: 1rem;
}

h3 {
  color: var(--thirdColor);
}



.column {
  width: 20%;
  padding: 0 5px;
}

.card {
  margin: .5rem;
  background-color: var(--thirdColor);
}

.about-section {
  text-align: center;
  color: var(--button);
}



.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: var(--firstColor);
}

.button {
  border: none;
  display: inline-block;
  padding: .5rem;
  color: var(--thirdColor);
  background-color: var(--firstColor);
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: var(--secondColor);
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
