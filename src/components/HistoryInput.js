import React, { useContext, useState } from 'react';
import UserContext from '../UserContext';
import ImageChangeOnMouseOver from './ImageChangeOnMouseOver';


const HistoryInput = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    const user = useContext(UserContext);

    return (

        <div>
            <center>
                <label>Please enter your surname {user.name}</label>
                &nbsp;
                <input
                    onChange={(e) => {
                        setInputText(e.target.value)
                        setHistoryList([...historyList, e.target.value]);
                    }}
                    placeholder="enter your text"/> <br />
                {inputText}
                <hr /> <br />
                <ul>
                    {historyList.map((rec) => {
                        return <div>
                            {rec}
                        </div>
                    })}
                </ul>
            </center>
        </div>

    );

};
export default HistoryInput;