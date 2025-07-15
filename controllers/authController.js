import { authenticateUser } from '../services/auth.service.js';

export async function login(req, res) {
  const { username, password } = req.body;
  const result = await authenticateUser(username, password);

  if (result.error) {
    return res.status(401).json({ error: result.error });
  }

  res.json({ message: 'Login successful' });
}
