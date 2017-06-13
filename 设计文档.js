//////////////////////后台管理///////////////////
管理员登陆
审核界面

用户管理

用户说说管理

用户文章管理

用户吐槽管理

寻人启事管理
//////////////////////客户端///////////////////
寻物品启示

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
寻物品启示
post    decltypes.com\goods
get     decltypes.com\goods
get     decltypes.com\goods\id
put     decltypes.com\goods\id
DELETE  decltypes.com\goods\id

post    decltypes.com\goods\apply

寻人启事

广告招商
//////////////////////信息///////////////////
// login_table: {
//     longin_id: "",
//     longin_name: "",
//     status: ,
//     "admin",
//     'op',
//     'user'
//     passwd: "",
//     user_id: "",
//     head_portrait: ""
//   },

//   user_table: {
//     tel: ,
//     e - mail: ,
//     name: "",
//     birthday: ,
//     living city: "",
//     Family_register: "",
//     ID_card: "",
//     job: "",
//     interest: "",
//     兴趣
//     motto: "",
//     座右铭
//     self_introduction: ""
//     自我介绍。
//     register_time: "",
//   },
   用户登录表
  login_id:int 主键
  user_id:int 
  longin_name:string
  passwd:string
  login_icon:int
  user_email:string
  user_tel_num:string
  status:
  login_tims:int
  head_portrait: ""

  用户信息表
  id:int 主键
  name:string
  birthday: ,
  living_city: "",
  native_place:
  Family_register: "",
  ID_card: "",
  job: "",
  sex:
  interest: "",
  兴趣
  motto: "",
  座右铭
  self_introduction: ""
  自我介绍。
  register_time: "",
  tel:
  email:
  QQ:
  company_name:
  company_site:
  company_tel:
  company_email:
  school:[array];
  education:
  commend:num;
  commend_user_id:[array]
  user_credit:""，信用值。

//////////////////////说说///////////////////
  talk_table: {
    talk_id: longin_id: ,
    talk_detail: "";
    talk_time: ,
    recommend_num: "",
    recommend:[array],
    audit: ,
  }

// reply_talk_table: {
//     reply_id: "",
//     talk_id: ,
//     longin_id: ,
//     reply_id: ,
//     reply_detail: "",
//     reply_time: "",
//     audit: ,
//   }
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
  grade: [{
    user_id:,
    score:int
  }],
  recommend_num: "",
  recommend:[array],
  replay:[array]
  audit: ,
}

  reply_table: {
    id: "",
    type:
    login_id: ,
    reply_id: ,
    reply_detail: "",
    reply_time: "",
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
  grade: [{
    user_id:,
    score:int
  }],
  recommend_num: "",
  recommend:[array],
  replay:[array]
  audit: ,
}

// reply_complain_table: {
//     complain_id: ,
//     longin_id: ,
//     reply_id: ,
//     reply_detail: "",
//     reply_time: "",
//     audit: ,
//   }
  ////////////////////寻人启事///////////////////////
search_notices_table: {
  search_id: 
  longin_id: ,
  search_detail: "";
  search_time: ,
  linkman: "",
  linkman_tal: "",
  linkman_e_mail: "",
  search_picture: [],
  search_video: ,
  audit: ,
}

// reply_search_table: {
//     search_id:
//     longin_id: ,
//     reply_search_detail: "";
//     reply_search_time: ,
//     audit: ,
//   }
  ////////////////////物品启示////////////////////////
  物品信息表
id:int
name:string
goods_type:int
type:
about:简要说明
description:string 描述
site：地点
lose_or_pick_time:
picture:array
states:bool 状态
audit:bool 审核
auditor_id:int 审核人id。
publisher_id:id; 发布人
receiver_id:id; 领取人
question:string
reply_id:array
commend:num;
commend_user_id:[array]
publish_time:
receive_time:
grade:1-5


reply_gaoods
物品回复表
id：
goods_id:
user_id:
reply_user_id:
type:
states:
content:
reply_time:
recommend:bool


认领申请表
id:
user_id:
goods_id:
name:
card_id:
tel:
email:
QQ:
job: "",
company_name:
company_site:
company_tel:
company_email:
witness:[
  {
    witness_name:
    witness_relationship:
    witness_tel:
    witness_email:
  },
];
living_city:
native_place:
explain:
states:
audit:bool 审核
auditor_id:int 审核人id。
////////////////////游戏///////////////////////
game
{
  id:
  name:
  about:
  describe:
  file:
  publisher_id:
  developers:
  download_num:
  file_size:
  publish_time:
  online_time:
  grade:[{
    user_id:
    score:int
  }]
  commend_num;
  commend:[user_id],
  remark:[id]
}

game_remark
{
  id:
  game_id:
  user_id:
  reply_user_id:
  reply_detail: "",
  reply_time: "",
  audit: ,
}
////////////////////广告招商///////////////////////
长年广告位出租。 外包小型网站和开发客户端等等。 黄网免谈。
广告表

////////////////////客户端///////////////////////
客户端后期开发， 目前没时间开发。
pc： windwos， linux可以支持。 ios没有设备不支持
手机： 安卓。