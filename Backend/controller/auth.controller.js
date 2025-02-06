import User from "../db/models/User.js";
import jwt from 'jsonwebtoken'

export const login = async (req, res, next) =>{
   // authentication route of login
   try {
      const { email, password } = req.body;
      console.log(email, password)
      const user = await User.findOne({ email });
      if (!user) {
       next(res.status(404).json({ success: false, error: "User Not Found" }));
      }
  
      if (password !== user.password) {
       next(res.status(404).json({ success: false, error: "wrong password" }));
      }
        const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.JWT_KEY,
        { expiresIn: "15d" }
      );
      res
        .status(200)
        .json({
          success: true,
          token,
          user: { _id: user._id, name: user.name, role: user.role },
        });
    } catch (error) {
      next(error.message);
    }
}