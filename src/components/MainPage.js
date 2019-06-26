import React from 'react';
import ImageChangeOnMouseOver from './ImageChangeOnMouseOver';
import HistoryInput from './HistoryInput';
import { UserConsumer } from '../UserContext';

const MainPage = () => {

    return (
        <UserConsumer>
            {props => {
                return (
                    <div>
                        Welcome {props.name}
                        <HistoryInput></HistoryInput>
                        <ImageChangeOnMouseOver />
                    </div>
                )
            }}

        </UserConsumer>
    )
}

export default MainPage;