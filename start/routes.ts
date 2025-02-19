/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MomentsController = () => import('#controllers/moments_controller')
const CommentsController = () => import('#controllers/comments_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('moments', MomentsController).apiOnly()

router.post('/moments/:momentId/comments', [CommentsController, 'store'])
