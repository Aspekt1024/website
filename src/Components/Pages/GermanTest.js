import React, { Component } from 'react'

class GermanTest extends Component {

    constructor(props){
        super(props)

        this.state = {
            words: [],
            guesses: {},
            currentIndex: 0,
            numCorrect: 0,
            numSubmits: 0,
            input: '',
            completed: false,
            showingResult: false,
            testLoaded: false,
            loadErrorReceived: false,
            loadErrorMessage: '',
        }

        this.mainInput = React.createRef()
        this.submitButton = React.createRef()
    }

    componentDidMount = () => {
        fetch('http://13.54.106.2/germantest/1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
        .then (response =>{
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.status + ': ' + response.statusText + '\n' + response.body)
            }
        })
        .then (data => {
            this.setState({ words: data.words, testLoaded: true })
        })
        .catch (error => {
            this.setState({ 
                loadErrorReceived: true, 
                testLoaded: true, 
                loadErrorMessage: 'Oops, something went wrong! It was probably gremlins.' 
            })
        })
    }

    render() {


        return (
            <div className='page'>
                <h1>German Vocabulary Test</h1>
                { this.state.testLoaded ?
                    this.state.loadErrorReceived ?
                        this.renderError()
                    :
                        this.renderTest()
                :
                    <div className='vocabulary-test'>
                        Loading test from mongodb...
                    </div>
                }
            </div>
        )
    }

    renderTest = () => {
        const {
            currentWord = this.state.words[this.state.currentIndex],
            numWords = this.state.words.length,
            state: { numCorrect, numSubmits, completed, showingResult }
        } = this

        return (
            <div>
                <div className='test-score'>
                    <p>Correct: {numCorrect} / {numSubmits}</p>
                    <p>Total words: {numWords}</p>
                </div>

                {completed || numWords === 0 ?
                    <div className='vocabulary-test'>
                        <form>
                            <input type='submit' value='Try again!' onClick={this.handleRetry} />
                        </form>
                    </div>
                :
                    <div className='vocabulary-test'>
                        <p>Translate to German:</p>
                        <p className='question'>{currentWord.en}</p>

                        <form onSubmit={this.handleSubmit}>
                            <input type='input' value={this.state.input}
                                ref={this.mainInput}
                                onChange={this.handleInputChange}
                                disabled={showingResult ? false : false }
                            />
                            <input type='submit' className='button'
                                value={showingResult ? 'continue' : 'submit'}
                                ref={this.submitButton}
                            />
                        </form>
                        { showingResult ?
                            this.state.guesses[this.state.currentIndex] ?
                                <p><span className='correct-answer'>Richtig!</span></p>
                            :
                                <p><span className='incorrect-answer'>Falsch:</span> {currentWord.de}</p>
                        :
                            ''
                        }
                    </div>
                }
            </div>
        )
    }

    renderError = () => {
        return (
            <div className='vocabulary-test'>
                {this.state.loadErrorMessage}
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.showingResult){
            this.setState({ showingResult: false, input: '' })
            this.getNewWord()
            this.mainInput.current.focus()
            return
        }

        if (this.state.completed) {
            this.handleRetry()
        } else {
            const currentWord = this.state.words[this.state.currentIndex]
            if (this.state.input === currentWord.de) {
                var guesses = this.state.guesses
                guesses[this.state.currentIndex] = true
                this.setState({ guesses: guesses,
                    numCorrect: this.state.numCorrect + 1 })
            }
            this.setState({ numSubmits: this.state.numSubmits + 1, showingResult: true })
            this.submitButton.current.focus()
        }
    }

    handleInputChange = ({ target }) => {
        if (!this.state.showingResult){
            this.setState({ input: target.value })
        }
    }

    getNewWord = () => {
        var newIndex = this.state.currentIndex + 1
        if (newIndex === this.state.words.length){
            this.setState({ completed: true })
        } else {
            this.setState({ currentIndex: newIndex })
        }
    }
    
    handleRetry = () => {
        this.setState({ completed: false, guesses: {}, input: '', numCorrect: 0, currentIndex: 0 })
    }
}

export default GermanTest