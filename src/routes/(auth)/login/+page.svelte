<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import {
		Field,
		FieldDescription,
		FieldError,
		FieldGroup,
		FieldLabel
	} from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="flex min-h-svh items-center justify-center px-6 py-10">
	<Card.Root class="mx-auto w-full max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Welcome back</Card.Title>
			<Card.Description
				>Sign in to continue, or create an account with the same form.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<form method="post" action="?/signInEmail" use:enhance>
				<FieldGroup>
					<Field>
						<FieldLabel for="email">Email</FieldLabel>
						<Input id="email" name="email" type="email" placeholder="m@example.com" required />
					</Field>
					<Field>
						<FieldLabel for="password">Password</FieldLabel>
						<Input id="password" name="password" type="password" required />
					</Field>
					<Field>
						<FieldLabel for="name">Name</FieldLabel>
						<Input id="name" name="name" type="text" placeholder="Your name" />
						<FieldDescription>Only needed when creating a new account.</FieldDescription>
					</Field>
					<Field>
						<div class="flex flex-col gap-3">
							<Button type="submit" class="w-full">Login</Button>
							<Button
								type="submit"
								formaction="?/signUpEmail"
								variant="outline"
								class="w-full"
							>
								Create account
							</Button>
						</div>
						<FieldDescription class="text-center">
							Use your email and password to sign in. If you are new here, add your name and create an account.
						</FieldDescription>
						<FieldError errors={form?.message ? [{ message: form.message }] : undefined} />
					</Field>
				</FieldGroup>
			</form>
		</Card.Content>
	</Card.Root>
</div>