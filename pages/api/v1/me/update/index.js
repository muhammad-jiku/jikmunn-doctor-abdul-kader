import { updateProfile } from '@/backend/controllers/authController';
import { isAuthenticatedUser } from '@/backend/middlewares/auth';
import ErrorHandlingChecker from '@/backend/middlewares/errors';
import { connectToDB } from '@/backend/utils/connectToDB';
import upload from '@/backend/utils/multerFile';
import { createRouter } from 'next-connect';

const router = createRouter();

const uploadMiddleware = upload.array('image');

connectToDB();

router
  .use(async (req, res, next) => {
    await isAuthenticatedUser(req, res, next);
    uploadMiddleware();
  })
  .put(async (req, res) => {
    await updateProfile(req, res);
  });

export const config = {
  runtime: 'edge',
  api: {
    bodyParser: false,
  },
};

export default router.handler({
  onError: (err, req, res) => {
    ErrorHandlingChecker(err, req, res);
  },
});

// const handler = nc({
//   onError: ErrorHandlingChecker,
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// handler.use(isAuthenticatedUser, uploadMiddleware).put(updateProfile);

// export default handler;
