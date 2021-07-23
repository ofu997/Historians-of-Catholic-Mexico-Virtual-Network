import { db } from 'src/lib/db'
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
  const email = input.email.toLowerCase().trim();
  const password = await bcrypt.hash(input.password.trim(), 10);
  const isAdmin = (admins.includes(email)) ? true : false;
  const data = { ...input, email, password, isAdmin }
  return db.user.create({
    data,
  })
}

export const createAdmin = async ({ input }) => {
  const email = input.email.toLowerCase().trim();
  const password = await bcrypt.hash(input.password.trim(), 10);
  const isAdmin = (admins.includes(email)) ? true : false;
  const data = { ...input, email, password, isAdmin }
  if (!isAdmin) {
    throw new Error('you can\'t do that')
  }
  return db.user.create({
    data,
  })
}

export const updateUser = ({ id, input }) => {
  input.linkAcademia = checkLinkFormat(input.linkAcademia);
  input.linkTwitter = checkLinkFormat(input.linkTwitter);
  input.linkLinkedIn = checkLinkFormat(input.linkLinkedIn);
  input.otherMedia = checkLinkFormat(input.otherMedia);

  return db.user.update({
    data: input,
    where: { id },
  })
}

const checkLinkFormat = link => {
  link && link.split('').slice(0,4).join('')!=='http' && (link = `https://${link}`)
  return link
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const loginUser = async ({ input }) => {
  const email = input.email.toLowerCase().trim();
  const user = await db.user.findUnique({
    where: { email },
  })
  const passwordMatch = await bcrypt.compare(input.password.trim(), user.password)
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
    where: { email }
  })
}

export const logoutUser = ({ id }) => {
  return db.user.update({
    data: {
      localSessionPassword: null
    },
    where: { id }
  })
}
