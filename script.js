const cardDiv = document.querySelector('.attribute-cards')

const testResults = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg'
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg'
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg'
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg'
  }
]

testResults.forEach((result) => {
  let resultDiv = document.createElement('div')
  resultDiv.classList.add('result')

  let overlapDiv = document.createElement('div')
  overlapDiv.classList.add('overlap')

  // left
  let leftSide = document.createElement('div')
  leftSide.classList.add('result-left')

  let iconImg = document.createElement('img')
  iconImg.src = result.icon

  let resultName = document.createElement('h3')
  resultName.innerText = result.category

  leftSide.appendChild(iconImg)
  leftSide.appendChild(resultName)

  // right
  let rightSide = document.createElement('div')
  rightSide.classList.add('result-right')

  let resultScore = document.createElement('p')
  let resultSpan = document.createElement('span')
  resultSpan.innerText = result.score
  resultSpan.classList.add('bold-score')

  let defaultToAdd = document.createElement('span')
  defaultToAdd.innerText = ' / 100'
  defaultToAdd.classList.add('default-nums')

  resultScore.appendChild(resultSpan)
  resultScore.appendChild(defaultToAdd)

  rightSide.appendChild(resultScore)

  resultDiv.appendChild(leftSide)
  resultDiv.appendChild(rightSide)
  resultDiv.appendChild(overlapDiv)

  cardDiv.appendChild(resultDiv)
})
