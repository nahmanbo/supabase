import supabase from '../supabase/supabase.js';

export async function authenticateUser(username, password) {
  if (!username || !password) {
    return { error: 'Missing username or password' };
  }

  const { data, error } = await supabase
    .from('users')
    .select('username, password')
    .eq('username', username)
    .single();

  if (error || !data || data.password !== password) {
    return { error: 'Wrong username or password' };
  }

  return { success: true, user: data };
}
