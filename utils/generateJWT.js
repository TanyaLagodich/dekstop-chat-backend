import jwt from 'jsonwebtoken';

export default function generateJWT({ _id, name, email }) {
  const user = { _id, name, email };
  const signature = process.env.APP_SIGNATURE; //TODO private key
  const expiration = '10h';

  return jwt.sign({ user }, signature, { expiresIn: expiration });
}