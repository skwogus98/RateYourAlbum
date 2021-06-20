import { useState, useEffect } from 'react';
import axios from 'axios';

export default function main() {
	return (
		<login />
	)
}

const login = () => {
    const loginClick = () => {
        const [units, setUnits] = useState([])
        
        const fetchUser = async () => {
            try {
                const res = await axios.get('https://https://rateyouralbum-txdil.run.goorm.io/api/user')
                setUnits(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        
        useEffect(() => {
            fetchUser()
        }, [])
        
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
            <button id="loginButton" onclick={loginClick}>로그인</button>
            <br />
            <label id="login">password</label>
            <input type="text" placeholder="password"></input>
            <button id="loginButton">회원가입</button>
        </div>
    );
}

const GunplaTable = () => {
	const [units, setUnits] = useState([])
	
	const fetchGunpla = async () => {
		try {
			const res = await axios.get('https://react-gunpladb-bajus.run.goorm.io/api/gunpla')
			setUnits(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		fetchGunpla()
	}, [])
	
	return (
		<table>
			<tr>
				<th>이미지</th>
				<th>이름</th>
				<th>모델</th>
				<th>등급</th>
				<th>설명</th>
				<th>박스아트</th>
			</tr>
			{units.map((unit, index) => 
				<tr key={index}>
					<td>{unit.filename}</td>
					<td>{unit.name}</td>
					<td>{unit.model}</td>
					<td>{unit.grade}</td>
					<td>{unit.description}</td>
					<td ><img src={unit.boxart} className='boxart'/></td>
				</tr>
			)}
		</table>
	)
}