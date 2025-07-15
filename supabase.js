import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

async function authenticateUser(username, password) {
    const { data, error } = await supabase
      .from('users')
      .select('username, password')
      .eq('username', username)
      .single();
  
    if (error || !data) {
      return { error: 'Username not found' };
    }
  
    if (data.password !== password) {
      return { error: 'Incorrect password' };
    }
  
    return { success: true, user: data };
  }
  