export async function registerUser(req, res, next) {
try {
    throw new Error("this user already exsist")
} catch (err) {
    err.status = 409
    next(err)
}
}