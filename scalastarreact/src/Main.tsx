import React from 'react';
import Container from '@mui/material/Container';

import './Main.css';
import HomePage from './pages/HomePage';

class Main extends React.Component<{}, { currentPage: string }> {
    constructor(props: any){
        super(props)
        this.state = {currentPage: 'home'} // different states, home, input, results
    }

    setPageHome(): void{
        this.setState({currentPage: 'home'})
    }
    setPageInput(): void{
        this.setState({currentPage: 'input'})
    }
    setPageResults(): void{
        this.setState({currentPage: 'results'})
    }
    
    render() {
        const currentPage = this.state.currentPage;
        const homePageProps = {
            onClickNextPage: this.setPageInput()
        }
        let PageState; 
        // if (currentPage === 'home'){
        //     console.log('home')
        //     PageState = <HomePage onClickNextPage={() => this.setPageInput()}></HomePage>
        // }

        return (
            <Container>
                
                <div className='backgroundSize backgroundColorDefault'>
                    {/* {PageState} */}
                </div>
            </Container>
          );
    }
}

export default Main;
