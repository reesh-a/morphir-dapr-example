const readline = require('readline')
const http = require('http')
const express = require('express')
const app = express()

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function ask() {

	rl.question('Topic to publish message to: ', topic => {

		rl.question('JSON message to publish: \n', msg => {

			const options = {
				hostname: 'localhost',
				port: 3500,
				path: `/v1.0/publish/${topic}`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			};

			const req = http.request(options, (res) => {
				console.log(`STATUS: ${res.statusCode}`);
				console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
				res.setEncoding('utf8');
				res.on('data', (chunk) => {
					console.log(`BODY: ${chunk}`);
				});
				res.on('end', () => {
					console.log('No more data in response.');
				});
			});

			req.on('error', (e) => {
				console.error(`problem with request: ${e.message}`);
			});

			req.write(msg)
			req.end()

			console.log(`Message sent!`)

			ask()

		})
	})
}

app.get('/', (_req, res) => { res.send("Hello from node dapr publisher") })
app.listen(3000, () => {
	console.log("Json message publisher. Dapr URL: 'localhost/3500/v1.0/publish/<topic>' \n")
	ask()
})