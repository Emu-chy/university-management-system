import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateId()
  user.id = id

  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
