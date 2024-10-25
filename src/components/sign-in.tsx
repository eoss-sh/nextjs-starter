import { auth, signIn, signOut } from '@/config/auth';

import { Button } from './ui/button';

export default async function SignIn() {
  const session = await auth();
  return (
    <div>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        {!session && <Button type="submit">Signin with Google</Button>}
      </form>
      <div className="flex items-center justify-between">
        {session && session?.user?.name}
        {session && (
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button variant="ghost">Signout</Button>
          </form>
        )}
      </div>
    </div>
  );
}
