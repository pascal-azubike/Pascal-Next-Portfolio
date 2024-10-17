export const sendEmail = (name: string, email: string, message: string, subject: string) => {
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<style>
			body {
				font-family: "Arial", sans-serif;
				margin: 0;
				padding: 0;
				background-color: #f4f4f4;
			}
			.container {
				max-width: 600px;
				margin: 20px auto;
				padding: 20px;
				background-color: #ffffff;
				border-radius: 8px;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			}
			h2 {
				margin: 0 auto;
				background-color: #004aff;
				text-align: center;
				color: #ffffff;
				padding: 10px 0;
				border-radius: 10px 10px 0 0px;

			}
			p {
				color: #555555;
				margin: 20px auto;
			}
			.verification-link {
				display: inline-block;
				padding: 10px 20px;
				background-color: #007bff;
				color: #ffffff;
				text-decoration: none;
				border-radius: 5px;
				margin: 20px auto;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<h2>${subject}</h2>
			<h3>Full Name : ${name}</h3>
			<h3>
			User Email : ${email}
			</h3>
			<h3>
			Message : ${message}
			</h3>
			

			
			<a  href="${"/"}" class="verification-link"
				>visit website</a
			>
			<p>This message is a contact us form submission from the website</p>
		</div>
	</body>
</html>`;
};

