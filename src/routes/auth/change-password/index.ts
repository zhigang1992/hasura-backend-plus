import { Router } from 'express'

import { LOST_PASSWORD_ENABLE } from '@shared/config'

import lost from './lost'
import change from './change'
import reset from './reset'

const router = Router().post('/', change)

if (LOST_PASSWORD_ENABLE) router.post('/request', lost).post('/change', reset)

export default router