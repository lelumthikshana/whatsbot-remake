const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `🏏 *${scoredata.livescore.title}*\n\nTotal: ${scoredata.livescore.current}\n\n\nBATMANS DETAILS\n\nBatman: ${scoredata.livescore.batsman} - ${scoredata.livescore.batsmanrun} (${scoredata.livescore.ballfaced})\nFours: ${scoredata.livescore.fours}\nSixes: {scoredata.livescore.sixes}\n\n*Commentary 👇*\n\n${scoredata.livescore.commentary.map(cmntry => {
                    return cmntry
                })}`,
            }
        } else {
            throw ''
        }
    } catch (err) {
        return {
            status: false,
            msg: "That's an error."
        }
    }
}

module.exports = cricket
