import cors from "cors";
import records from "./routes/record.js";
import userRoutes from "./routes/user.js";
import express from 'express';
import mongoose from "mongoose";


const PORT = process.env.PORT || 5050;
const app = express();



app.use(cors());
app.use(express.json());


// routes
app.use("/record", records);
app.use("/user", userRoutes);

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


