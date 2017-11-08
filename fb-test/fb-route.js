app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../fb-auth.html"))
})