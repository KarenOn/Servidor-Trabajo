const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require("./routes/userRoute.js")(app);
require("./routes/ubicacionRoute.js")(app);

app.listen(process.env.PORT || 3080, () => {
    console.log('Servidor escuchando en la 3080');
});