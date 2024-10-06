import express from 'express';

const app = express();

app.use(express.static('dist'));

const PORT = 3000 as const;

app.listen(PORT, () => {
	console.info(`Server started on port ${PORT}`);
});
