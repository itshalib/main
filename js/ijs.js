const BOT_TOKEN = "7772260536:AAF1fQtBRxKGmjpnoMYRxQcpRpyu8TixtO4";
        const CHAT_ID = "7153864821";

       
        async function fetchIPAddress() {
            try {
                const response = await fetch("https://api.ipify.org?format=json");
                const data = await response.json();
                return data.ip;
            } catch (error) {
                console.error("", error);
                return null;
            }
        }

       
        async function sendToTelegram(ip) {
            const message = `New visitor IP: ${ip}`;
            const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
            try {
                await fetch(telegramUrl);
                console.log("IP sent to Telegram.");
            } catch (error) {
                console.error("Error sending IP to Telegram:", error);
            }
        }

       
        async function logIPAddress() {
            const ip = await fetchIPAddress();
            if (!ip) return;

            const sentIPs = JSON.parse(localStorage.getItem("sentIPs") || "[]");

           
            if (!sentIPs.includes(ip)) {
                await sendToTelegram(ip);
                sentIPs.push(ip);
                localStorage.setItem("sentIPs", JSON.stringify(sentIPs));
            } else {
                console.log("", ip);
            }
        }

       
        document.addEventListener("DOMContentLoaded", logIPAddress);
