import express from 'express'
import { getReview } from '../controller/Getresponse.js'

const router = express.Router()

router.post('/review',getReview)

export default router