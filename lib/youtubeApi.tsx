import axios from "axios"

const getSubscriptions = () => {
  console.log('subs')
  axios.get('https://youtube.googleapis.com/youtube/v3/subscriptions?channelId=UCIJG2skTIeZzd7Cb3YZ7JiA&key=[AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU]',
  { headers: {
    'Authorization': 'Bearer 13325015266-j65l23gvvvtc2m8abhhjh65v5ba7mmpn.apps.googleusercontent.com',
    'Content-Type': 'application/json'
  }}
  )
  .then((res) => console.log(res))
}

export default getSubscriptions
