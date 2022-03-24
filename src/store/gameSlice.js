import { createSlice } from '@reduxjs/toolkit'

import paper from '../assets/paper.svg'
import scissors from '../assets/scissors.svg'
import rock from '../assets/rock.svg'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    elements: [
      { name: 'paper', id: 'paper', image: paper, state: 'visible' },
      { name: 'scissors', id: 'scissors', image: scissors, state: 'visible' },
      { name: 'rock', id: 'rock', image: rock, state: 'visible' },
    ],
    triangle: {
      state: 'visible',
    },
    gameField: {
      state: 'hidden',
    },
    score: 0,
    roulette: {
      isCompleted: false,
      randomElement: 0,
    },
    compare: [],
    result: '',
  },
  reducers: {
    setActiveElement(state, action) {
      state.compare.push(action.payload.name)
      state.elements.map((element) => {
        if (element.name === action.payload.name) {
          element.state = 'active'
        } else {
          element.state = 'hidden'
        }
      })
    },
    showGameField(state, action) {
      state.gameField.state = 'visible'
    },
    hideTriangle(state, action) {
      state.triangle.state = 'hidden'
    },
    getRandomElement(state) {
      const randomIndex = Math.round(0 - 0.5 + Math.random() * (2 - 0 + 1))
      const randomElement = state.elements[randomIndex]

      state.roulette.isCompleted = true
      state.roulette.randomElement = randomElement
      state.compare.push(randomElement.name)
    },
    compareWinner(state, action) {
      const player = state.compare[0]
      const roulette = state.compare[1]

      if (player === roulette) {
        state.result = 'TIE'
        return
      }

      if (player === 'rock') {
        if (roulette === 'scissors') {
          state.result = 'YOU WIN'
        } else {
          state.result = 'YOU LOSE'
        }
      } else if (player === 'paper') {
        if (roulette === 'rock') {
          state.result = 'YOU WIN'
        } else {
          state.result = 'YOU LOSE'
        }
      } else {
        if (roulette === 'paper') {
          state.result = 'YOU WIN'
        } else {
          state.result = 'YOU LOSE'
        }
      }
    },
  },
})

export const {
  setActiveElement,
  showGameField,
  hideTriangle,
  getRandomElement,
  compareWinner,
} = gameSlice.actions

export default gameSlice.reducer
