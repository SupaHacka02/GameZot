"use client"

import NavBar from '@/components/NavBar';
import TicTacToe from '@/games/TicTacToe';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default Main;
