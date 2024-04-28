import React, { useEffect } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';

const YTB = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Authenticate the user
        await gapi.auth2.getAuthInstance().signIn({
          scope: "https://www.googleapis.com/auth/youtube.readonly"
        });

        // Load the GAPI client
        await gapi.client.init({
          apiKey: "AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua",
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
        });

        // Execute the request to list subscriptions
        const response = await gapi.client.youtube.subscriptions.list({
          "part": "snippet",
          "mine": true
        });

        // Handle the results
        console.log("Subscriptions:", response.result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default YTB;
