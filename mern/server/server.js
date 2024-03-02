import cors from "cors";
import records from "./routes/record.js";
import express from 'express';
// import { createRequire } from "module";
import mongoose from "mongoose"

const PORT = process.env.PORT || 5050;
const app = express();
// const require = createRequire(import.meta.url);



app.use(cors());
app.use(express.json());
app.use("/record", records);


// connection to db
mongoose.connect('mongodb+srv://manav:manav101@feedforward1.w5vgbmw.mongodb.net/?retryWrites=true&w=majority&appName=feedForward1')
	.then(() => {
		app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
		})
	})
	.catch((error) => {
		console.log(error)
	})

// start the Express server
