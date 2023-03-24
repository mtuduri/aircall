import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const routerWrapper = ({ children }) => <Router>{children}</Router>;
