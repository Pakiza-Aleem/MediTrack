/**
 * TASK 7.1 - Authorization, not authentication.
 *
 * requireRole is a middleware FACTORY: requireRole("staff") returns a middleware.
 *
 *   - no req.user            -> 401 (we do not know you)
 *   - role not in allowed    -> 403 (we know you, and the answer is no)
 *   - otherwise              -> next()
 *
 * Use rest parameters so requireRole("staff", "admin") also works.
 * It must always run AFTER protect, because it reads req.user.
 */
function requireRole(...allowed) {
  return function (req, res, next) {

    // TODO (Task 7.1): if there is no logged-in user, return 401
    if (!req.user) {
      return res
        .status(401)
        .json({ msg: "Not authorised" });
    }

    // TODO (Task 7.1): if user's role is not allowed, return 403
    if (!allowed.includes(req.user.role)) {
      return res
        .status(403)
        .json({ msg: "Forbidden — insufficient role" });
    }

    // TODO (Task 7.1): user has the correct role, continue
    next();
  };
}

module.exports = requireRole;