/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['./src/**/*.{ts,js}'],
  testEnvironment: 'jsdom'
}
