import supabase from '../supabase/supabase.js';

export async function authenticateUser(username, password) {
  username = username?.trim();
  password = password?.trim();

  console.log('Received:', { username, password });

  if (!username || !password) {
    return { error: 'Missing username or password' };
  }

  const { data, error } = await supabase
    .from('users')
    .select('username, password')
    .eq('username', username)
    .single();

  console.log('Supabase result:', data, error);

  if (error) {
    return { error: 'Wrong username' };
  }

  if (data.password !== password) {
    return { error: 'Wrong password' };
  }

  return { success: true, user: data };
}
