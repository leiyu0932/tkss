/**
 * Created at 17/6/22.
 * @Author Thunder King Star.
 * @Email 332793511@qq.com
 */
import path from 'path'

const rootPath = path.join(__dirname, '../../..')
export default {
  rootPath,
  publicPath: '/public',
  staticPath: '/public/static',
  port: 3000,
  db: {
    dialect: 'sqlite',
    username: '',
    password: '',
    database: 'main',
    storage: 'path/to/db.sqlite'
  }
}
