
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, name, message } = JSON.parse(req.body);
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' })
            return;
        }
        //Store it in a database
        const newMessage = {
            email,
            name,
            message
        }

        let client;
        try {
            client = await MongoClient.connect(`mongodb+srv://kasapinovandrej:Kasapinov987@cluster0.vxoj4.mongodb.net/blog-site?retryWrites=true&w=majority`)
        } catch (err) {
            res.status(500).json({ message: 'Could not connect to database.' })
            return;
        }

        const db = client.db()

        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (err) {
            client.close()
            res.status(500).json({ message: 'Could not connect to database.' })
            return
        }

        client.close()
        res.status(201).json({ message: 'Successfully stored message!', data: newMessage })
    }
}

export default handler