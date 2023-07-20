import User from '../models/User';
import fs from 'fs';

// create account
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = await req.body;

    const user = await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password,
    });

    return res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

// update profile
export const updateProfile = async (req, res) => {
  try {
    const { avatar, username, email, phone, country, state, city, address } =
      await req.body;

    const newUserData = await {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      phone,
      country,
      state,
      city,
      address,
    };

    //

    const user = await User.findByIdAndUpdate(req.user._id, newUserData);

    return res.status(200).json({
      success: true,
      data: user,
      message: 'User updated successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
