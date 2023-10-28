import React from 'react';
import Container from '@mui/material/Container';

import './Main.css';
import HomePage from './pages/HomePage';

class Main extends React.Component<{}, { currentPage: string }> {
    constructor(props: any){
        super(props)
        this.state = {currentPage: 'home'} // different states, home, input, results
    }

    setPageHome(){
        this.setState({currentPage: 'home'})
    }
    setPageInput(){
        this.setState({currentPage: 'input'})
    }
    setPageResults(){
        this.setState({currentPage: 'results'})
    }
    render() {
        const currentPage = this.state.currentPage;
        let PageState; 
        if (currentPage === 'home'){
            PageState = <HomePage></HomePage>
        }

        return (
            <Container>
                <div className='backgroundSize backgroundColorDefault'>
                    {PageState}
                </div>
            </Container>
          );
    }
}

export default Main;
