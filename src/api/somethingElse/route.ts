export async function getSomethingElse(req, res) {
  res.send("getSomethingElse").status(200);
}

export async function postSomethingElse(req, res) {
  res.send("postSomethingElse").status(200);
}
