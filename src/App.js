// App.jsx

import React from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

export default function App() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(transcript);
    resetTranscript();
  };

  return (
    <div className='app-container'>
      <h1>Speech To Text Converter</h1>
      <div className='content'>
        {transcript.length === 0 ? 'Start speaking to convert speech to text.' : transcript}
      </div>

      <div className='btn'>
        <button onClick={copyTextToClipboard} style={{margin:"30px"}} disabled={transcript.length === 0}>
          Copy Text
        </button>
        <button onClick={startListening}   disabled={listening}>
          Start Listening
        </button>
        <button onClick={stopListening} style={{margin:"30px"}}  disabled={!listening}>
          Stop Listening
        </button>
      </div>
    </div>
  );
}
