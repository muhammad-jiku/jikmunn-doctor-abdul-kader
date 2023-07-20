import { getServerSession } from 'next-auth';
import { ErrorHandler } from '../utils/ErrorHandler';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const isAuthenticatedUser = async (req, res, next) => {
  const session = await getServerSession(req, res, authOptions);

  console.log('auth session middleware', session);

  if (!session) {
    return next(new ErrorHandler('Signin first to access this route', 401));
  }

  console.log('req user in auth middleware', req.user);
  req.user = session?.user;
  console.log('session user in auth middleware', session.user);

  next();
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log('User authorization == ', req.user);
    console.log('User role == ', req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to access this resource.`
        )
      );
    }

    next();
  };
};

export { isAuthenticatedUser, authorizeRoles };
