//////////////////////后台管理///////////////////
管理员登陆
审核界面

用户管理

用户说说管理

用户文章管理

用户吐槽管理

寻人启事管理
//////////////////////客户端///////////////////
吐槽天地

/*
食品安全，教育问题，信仰问题（本人目前是无信仰主义），
烂尾楼，暴力执勤，违法犯罪，天下大事，药品安全与医院，互联网黑，
黑心厂商曝光，正看历史。
*/
get decltyoes.com\ complain
get decltyoes.com\ complain\: complain_type
get decltyoes.com\ complain\: complain_type\ id
post decltyoes.com\ complain\ post

文章发表
get decltyoes.com\ article
get decltyoes.com\ article\ id
get ecltyoes.com\ reply_article\ id
说说发表
get decltyoes.com\ talk
get decltyoes.com\ talk\ id
get ecltyoes.com\ reply_talk\ id
用户模块
post decltyoes.com\ register
post decltyoes.com\ login
get decltyoes.com\ user\ id
post decltyoes.com\ user\ id\ submit
聊天模块４４ 周边
寻人启事

广告招商
身边　 身边没事　　　　　　　 嘎嘎嘎方法
//////////////////////信息///////////////////
login_table: {
    longin_id: "",
    longin_name: "",
    status: ,
    "admin",
    'op',
    'user'
    passwd: "",
    user_id: "",
    head_portrait: ""
  },

  user_table: {
    tel: ,
    e - mail: ,
    name: "",
    birthday: ,
    living city: "",
    Family_register: "",
    ID_card: "",
    job: "",
    interest: "",
    兴趣
    motto: "",
    座右铭
    self_introduction: ""
    自我介绍。
    register_time: "",
  },
  //////////////////////说说///////////////////
  talk_table: {
    talk_id: longin_id: ,
    talk_detail: "";
    talk_time: ,
    comment_times: "";
    audit: ,
  }

reply_talk_table: {
    reply_id: "",
    talk_id: ,
    longin_id: ,
    reply_id: ,
    reply_detail: "",
    reply_time: "",
    audit: ,
  }
  ////////////////////好友//////////////////////
friend_table: {
  id: longin_id: "",
  friend_id: "",
}

////////////////////文章///////////////////////

article_table: {
  article_id: longin_id: ,
  article_detail: "";
  article_time: ,
  reply_times: "";
  grade: "",
  recommend_num: "",
  audit: ,
}

reply_article_table: {
    reply_article_id: "",
    article_id: ,
    longin_id: ,
    reply_id: ,
    reply_detail: "",
    reply_time: "",
    grade: "",
    recommend: ,
    audit: ,
  }
  ////////////////////吐槽天地///////////////////////

complain_table: {
  complain_id: longin_id: ,
  complain_type: ,
  complain_detail: "";
  picture: [],
  video: ,
  complain_time: ,
  reply_times: "";
  grade: "",
  recommend_num: "",
  audit: ,
}

reply_complain_table: {
    reply_complain_id: "",
    complain_id: ,
    longin_id: ,
    reply_id: ,
    reply_detail: "",
    reply_time: "",
    grade: "",
    recommend: ,
    audit: ,
  }
  ////////////////////寻人启事///////////////////////
search_notices_table: {
  search_id: longin_id: ,
  search_detail: "";
  search_time: ,
  linkman: "",
  linkman_tal: "",
  linkman_e_mail: "",
  search_picture: [],
  search_video: ,
  audit: ,
}

reply_search_table: {
    reply_search_id: longin_id: ,
    reply_search_detail: "";
    reply_search_time: ,
    audit: ,
  }
  ////////////////////广告招商///////////////////////
长年广告位出租。 外包小型网站和开发客户端等等。 黄网免谈。
////////////////////客户端///////////////////////
客户端后期开发， 目前没时间开发。
pc： windwos， linux可以支持。 ios没有设备不支持
手机： 安卓。