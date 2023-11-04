import React from 'react';
import Container from '@mui/material/Container';


import './Main.css';
import {HomePage, InputPage, ResultsPage} from './pages/index';
import {BasicSwitch} from './components/BasicSwitch'
import {originalNameHash} from './code/originalNameHash'

const Main = () => {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [isOriginalValue, setIsOriginalValue] = React.useState(true);
    const [warrriorName, setWarriorName] = React.useState('');

    const setPageHome = (): void => {
        console.log("setPageHome");
        setCurrentPage('home');
    };
    const setPageInput = (): void => {
        console.log("setPageInput");
        setCurrentPage('input');
    }
    const setPageResults = (): void => {
        setWarriorName(originalNameHash({firstName, lastName}))
        setCurrentPage('results');
    }

    let PageState; 

    if (currentPage === 'home'){
        PageState = <HomePage onClickSetPageInput={setPageInput}></HomePage>
    }
    else if (currentPage ==='input') {
        PageState = <InputPage
            onClickSetPageHome={setPageHome}
            onClickSetPageResults={setPageResults}

            onInputFirstName={setFirstName}
            onInputLastName={setLastName}

            />
    }
    else if (currentPage ==='results') {
        PageState = <ResultsPage
            onClickSetPageHome={setPageHome}
            warriorName={warrriorName}
            />
    }

    return (
        <Container>
            <div className='backgroundSize backgroundColorDefault'>
                {PageState}
                <div className='switchPosition'>
                    <BasicSwitch
                        isOn={isOriginalValue}
                        handleToggle={()=> setIsOriginalValue(!isOriginalValue)}
                        onColor={'#000000'}
                        offColor={'#FF0000'}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Main;
