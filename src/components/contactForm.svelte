<script lang="ts">
	import { slide } from 'svelte/transition';
	import { imask } from 'svelte-imask';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	let fields = { name: '', email: '', phone: '', message: '' };
	let formIsValid = false;
	let showTYModal = false;

	const schema = yup.object({
		name: yup
			.string()
			.matches(/^[a-zA-Z\s-]+$/, 'Only letters, dashes and spaces are allowed for this field ')
			.min(2, 'First Name must be greater then 1 character')
			.required('First Name is required'),
		email: yup.string().email('Please enter a valid email').required('Email is required'),
		message: yup
			.string()
			.min(10, 'Message must be at least 10 characters long')
			.required('Please let us know how we can help you')
	});

	const { form, errors, setFields, touched } = createForm<yup.InferType<typeof schema>>({
		onSubmit: (e) => handleSubmit(fields),
		onError: (errors) => errors,
		extend: validator({ schema }),
		initialValues: {
			...fields
		}
	});

	const handleSubmit = async (fields) => {
		try {
			await schema.validate(fields, { abortEarly: false });
			let myForm = document.getElementById('Contact') as HTMLFormElement;
			let formData = new FormData(myForm);
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			})
				.then(() => {
					console.log('Form successfully submitted'), (showTYModal = true), myForm.reset();
				})
				.catch((error) => alert(error));
		} catch (err) {
			console.log(err);
		}
	};
	const options = {
		mask: '(000) 000-0000'
	};
</script>

{#if !showTYModal}
	<p class="formHeader">
		Are you looking for high quality custom built furniture or accessories? We would love to talk to
		you. Please complete the form below and we'll be in touch.
	</p>
	<form name="Contact" id="Contact" method="POST" netlify-honeypot="details" use:form>
		<input type="hidden" name="form-name" value="Contact" />
		<input class="hidden" type="text" name="details" />
		<div class="formBlock">
			<label for="name">Name*</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				required
				bind:value={fields.name}
			/>
			{#if $errors.name}
				<p class="error" transition:slide>{$errors.name}</p>
			{/if}
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
			/>
			{#if $errors.email}
				<p class="error" transition:slide>{$errors.email}</p>
			{/if}
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
		</div>
		<div class="formBlock">
			<label for="message">Message*</label>
			<textarea
				name="message"
				id="message"
				placeholder="Message"
				required
				bind:value={fields.message}
			/>
			{#if $errors.message}
				<p class="error" transition:slide>{$errors.message}</p>
			{/if}
		</div>
		<button type="submit" on:click={handleSubmit}>Send</button>
	</form>
{/if}
{#if showTYModal}
	<div><p>Thank you for your submission, we'll be in touch soon.</p></div>
{/if}

<style lang="scss">
	.formHeader {
		font-family: var(--lightFamily);
	}
	form {
		width: 100%;
		font-family: var(--lightFamily);
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
