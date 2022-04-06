import { db } from 'src/lib/db'
import admins from 'src/lib/admins'
import bcrypt from 'bcryptjs'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  // rules.add(requireAuth)
  rules.skip()
}

export const users = () => {
  return db.user.findMany({
    orderBy: {
      lastname: 'asc'
    }
  })
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
  const lastname = getLastName(input.name)
  const data = { ...input, email, password, isAdmin, lastname }
  return db.user.create({
    data,
  })
}

export const updateUserPassword = async ({ id, input }) => {
  const password = await bcrypt.hash(input.trim(), 10);
  return db.user.update({
    data: { password },
    where: { id }
  })
}

const getLastName = name => {
  let nameArray = name.split(' ')
  return nameArray[1];
}

export const createAdmin = async ({ input }) => {
  const email = input.email.toLowerCase().trim();
  const password = await bcrypt.hash(input.password.trim(), 10);
  const isAdmin = (admins.includes(email)) ? true : false;
  const lastname = getLastName(input.name)
  const data = { ...input, email, password, isAdmin, lastname }
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
  if (!user) {
    throw new Error(`\u2715 email`)
  }
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

export const findUsersByTag = ({ tag }) => {
  switch(tag) {
    case "church-and-state-relations":
      return db.user.findMany({
        where: {
          tagChurchStateRels: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
    case "catholicism-and-gender":
      return db.user.findMany({
        where: {
          tagCathGender: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
    case "right-and-left-wing-politics":
      return db.user.findMany({
        where: {
          tagRightLeftWing: true,
        },
        orderBy: {
          lastname: 'asc'
        }
      })
    case "violence-militancy-martyrdom":
      return db.user.findMany({
        where: {
          tagViolenceMilitancyMartyrdom: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "catholicism-and-youth-student-groups":
      return db.user.findMany({
        where: {
          tagCathYouthStudentGroups: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "nationalism":
      return db.user.findMany({
        where: {
          tagNationalism: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "migrations":
      return db.user.findMany({
        where: {
          tagMigrations: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "modernity-secularization-sciences":
      return db.user.findMany({
        where: {
          tagModernitySecSciences: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "press-literature-intellectual-history":
      return db.user.findMany({
        where: {
          tagPressLitIntelHist: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "music-and-arts":
      return db.user.findMany({
        where: {
          tagMusArts: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "visual-culture":
      return db.user.findMany({
        where: {
          tagVisCulture: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "transnational-and-international-history":
      return db.user.findMany({
        where: {
          tagTransIntlHist: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "local-and-regional-history":
      return db.user.findMany({
        where: {
          tagLocRegHist : true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "oral-history":
      return db.user.findMany({
        where: {
          tagOralHist: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "race-and-racism":
      return db.user.findMany({
        where: {
          tagRaceRacism: true
        },
        orderBy: {
          lastname: 'asc'
        }
      })
      case "devotions":
        return db.user.findMany({
          where: {
            tagDevotions: true
          },
          orderBy: {
            lastname: 'asc'
          }
        })
      case "clergy":
        return db.user.findMany({
          where: {
            tagClergy: true
          },
          orderBy: {
            lastname: 'asc'
          }
        })
      case "liturgy":
        return db.user.findMany({
          where: {
            tagLiturgy: true
          },
          orderBy: {
            lastname: 'asc'
          }
        })
      default:
        return;
  }
}

// name location university focusByTopic focusByEra
export const search = ({ entry }) => {
  return db.user.findMany({
    where: {
      OR: [
        { name: { contains: entry, mode: 'insensitive' } },
        { location: { contains: entry, mode: 'insensitive' } },
        { university: { contains: entry, mode: 'insensitive' } },
        { focusByTopic: { contains: entry, mode: 'insensitive' } },
        { focusByEra: { contains: entry, mode: 'insensitive' } }
      ]
    },
    orderBy: {
      lastname: 'asc'
    }
  })
}
