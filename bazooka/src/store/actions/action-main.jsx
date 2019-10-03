
export default class actionMain {

    // static properties to be used in reducer for switch cases
    static logged_in_user_info_var = "newUserInfo";
    static Delete_logged_in_user_info_var = "deletenewUserInfo";
    static Adds_published_byuser_var = "publishAdds";
    static Adds_Data_var = "productAddsData";
    static Ad_Preview_var = "currentAdPreview";
    static Cloud_token_var = "cloudToken";
    static Search_What_var = "searchdata";
    // static Display_cloud_msg_var = "displaycloud";
    // static updateduserlist = "Updating user chat list";
    // static update_msg_list = "Updating message list";


    static logged_in_user_info_meh(value){
        return { 
            type: this.logged_in_user_info_var,
            payload: value
        }
    }
    static Delete_logged_in_user_info_meh(){
        return { 
            type: this.Delete_logged_in_user_info_var,
          
        }
    }
    static Adds_published_byuser_meh(value){
        return { 
            type: this.Adds_published_byuser_var,
            payload: value
        }
    }
    static Adds_Data_meh(value){
        return { 
            type: this.Adds_Data_var,
            payload: value
        }
    }
    static Ad_Preview_meh(value){
        return { 
            type: this.Ad_Preview_var,
            payload: value
        }
    }
    static Cloud_token_meh(value){
        return { 
            type: this.Cloud_token_var,
            payload: value
        }
    }
    static Search_What_meh(value){
        return { 
            type: this.Search_What_var,
            payload: value
        }
    }
    // static Display_cloud_msg_meh(value){
    //     return { 
    //         type: this.Display_cloud_msg_var,
    //         payload: value
    //     }
    // }
    // static updateduserChatlist (value){
    //     return { 
    //         type: this.updateduserlist,
    //         payload: value
    //     }
    // }
    // static update_messages_list (value){
    //     return { 
    //         type: this.update_msg_list,
    //         payload: value
    //     }
// }
}