import React from 'react';
import ReactDOM from 'react-dom';
import {screen,render, cleanup} from '@testing-library/react'
import App from './App';
import {sum, rest} from './App';


it("checkButtonCE",()=>{
    const {queryByTitle} = render(<App />);
    const btn = queryByTitle("Bce");
    expect(btn).toBeTruthy();

});

it("checkButtonC",()=>{
    const {queryByTitle} = render(<App />);
    const btn = queryByTitle("Bc");
    expect(btn).toBeTruthy();

});

it("checkButtonDIV",()=>{
    const {queryByTitle} = render(<App />);
    const btn = queryByTitle("Bdiv");
    expect(btn).toBeTruthy();

});

it("checkButtonMULT",()=>{
    const {queryByTitle} = render(<App />);
    const btn = queryByTitle("Bmult");
    expect(btn).toBeTruthy();

});

it("checkButtonSUM",()=>{
    const {queryByTitle} = render(<App />);
    const btn = queryByTitle("Bsum");
    expect(btn).toBeTruthy();

});

it("checkButtonREST",()=>{
    const {queryByTitle} = render(<App />);
    const btn = queryByTitle("Brest");
    expect(btn).toBeTruthy();

});

it("sum",() =>{
    expect(sum(2,10)).toBe(12);
});

it("rest",() =>{
    expect(rest(10,2)).toBe(8);
});
