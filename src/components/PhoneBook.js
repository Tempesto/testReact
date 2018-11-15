const PhoneBook =()=>{
    return fetch(`http://localhost:3000/members`)
	.then(res=>{
		return res.json()
	})
	
}
export default PhoneBook
