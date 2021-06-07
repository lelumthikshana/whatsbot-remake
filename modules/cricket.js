const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `~RangeR~\n🏏 *${scoredata.livescore.title}*\n\n_UPDATE_ «${scoredata.livescore.update}»\n\n_*Total*_: ${scoredata.livescore.current}\n\n\n\n*BATMANS DETAILS*\n\nBatman: ${scoredata.livescore.batsman} - ${scoredata.livescore.batsmanrun}\nBall faced: ${scoredata.livescore.ballfaced})\nFours: ${scoredata.livescore.fours}\nSixes: ${scoredata.livescore.sixes}\n\nPartnership: ${scoredata.livescore.partnership}\nRecent balls: ${scoredata.livescore.recentballs}\n\nLast Wicket: ${scoredata.livescore.lastwicket}\n\nRun rate: ${scoredata.livescore.runrate}\n\n\n\n*BOWLER DETAILS*\n\nBowler: ${scoredata.livescore.bowler}\nOvers: ${scoredata.livescore.bowlerover}\nRuns: ${scoredata.livescore.bowlerruns}\nWickets: ${scoredata.livescore.bowlerwickets}
                    
                      by 🏏 𝐂𝐫𝐢𝐜 𝐓𝐚𝐥𝐤𝐬 🎤
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
