const express = require("express")
const mongoose = require("mongoose")
const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken")



const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    const isUserAlreadyExsist = await userModel.findOne({ email })

    if (isUserAlreadyExsist) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email

    },
    process.env.JWT_SECRET
)

res.cookie("jwt_token" , token)

    res.status(201).json({
        message: "user registered",
        user,
        token
    })
})

module.exports = authRouter