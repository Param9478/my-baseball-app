exports.handler = async () => {
    const TOKEN = process.env.FB_ACCESS_TOKEN

    try {
        const res = await fetch(
            `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=id,message,story,created_time,full_picture&limit=9&access_token=${TOKEN}`
        )
        const data = await res.json()

        if (data.error) {
            return {
                statusCode: 400,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ error: data.error.message }),
            }
        }

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        }
    } catch (err) {
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Failed to fetch posts' }),
        }
    }
}