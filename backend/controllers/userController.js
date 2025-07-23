import userModel from "../model/userModel.js";
import mongoose from "mongoose"

const addUser = async (req, res) => {
    const user = new userModel({
        name: req.body.name,
        points: req.body.points
    })

    try {
        await user.save();
        res.json({ success: true, message: "user Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error })
    }
}


const addPoints = async (req, res) => {
    try {
        const { userId } = req.body;

        console.log("body:", req.body);
        console.log("Received userId:", userId);

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const randomPoints = Math.floor(Math.random() * 10) + 1;

        user.points = randomPoints;

        await user.save();

        res.status(200).json({
            message: "Points claimed successfully",
            user,
            Points: randomPoints
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().sort({ points: -1 }); // Sorted by points descending
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to fetch users" });
    }
};




export { addUser, addPoints, getUsers };