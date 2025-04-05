import express from "express"
import {getBook} from "../controller/book.contoller.js"

const router = express.Router()

router.get("/",getBook)

export default router