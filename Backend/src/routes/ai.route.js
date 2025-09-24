import express from 'express'
import { getReview } from '../controller/Getresponse.js'

const router = express.Router()

router.post('/get-review',getReview)

export default router