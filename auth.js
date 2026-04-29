// Shared auth helper — included on every protected page
// Call: const ctx = await requireAuth('setter') or requireAuth('admin')
// Returns { client, user, meta } or redirects

async function initSupabase() {
  return window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
}

async function requireAuth(requiredRole) {
  const client = await initSupabase();
  const { data: { session } } = await client.auth.getSession();

  if (!session) {
    window.location.href = '/index.html';
    return null;
  }

  const { data: meta, error } = await client
    .from('users_meta')
    .select('role, display_name, email')
    .eq('id', session.user.id)
    .single();

  if (error || !meta) {
    await client.auth.signOut();
    window.location.href = '/index.html';
    return null;
  }

  if (requiredRole === 'admin' && meta.role !== 'admin') {
    window.location.href = '/dialer.html';
    return null;
  }

  return { client, user: session.user, meta };
}

async function logout() {
  const client = await initSupabase();
  await client.auth.signOut();
  window.location.href = '/index.html';
}
