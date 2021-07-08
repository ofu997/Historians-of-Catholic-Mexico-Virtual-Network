import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import admins from 'src/lib/admins'
import bcrypt from 'bcryptjs'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  // rules.add(requireAuth)
  rules.skip()
}

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

// flow: create admins. login as admins. protect /admins/register page. create other users.
// FE validate
export const createUser = async ({ input }) => {
  const password = await bcrypt.hash(input.password, 10);
  const isAdmin = (admins.includes(input.email)) ? true : false;
  const data = { ...input, password, isAdmin }
  return db.user.create({
    data,
  })
}

export const createAdmin = async ({ input }) => {
  const password = await bcrypt.hash(input.password, 10);
  const isAdmin = (admins.includes(input.email)) ? true : false;
  const data = { ...input, password, isAdmin }
  if (!isAdmin) {
    throw new Error('you can\'t do that')
  }
  return db.user.create({
    data,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const loginUser = async ({ input }) => {
  const user = await db.user.findUnique({
    where: { email: input.email },
  })
  const passwordMatch = await bcrypt.compare(input.password, user.password)
  if (!passwordMatch) {
    throw new Error('Invalid Login')
  }
  const generateLocalSessionPassword = () => {
    let length=26, result = "",
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[]\{}|;':,./<>?";

    for (let i=0, n = charset.length; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * n));
    }
    return result;
  };
  const localSessionPassword = generateLocalSessionPassword();
  return db.user.update({
    data: {
      localSessionPassword,
    },
    where: { email: input.email }
  })
}
