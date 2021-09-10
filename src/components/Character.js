// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 80vw;
    display:flex;
    margin-top: 10vh;
    color: #03A062;
    background-color : #404040;   
    max-height: 80vh;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
    padding:40px;
    justify-content: space-between;

    .planet-picture {
        overflow: hidden;
        margin-right: 40px;
    }

    .planet-description{
        max-width: 20em;
        min-width: 20em;
        overflow: scroll;
    }

    
    `

    const Character = props => {


        return (
            <StyledCharacter>
                <h1>{props.info.name}</h1>
                <h2>{props.info.birth_year}</h2>
            </StyledCharacter>
        )

    }

    export default Character;