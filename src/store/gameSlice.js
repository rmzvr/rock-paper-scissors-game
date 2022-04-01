import { createSlice } from '@reduxjs/toolkit'

import paper from '../assets/paper.svg'
import scissors from '../assets/scissors.svg'
import rock from '../assets/rock.svg'
import roulette from '../assets/mix.gif'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    elements: [
      {
        name: 'paper',
        image: paper,
      },
      {
        name: 'scissors',
        image: scissors,
      },
      {
        name: 'rock',
        image: rock,
      },
    ],
    players: {
      player: {
        element: {
          name: '',
          id: '',
          image: '',
        },
        isElementSelected: false,
        isWinner: false,
      },
      computer: {
        element: {
          name: 'roulette',
          image: roulette,
        },
        isElementSelected: false,
        isWinner: false,
      },
    },
    animations: {
      player: '',
      computer: '',
      resultHUD: '',
      elementsList: '',
      gameField: '',
      modal: '',
    },
    result: {
      score: 0,
      status: '',
    },
  },
  reducers: {
    setActiveElement(state, action) {
      const selectedElement = state.elements.find(
        (element) => element.name === action.payload.name
      )

      state.players.player.element = selectedElement
      state.players.player.isElementSelected = true
    },

    getRandomElement(state) {
      const randomIndex = Math.round(0 - 0.5 + Math.random() * (2 - 0 + 1))
      const randomElement = state.elements[randomIndex]

      state.players.computer.element = randomElement
      state.players.computer.isElementSelected = true
    },

    getWinner(state) {
      const elements = ['paper', 'scissors', 'rock']

      const playerElement = state.players.player.element
      const computerElement = state.players.computer.element

      const userIndex = elements.indexOf(playerElement.name)
      const computerIndex = elements.indexOf(computerElement.name)

      if (userIndex === computerIndex) {
        state.result.status = 'TIE'
        return
      }

      if (computerIndex === (userIndex + 1) % 3) {
        state.players.computer.isWinner = true
        state.result.status = 'YOU LOSE'
      } else {
        state.players.player.isWinner = true
        state.result.status = 'YOU WIN'
      }
    },

    updateScore(state) {
      if (state.result.status === 'TIE') return

      if (state.result.status === 'YOU WIN') {
        state.result.score += 1
        return
      }

      if (state.result.score === 0) return

      if (state.result.status === 'YOU LOSE') {
        state.result.score -= 1
        return
      }
    },

    setModalAnimation(state, action) {
      switch (action.payload.animation) {
        case 'fadeIn':
          state.animations.modal = 'fadeIn'
          break

        case 'fadeOut':
          state.animations.modal = 'fadeOut'
          break

        default:
          state.animations.modal = ''
          break
      }
    },

    setGameFieldAnimation(state, action) {
      switch (action.payload.animation) {
        case 'fadeIn':
          state.animations.gameField = 'fadeIn'
          break

        default:
          state.animations.gameField = ''
          break
      }
    },

    setResultAnimation(state, action) {
      switch (action.payload.animation) {
        case 'fadeIn':
          state.animations.resultHUD = 'fadeIn'
          break

        case 'slideToBottom':
          state.animations.resultHUD = 'slideToBottom'
          break

        default:
          state.animations.resultHUD = ''
          break
      }
    },

    setElementsListAnimation(state, action) {
      switch (action.payload.animation) {
        case 'fadeOut':
          state.animations.elementsList = 'fadeOut'
          break

        case 'longFadeIn':
          state.animations.elementsList = 'longFadeIn'
          break

        default:
          state.animations.elementsList = ''
          break
      }
    },

    setPlayersAnimation(state, action) {
      switch (action.payload.animation) {
        case 'shortSlideToLeft':
          state.animations.player = 'shortSlideToLeft'
          state.animations.computer = 'shortSlideToRight'
          break

        case 'longSlideToLeft':
          state.animations.player = 'longSlideToLeft'
          state.animations.computer = 'longSlideToRight'
          break

        default:
          state.animations.player = ''
          state.animations.computer = ''
          break
      }
    },

    resetPlayers(state) {
      state.players.player = {
        element: {
          name: '',
          id: '',
          image: '',
        },
        isElementSelected: false,
        isWinner: false,
      }

      state.players.computer = {
        element: {
          name: 'roulette',
          image: roulette,
        },
        isElementSelected: false,
        isWinner: false,
      }
    },
  },
})

export const {
  setActiveElement,
  getRandomElement,
  getWinner,
  updateScore,

  setModalAnimation,
  setResultAnimation,
  setGameFieldAnimation,
  setElementsListAnimation,
  setPlayersAnimation,

  resetPlayers,
} = gameSlice.actions

export default gameSlice.reducer
