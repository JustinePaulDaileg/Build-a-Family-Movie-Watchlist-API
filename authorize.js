export function authorizeModification(req, res, next) {
  const { role, id } = req.user;

  const isParent = role === "parent";
  const isChildOnSelf =
    role === "child" && String(req.params.userId) === String(id);

  if (isParent || isChildOnSelf) {
    return next();
  }

  res.status(403).json({ error: "Access denied" });
}