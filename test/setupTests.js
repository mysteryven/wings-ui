const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
require('jest-extended');

enzyme.configure({adapter: new Adapter()})