import { createSlice } from '@reduxjs/toolkit'

import paper from '../assets/paper.svg'
import scissors from '../assets/scissors.svg'
import rock from '../assets/rock.svg'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    elements: [
      {
        name: 'paper',
        id: 'paper',
        image: paper,
        state: 'visible',
        status: 'tie',
      },
      {
        name: 'scissors',
        id: 'scissors',
        image: scissors,
        state: 'visible',
        status: 'tie',
      },
      {
        name: 'rock',
        id: 'rock',
        image: rock,
        state: 'visible',
        status: 'tie',
      },
    ],
    triangle: {
      state: 'visible',
    },
    gameField: {
      visible: 'hidden',
      state: 'active',
    },
    // ! ЗІС ІС НОТ ГУД ВЕН СКОРЕ БІЛОВ ЗІРО
    score: 0,
    roulette: {
      isCompleted: false,
      randomElement: 0,
    },
    compare: [],
    result: '',
    players: {
      player: {
        position: 'static',
      },
      roulette: {
        position: 'static',
      },
    },
    resultTable: {
      position: 'static',
    },
  },
  reducers: {
    setActiveElement(state, action) {
      const element = state.elements.find(
        (element) => element.name === action.payload.name
      )

      state.compare.push(element)

      state.elements.map((element) => {
        if (element.name === action.payload.name) {
          element.state = 'active'
        } else {
          element.state = 'hidden'
        }
      })
    },
    showGameField(state, action) {
      state.gameField.visible = 'visible'
      state.players.player.position = 'static'
      state.players.roulette.position = 'static'
      state.resultTable.position = 'static'
    },
    hideTriangle(state, action) {
      state.triangle.state = 'hidden'
    },
    getRandomElement(state) {
      const randomIndex = Math.round(0 - 0.5 + Math.random() * (2 - 0 + 1))
      const randomElement = state.elements[randomIndex]

      state.roulette.isCompleted = true
      state.roulette.randomElement = randomElement
      state.compare.push(randomElement)
    },
    compareWinner(state, action) {
      let player = state.compare[0]
      let roulette = state.compare[1]

      const playerElement = player.name
      const rouletteElement = roulette.name

      if (playerElement === rouletteElement) {
        state.result = 'TIE'
        player = { ...player, status: 'tie' }
        roulette = { ...roulette, status: 'tie' }
        return
      }

      if (playerElement === 'rock') {
        if (rouletteElement === 'scissors') {
          player.status = 'winner'
          state.result = 'YOU WIN'
        } else {
          roulette.status = 'winner'
          state.result = 'YOU LOSE'
        }
      } else if (playerElement === 'paper') {
        if (rouletteElement === 'rock') {
          player.status = 'winner'
          state.result = 'YOU WIN'
        } else {
          roulette.status = 'winner'
          state.result = 'YOU LOSE'
        }
      } else {
        if (rouletteElement === 'paper') {
          player.status = 'winner'
          state.result = 'YOU WIN'
        } else {
          roulette.status = 'winner'
          state.result = 'YOU LOSE'
        }
      }
    },
    updateScore(state, action) {
      if (state.result === 'YOU WIN') {
        state.score += 1
      } else if (state.result === 'YOU LOSE') {
        if (state.score >= 1) {
          state.score -= 1
        }
      }
    },
    showResult(state, action) {
      state.gameField.state = 'finished'
      state.elements.map((element) => {
        element.state = 'hidden'
      })
    },
    resetGame(state) {
      state.compare = []
      state.roulette.isCompleted = false

      state.triangle.state = 'visible'

      state.gameField.visible = 'hidden'
      state.gameField.state = 'active'

      state.elements.map((element) => {
        element.state = 'visible'
      })

      state.players.player.position = 'slideToLeft'
      state.players.roulette.position = 'slideToRight'
      state.resultTable.position = 'slideToBottom'
    },
  },
})

export const {
  setActiveElement,
  showGameField,
  hideTriangle,
  getRandomElement,
  compareWinner,
  updateScore,
  showResult,
  resetGame,
} = gameSlice.actions

export default gameSlice.reducer
