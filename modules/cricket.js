const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `🏏 *${scoredata.livescore.title}*\n\nteam2: ${scoredata.livescore.teamtwo}\n\nteam1: ${scoredata.livescore.teamone}\ntoss update: ${scoredata.livescore.update}\n\nTotal: ${scoredata.livescore.current}\n\n*BATMANS DETAILS*\nBatman: ${scoredata.livescore.batsman} - ${scoredata.livescore.batsmanrun} (${scoredata.livescore.ballfaced})\nFours: ${scoredata.livescore.fours}\nSixes: ${scoredata.livescore.sixes}\n\nPartnership: ${scoredata.livescore.partnership}\nRecent balls: ${scoredata.livescore.recentballs}\n\nLast Wicket: ${scoredata.livescore.lastwicket}\n\nRun rate: ${scoredata.livescore.runrate}\n\n\n\n*BOWLER DETAILS*\n\nBowler: ${scoredata.livescore.bowler}\nOvers: ${scoredata.livescore.bowlerover}\nRuns: ${scoredata.livescore.bowlerruns}\nWickets: ${scoredata.livescore.bowlerwickets}
                    return cmntry
                `,
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
