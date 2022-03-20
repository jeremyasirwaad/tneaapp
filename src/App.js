import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.xml";
import sha256 from "crypto-js/sha256";
// import cryptoRandomString from 'crypto-random-string';

function App() {



	useEffect(() => {
		// const getdata = async () => {
		// 	const data = await fetch(
		// 		"auth.uidai.gov.in/2.0/public/9/9/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM",{
		//       headers: {
		//         'Content-Type': 'application/xml'
		//       },
		//       body : {

		//       }
		//     }
		// 	)
		// 		.then((res) => console.log(res))
		// 		.then((asd) => console.log(data));
		// };

		// getdata();
		// console.log(cryptoRandomString({length: 10, type: 'base64'}));
		console.log(sha256("Message"));
		var xhr = new XMLHttpRequest();
		xhr.open(
			"POST",
			"https://thingproxy.freeboard.io/fetch/http://auth.uidai.gov.in/2.0/public/9/9/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM",
			true
		);
		xhr.setRequestHeader("Content-Type", "text/xml");
		xhr.send(data);
	}, []);

	return (
		<div className="App">
			<h1>Hello</h1>
		</div>
	);
}

export default App;
