import React, {useState} from 'react';

export default function Login({ currentPage }) {

    const [inputText, setInputText] = useState({
        username: "",
        password: ""
    });

    const formHandler = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(inputText)
    }

    if (currentPage !== 0) return (null);

    return (
        <div>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={inputText.username} onChange={formHandler} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={inputText.password} onChange={formHandler} />
                </div>
                <div>
                    <button onClick={submitForm}>Log in</button>
                </div>
            </form>
        </div>
    )
}