import ButtonTweet  from '../../components/buttons-tweet';
import imgHome from "./image-sidebar/Home-Fill.png";
import imgExplore from "./image-sidebar/Explore.png";
import imgNotification from "./image-sidebar/Notifications.png";
import twitter from "./image-sidebar/Normal.png";
import imgMessage from "./image-sidebar/Messages.png";
import imgBookmarks from "./image-sidebar/Bookmarks.png";
import imgList from "./image-sidebar/Lists.png";
import imgProfile from "./image-sidebar/Profile.png";
import imgMore from "./image-sidebar/More.png";


function SidebarLeft() {
  return (
    <>
      <div>
        <div>
            <img src={twitter} alt="" />
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgHome} alt="" />
          <p className='sidebar-title'>Home</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgExplore} alt="" />
          <p className='sidebar-title'>Explore</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgNotification} alt="" />
          <p className='sidebar-title'>Notification</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgMessage} alt="" />
          <p className='sidebar-title'>Messages</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgBookmarks} alt="" />
          <p className='sidebar-title'>Bookmarks</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgList} alt="" />
          <p className='sidebar-title'>Lists</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgProfile} alt="" />
          <p className='sidebar-title'>Profile</p>
        </div>
        <div className='sidebar-left-nav'>
          <img src={imgMore} alt="" />
          <p className='sidebar-title'>More</p>
        </div>


        <ButtonTweet style={"button-sidebar"} />
       
      </div>
    </>
    
  )
}

export default SidebarLeft;