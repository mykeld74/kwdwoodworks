<script lang="ts">
	let fields = { name: '', email: '', phone: '', message: '' };
	let errors = { name: '', email: '', phone: '', message: '' };
	let formIsValid = false;
	let showTYModal = false;

	const handleInput = (e) => {
		const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		if (fields.name.length < 2) {
			formIsValid = false;
			errors.name = 'Please enter your name.';
		} else {
			errors.name = '';
		}

		if (emailTest.test(fields.email) === false) {
			formIsValid = false;
			errors.email = 'Please enter a valid email address.';
		} else {
			errors.email = '';
		}

		if (fields.message.length < 3) {
			formIsValid = false;
			errors.message = 'Please tell us how we can help you.';
		} else {
			errors.message = '';
		}
	};

	const handleSubmit = (e) => {
		formIsValid = true;
		const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		if (fields.name.length < 2) {
			formIsValid = false;
			errors.name = 'Please enter your name.';
		} else {
			errors.name = '';
		}

		if (emailTest.test(fields.email) === false) {
			formIsValid = false;
			errors.email = 'Please enter a valid email address.';
		} else {
			errors.email = '';
		}

		if (fields.message.length < 3) {
			formIsValid = false;
			errors.message = 'Please tell us how we can help you.';
		} else {
			errors.message = '';
		}

		e.preventDefault();

		let myForm = document.getElementById('contact') as HTMLFormElement;
		let formData = new FormData(myForm);
		if (formIsValid) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			})
				.then(() => {
					console.log('Form successfully submitted'), (showTYModal = true), myForm.reset();
				})
				.catch((error) => alert(error));
		}
	};
</script>

<form name="Contact" id="contact" method="POST" netlify action="/">
	<input type="hidden" name="form-name" value="contact" />
	<div class="formBlock">
		<label for="name">Name*</label>
		<input
			type="text"
			name="name"
			id="name"
			placeholder="Name"
			required
			bind:value={fields.name}
			on:input={handleInput}
		/>
		<p class="error">{errors.name}</p>
	</div>
	<div class="formBlock">
		<label for="email">Email*</label>
		<input
			type="email"
			name="email"
			id="email"
			placeholder="Email"
			required
			bind:value={fields.email}
			on:input={handleInput}
		/>
		<p class="error">{errors.email}</p>
	</div>
	<div class="formBlock">
		<label for="phone">Phone</label>
		<input
			type="tel"
			name="phone"
			id="phone"
			placeholder="Phone"
			bind:value={fields.phone}
			on:input={handleInput}
		/>
		<p class="error">{errors.phone}</p>
	</div>
	<div class="formBlock">
		<label for="message">Message*</label>
		<textarea
			name="message"
			id="message"
			placeholder="Message"
			required
			bind:value={fields.message}
			on:input={handleInput}
		/>
		<p class="error">{errors.message}</p>
	</div>
	<button type="submit" on:click={handleSubmit}>Send</button>
</form>
{#if showTYModal}
	<div><p>Thank you for your submission, we'll be in touch soon.</p></div>
{/if}

<style lang="scss">
	form {
		width: 100%;
	}
	p {
		color: #fff;
		font-size: clamp(20px, 3.5vw, 26px);
	}

	.formBlock {
		width: 100%;

		label {
			display: block;
			color: #fff;
			margin: 15px 0 0 0;
			font-size: clamp(18px, 2.5vw, 22px);
		}
		input,
		textarea {
			width: 100%;
			padding: 10px 5px;
			border-radius: 5px;
			border: none;
			font-size: clamp(18px, 2.7vw, 22px);
			margin: 10px 0;
			font-weight: 400;
			background: #fff;
		}
	}
	button {
		width: 100%;
		padding: 10px 5px;
		border-radius: 5px;
		border: none;
		font-size: clamp(18px, 3vw, 24px);
		font-weight: 700;
		background: green;
		color: #fff;
		margin-top: 20px;
	}
	.error {
		color: red;
		font-size: 16px;
		margin: 0;
		font-style: italic;
	}
</style>