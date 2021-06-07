const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `  ~by PYmaster~\n\n🏏*${scoredata.livescore.title}*🏏\n\n_${scoredata.livescore.update}_\n\n*Total score*: ${scoredata.livescore.current}\n\n\n\n*BATMANS DETAILS* (stricker end)\n\nBatman: ${scoredata.livescore.batsman} - ${scoredata.livescore.batsmanrun}\nFours: ${scoredata.livescore.fours}\nSixes: ${scoredata.livescore.sixes}\n\nPartnership: ${scoredata.livescore.partnership}\nRecent balls: ${scoredata.livescore.recentballs}\n\nLast Wicket: ${scoredata.livescore.lastwicket}\n\nRun rate: ${scoredata.livescore.runrate}\n\n\n\n*BOWLER DETAILS*\n\nBowler: ${scoredata.livescore.bowler}\nOvers: ${scoredata.livescore.bowlerover}\nRuns: ${scoredata.livescore.bowlerruns}\nWickets: ${scoredata.livescore.bowlerwickets}
                    
                    
                ☆ 𝔻𝕒𝕣𝕜ℕℙ ☆`,
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
