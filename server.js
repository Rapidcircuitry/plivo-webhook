const express = require('express');
const bodyParser = require('body-parser');
const plivo = require('plivo');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Plivo Answer URL - Called when someone dials the number
  app.post('/plivo/answer', (req, res) => {
    const from = req.body.From;
      const to = req.body.To;
        const callUUID = req.body.CallUUID;

          console.log(`Incoming call from ${from} to ${to} (Call ID: ${callUUID})`);

            // XML response to route call to LiveKit agent via SIP
const SIPEAR_URL = 'sip:S1hxzdlmm10.sip.livekit.cloud';
  
    const xml = `<Response>
        <Dial timeout="30">
              <SIP>${SIPEAR_URL}</SIP>
                  </Dial>
                    </Response>`;
                      
                        res.set('Content-Type', 'application/xml');
                          res.send(xml);

                            // Plivo Hangup URL - Called when call ends
                            app.post('/plivo/hangup', (req, res) => {
                              const callUUID = req.body.CallUUID;
                                console.log(`Call ended: ${callUUID}`);
                                  res.json({ status: 'ok' });
                                  });

                                  const PORT = process.env.PORT || 3000;
                                  app.listen(PORT, () => {
                                    console.log(`Plivo webhook server listening on port ${PORT}`);
                                    });