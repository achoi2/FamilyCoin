import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Container } from 'bloomer'; 

let page = <Container>
        <Router />
    </Container>

ReactDOM.render(page, document.getElementById('root'));
