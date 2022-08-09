<script lang="ts">
	import { imask } from 'svelte-imask';
	let fields = { name: '', email: '', phone: '', message: '' };
	let errors = { name: '', email: '', phone: '', message: '' };
	let formIsValid = false;
	let showTYModal = false;

	const validateField = (fieldName, value) => {
		let error = '';
		switch (fieldName) {
			case 'name':
				if (value.length < 2) {
					errors.name = 'Name must be at least 2 characters long';
				} else {
					errors.name = '';
				}
				break;
			case 'email':
				if (!value.includes('@')) {
					errors.email = 'Please enter a valid email';
				} else {
					errors.email = '';
				}
				break;
			case 'phone':
				if (value.length < 10) {
					errors.phone = 'Phone must be at least 10 characters long';
				} else {
					errors.phone = '';
				}
				break;
			case 'message':
				if (value.length < 10) {
					errors.message = 'Message must be at least 10 characters long';
				} else {
					errors.message = '';
				}
				break;
		}
		return error;
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

		let myForm = document.getElementById('Contact') as HTMLFormElement;
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
	const options = {
		mask: '(000)000-0000'
	};
</script>

{#if !showTYModal}
	<p class="formHeader">
		Are you looking for high quality custom built furniture or accessories? We would love to talk to
		you. Please complete the form below and we'll be in touch.
	</p>
	<form name="Contact" id="Contact" method="POST" netlify-honeypot="details">
		<input type="hidden" name="form-name" value="Contact" />
		<input class="hidden" name="details" />
		<div class="formBlock">
			<label for="name">Name*</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				required
				bind:value={fields.name}
				on:blur={() => validateField('name', fields.name)}
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
				on:blur={() => validateField('email', fields.email)}
			/>
			<p class="error">{errors.email}</p>
		</div>
		<div class="formBlock">
			<label for="phone">Phone</label>
			<input
				use:imask={options}
				type="tel"
				name="phone"
				id="phone"
				placeholder="Phone"
				bind:value={fields.phone}
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
				on:blur={() => validateField('message', fields.message)}
			/>
			<p class="error">{errors.message}</p>
		</div>
		<button type="submit" on:click={handleSubmit}>Send</button>
	</form>
{/if}
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
	.hidden {
		display: none;
	}
</style>
