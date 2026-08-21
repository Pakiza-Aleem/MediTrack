const jwt = require("jsonwebtoken");

/**
 * TASK 4.1 - The guard that stands in front of every private route.
 *
 * Steps:
 *   1. Read the token from req.cookies.token.
 *   2. TASK 4.4 (optional): if there is no cookie, fall back to the
 *      "Authorization: Bearer <token>" header so Postman and mobile clients work.
 *   3. If there is still no token -> 401.
 *   4. jwt.verify(token, process.env.JWT_SECRET) inside try/catch.
 *   5. On success put { id, role } on req.user and call next().
 *   6. On failure -> 401 "Token invalid or expired".
 *
 * A middleware has exactly two endings: it calls next(), or it ends the response.
 */
function protect(req, res, next) {
  // TODO (Task 4.1): read the token from the cookie
  let token = req.cookies.token;

  // TODO (Task 4.4): fall back to the Bearer header
  const header = req.headers["authorization"];

  if (!token && header && header.startsWith("Bearer ")) {
    token = header.split(" ")[1];
  }

  // TODO (Task 4.1): if there is no token, return 401
  if (!token) {
    return res.status(401).json({
      msg: "Not authorised — no token",
    });
  }

  try {
    // Verify that the token was created by our server
    // and has not expired or been modified.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Give the next middleware/route the authenticated user's information.
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    // Authentication successful → continue to the route.
    next();
  } catch (err) {
    // Invalid, modified, or expired token.
    return res.status(401).json({
      msg: "Token invalid or expired",
    });
  }
}

module.exports = protect;