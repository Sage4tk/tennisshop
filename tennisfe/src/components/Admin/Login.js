import React, {useState} from 'react';

export default function Login({ currentPage }) {

    const [inputText, setInputText] = useState({
        userName: "",
        password: ""
    });

    const formHandler = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(inputText)
        try {
            const data = await fetch('http://localhost:4000/auth', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(inputText)
            }).then(res => res.json())
            .then(data => console.log(data))
        } catch (err) {
            console.log(err)
        }
    }

    if (currentPage !== 0) return (null);

    return (
        <div>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="userName" value={inputText.username} onChange={formHandler} />
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