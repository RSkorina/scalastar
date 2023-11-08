import React from 'react';
import Container from '@mui/material/Container';


import './Main.css';
import {HomePage, InputPage, ResultsPage} from './pages/index';
import {BasicSwitch} from './components/BasicSwitch'
import {originalNameHash} from './code/originalNameHash'
import { irreversableHash } from './code';
import { catHash } from './code/hashDistributor';

const getSwitchComponent = ({
    isOriginalValue,
    setIsOriginalValue
}:{
    isOriginalValue: boolean, 
    setIsOriginalValue: (value: boolean) => void
}): JSX.Element=> {
        return <div className='switchPosition'>
                    <BasicSwitch
                        isOn={isOriginalValue}
                        handleToggle={()=> setIsOriginalValue(!isOriginalValue)}
                        onColor={'#000000'}
                        offColor={'#FF0000'}
                    />
                </div>
}

const Main = () => {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [isOriginalValue, setIsOriginalValue] = React.useState(true);
    const [warrriorName, setWarriorName] = React.useState('');
    //TODO: MAKE THE BE ABLE TO TAKE IN A HASH TYPE?
    const [hashType, setHashType] = React.useState('original')

    const swapSwitch = getSwitchComponent({isOriginalValue, setIsOriginalValue});

    const setPageHome = (): void => {
        setCurrentPage('home');
    };
    const setPageInput = (): void => {
        setCurrentPage('input');
    }
    const setPageResults = (): void => {
        console.log('setWarriorCatResult')
        setWarriorName(catHash({hashType, firstName, lastName}))
        setCurrentPage('results');
    }
    const flipSwitch = (): void => {
        setIsOriginalValue(!isOriginalValue)
        setHashType(isOriginalValue ? 'irreversable': 'original')
    }

    let PageState; 

    if (currentPage === 'home'){
        PageState = <HomePage 
            onClickSetPageInput={setPageInput}
            toggleSwitch={getSwitchComponent({isOriginalValue, setIsOriginalValue: flipSwitch})}
            />
    }
    else if (currentPage ==='input') {
        PageState = 
            <InputPage
                onClickSetPageHome={setPageHome}
                onClickSetPageResults={setPageResults}
                onInputFirstName={setFirstName}
                onInputLastName={setLastName}
                toggleSwitch={getSwitchComponent({isOriginalValue, setIsOriginalValue: flipSwitch})}
            />
  
            
    }
    else if (currentPage ==='results') {
        PageState = <ResultsPage
            onClickSetPageHome={setPageHome}
            warriorName={warrriorName}
            />
    }

    const backgroundColor = isOriginalValue ? 'backgroundColorDefault' : 'backgroundColorAlternate' 
    // create value for backgroundColor and Pass it in to each page
    
    return (
        <Container>
            <div className={`backgroundSize ${backgroundColor}`}>
                {PageState}
            </div>
        </Container>
    );
}

export default Main;
