import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	const user = locals.user;

	if (!user) {
		redirect(302, '/login');
	}

	return {
		user,
		session: locals.session
	};
};