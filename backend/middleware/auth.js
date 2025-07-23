import jwt from "jsonwebtoken"

const authMiddle = async (req, res, next) => {
    const { token } = req.headers;


    if (!token) {
        return res.json({ success: false, message: "not authorized" })
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next()
    }

    catch (error) {
        console.log(error)
        res.json({ msg: error })
    }
};

export default authMiddle;