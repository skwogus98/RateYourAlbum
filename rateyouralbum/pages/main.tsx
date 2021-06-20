import { useState, useEffect } from 'react';
import axios from 'axios';

export default function main() {
	return (
		<div>
			<LoginWindow />
		</div>
		
	)
}

const LoginWindow = () => {
	const [units, setUnits] = useState([])
	const fetchUser = async () => {
		try {
			const res = await axios.get('https://rateyouralbum-txdil.run.goorm.io/api/user')
			setUnits(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchUser()
	}, [])

    const loginClick = () => {
        return (
			
				<div class="userName">
					{units.map((unit, index) => 
					{unit.nickname}
					)}
				</div>
        )
    }

	return (
        <div class="login">
            <label id="login">ID</label>
            <input type="text" placeholder="id"></input>
            <button onClick={loginClick} id="loginButton">로그인</button>
            <br />
            <label id="login">password</label>
            <input type="text" placeholder="password"></input>
            <button id="loginButton">회원가입</button>
			<div class="userName">
					{units.map((unit, index) => 
					{unit.nickname}
					)}
			</div>
        </div>
		
    );
}