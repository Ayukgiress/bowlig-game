let frame = 1
let rolls = []

document.getElementById('roll-btn').addEventListener('click', function() {
  const pinsRemaining = 10 - rolls.reduce((a, b) => a + b, 0)
  const roll = Math.floor(Math.random() * (pinsRemaining + 1))
  rolls.push(roll)

  const frameScore = calculateFrameScore(rolls);
  document.getElementById(`frame${frame}-score`).textContent = frameScore

  if (rolls.length === 2 || roll === 10) {
    frame++
    rolls = []
    document.getElementById('frame-indicator').textContent = frame
  }

  const totalScore = calculateTotalScore()
  document.getElementById('total-score').textContent = totalScore
})

function calculateFrameScore(rolls) {
  const frameTotal = rolls.reduce((a, b) => a + b, 0)
  if (frameTotal === 10 && rolls.length === 2) {
    return 'Spare'
  } else if (frameTotal === 10 && rolls.length === 1) {
    return 'Strike'
  } else {
    return frameTotal
  }
}

function calculateTotalScore() {
  let total = 0
  for (let i = 1; i <= frame; i++) {
    const score = document.getElementById(`frame${i}-score`).textContent
    total += parseInt(score) || 0
  }
  return total
}