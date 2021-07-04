import React, {useState} from 'react';

export default function Login({ currentPage, logged, setLogged }) {

    const [failedAuth, setFailedAuth] = useState(false)

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
        try {
            const res = await fetch('http://localhost:4000/auth', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(inputText)
            })
            const data = await res.json();
            if (data.logged) {
                setLogged({
                    logged: true,
                    jwt: data.jwt
                })
                setFailedAuth(false)
            } else {
                setFailedAuth(!failedAuth);
            }
        } catch (err) {
            console.log(err)
        }
    }

    const message = () => {
        if (failedAuth) return (<p>Wrong username or password.</p>)
        return (null);
    }

    if (currentPage !== 0) return (null);

    if (!logged) return (
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
            {message()}
        </div>
    )

    return (
        <h1>logged</h1>
    )
}