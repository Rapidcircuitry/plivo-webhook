#!/usr/bin/env python
# Test script to make an outbound call to test the webhook bridge
# This will make Plivo call your test destination and route it through the webhook

import plivo

# Plivo API credentials
AUTH_ID = "MAYWU0YZNKM2ITMJRMNY"
AUTH_TOKEN = "YOUR_AUTH_TOKEN_HERE"  # Replace with actual token from Plivo console

# Initialize Plivo client
client = plivo.RestClient(AUTH_ID, AUTH_TOKEN)

try:
    # Make outbound call
        # from_: Your Plivo number (the one we bought)
            # to_: Your test phone number (replace with actual number)
                # answer_url: URL where Plivo will fetch XML to handle the call
                    
                        response = client.calls.create(
                                from_="+91803144777",  # Our Plivo number
                                        to_="+919876543210",   # TEST: Replace with YOUR mobile number
                                                answer_url="https://plivo-webhook.onrender.com/plivo/answer",
                                                        hangup_url="https://plivo-webhook.onrender.com/plivo/hangup"
                                                            )
                                                                
                                                                    print("✓ Outbound call initiated successfully!")
                                                                        print(f"  Call ID: {response.request_uuid}")
                                                                            print(f"  From: +91803144777")
                                                                                print(f"  To: +919876543210")
                                                                                    print(f"  Status: {response.message}")
                                                                                        print("\nThe call should connect and route through your webhook to the LiveKit agent.")
                                                                                            
                                                                                            except Exception as e:
                                                                                                print(f"✗ Error making outbound call: {str(e)}")
                                                                                                    print("\nTroubleshooting:")
                                                                                                        print("1. Make sure AUTH_TOKEN is set correctly in this script")
                                                                                                            print("2. Verify the phone number format is correct (+91xxxxxxxxxx)")
                                                                                                                print("3. Check that Plivo account has enough credits")
                                                                                                                    print("4. Ensure the webhook URLs are accessible from the internet")