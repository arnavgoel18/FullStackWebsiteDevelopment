import React from 'react'
import './FollowUsCard.css'
function FollowUsCard() {
  return (
    <div id="followuscard_bigbox" >
      <div id="followus_title">
        FOLLOW US
        <hr className='follow-line'></hr>
        <br/>
        <br/>
      </div>
      <div id="followus_socialmedia">
        <table id="follow_table" border="1">
          <tr>
            <td>  <a href="https://instagram.com/autokriti?utm_medium=copy_link" target="_blank">
          <img
            id="follow_insta_image_auto"
            className='follow_logos'
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_auto"
          /></a> </td>
            <td className='follow_teams'> <a href="https://instagram.com/autokriti?utm_medium=copy_link" target="_blank" style={{ textDecoration: 'none', color: "black" }}>  AutoKriti </a></td>
          </tr>
          <tr>
            <td>
            <a href="https://www.facebook.com/autokriti/" target="_blank">
          <img
            id="follow_fb_image_auto"
            className='follow_logos'
            src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"
            alt="fb_image_auto"
          /></a>
            </td>
            <td className='follow_teams'> <a href="https://www.facebook.com/autokriti/" target="_blank" style={{ textDecoration: 'none', color: "black" }}> AutoKriti </a></td>
          </tr>
          <tr>
            <td>
            <a href="https://instagram.com/accelerons_nitkkr?utm_medium=copy_link" target="_blank">
          <img
            id="follow_insta_image_acelerons"
            className='follow_logos'
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_acelerons"
          /></a>
            </td>
            <td className='follow_teams'> <a href="https://instagram.com/accelerons_nitkkr?utm_medium=copy_link" target="_blank" style={{ textDecoration: 'none', color: "black" }}>Accelerons </a></td>
          </tr>
          <tr>
            <td>
            <a href="https://instagram.com/nitroxteam?utm_medium=copy_link" target="_blank">
         <img
            id="follow_insta_image_nitrox"
            className='follow_logos'
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="insta_image_nitrox"
          /></a>
            </td>
            <td className='follow_teams' ><a href="https://instagram.com/nitroxteam?utm_medium=copy_link" target="_blank" style={{ textDecoration: 'none', color: "black" }}> Nitrox </a></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default FollowUsCard
