接口数据文档

用户模块
注册
post decltyoes.com\ register
{
  data{
    login:{
      longin_name:"string"
      passwd:"string"
    }
    user_info:
    {
      name:"string"
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
    }
  }
}
return

success
{
  status:"success"
  data:{
    user_id:int 
    longin_name:string
    passwd:string
    login_icon:int
    login_tims:int
    head_portrait: ""
  }
}

fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}
登录
post decltyoes.com\ login

{ 
  data{
      longin_name:"string"
      passwd:"string"
    }
}
return
success
{
  status:"success"
  data:{
    user_id:int 
    longin_name:string
    passwd:string
    login_icon:int
    login_tims:int
    head_portrait: ""
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}
获取所有用户信息 admin权限目前还没准备实现。
get decltyoes.com\ user

获取user_id用户信息
get decltyoes.com\ user\id:
return 
success
{
  status:"success"
  data:{
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
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}
修改用户信息
put decltyoes.com\user\id:
{
  data:{
    name:string
    birthday: ,
    living_city: "",
    native_place:
    Family_register: "",
    ID_card: "",
  }
}
return 
success
{
  status:"success"
  data:{
    name:string
    birthday: ,
    living_city: "",
    native_place:
    Family_register: "",
    ID_card: "",
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

寻物品启示
发布 拾取物品
post    decltypes.com\goods
{
  data:{
    name:string
    goods_type:int
    type:
    keyword:["","",""];
    about:简要说明
    description:string 描述
    site：地点
    lose_or_pick_time:
    picture:array
    question:string
  }
}
return 
success
{
  status:"success"
  data:{
    name:string
    goods_type:int
    type:
    keyword:["","",""];
    about:简要说明
    description:string 描述
    site：地点
    lose_or_pick_time:
    picture:array
    question:string
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}
获取 拾取所有的物品
get     decltypes.com\goods?type=XX&states=bool&audit=bool&time_min=123&time_max=123&like="name:xx"&page=1;
return 
success
{
  status:"success"
  data:{
    result:[
      {
        id:int
        name:string
        goods_type:int
        type:
        keyword:["","",""];
        about:简要说明
        description:string 描述
        site：地点
        lose_or_pick_time:
        picture:array
        states:bool 状态
        audit:bool 审核
        auditor_name: 审核人。
        publisher_id:id; 发布人
        receiver_id:id; 领取人
        question:string
        reply_id:array
        commend:num;
        commend_user_id:[array]
        publish_time:
        receive_time:
        grade:1-5
      }
    ]
    
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}
获取物品信息

get     decltypes.com\goods\id:?page=1;
return 
success
{
  status:"success"
  data:{
    id:int
    name:string
    goods_type:int
    type:
    keyword:["","",""];
    about:简要说明
    description:string 描述
    site：地点
    lose_or_pick_time:
    picture:array
    states:bool 状态
    audit:bool 审核
    auditor_name: 审核人。
    publisher_id:id; 发布人
    receiver_id:id; 领取人
    question:string
    reply:[//评论可能分页。
    {

    }]
    commend:num;
    publish_time:
    receive_time:
    grade:1-5
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}
put     decltypes.com\goods\id:
{
  status:"success"
  data:{
    name:string
    goods_type:int
    type:
    keyword:["","",""];
    about:简要说明
    description:string 描述
    site：地点
    lose_or_pick_time:
    picture:array
    states:bool 状态
    audit:bool 审核
    auditor_name: 审核人。
    question:string
    reply:{
    }
    commend_user_id:int;
  }
}

return 
success
{
  status:"success"
  data:{
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
    auditor_name: 审核人。
    publisher_id:id; 发布人
    receiver_id:id; 领取人
    question:string
    reply:[{

    }]
    commend:num;
    publish_time:
    grade:1-5
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

DELETE  decltypes.com\goods\id:

post    decltypes.com\goods\apply
申请领取或者归还
{
  data:{
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
  }
}
return 
success
{
  status:"success"
  data:{
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
    status:
    audit:bool 审核
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
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

put    decltypes.com\goods\apply\id:
{
  data:{
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
    status:
    audit:bool 审核
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
  }
}
return 
success
{
  status:"success"
  data:{
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
     status:
    audit:bool 审核
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
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

DELETE decltypes.com\goods\apply\id:

(管理员接口)
get    decltypes.com\goods\apply?type=""&status=""&audit=""&time_min=123&time_max=234&like="id:123,XXX:XXX"&page=1;
success
{
  status:"success"
  data:{
    result[
      {
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
    status:
    audit:bool 审核
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
      },
    ]
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

get    decltypes.com\goods\apply\id:
return 
success
{
  status:"success"
  data:{
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
    status:
    audit:bool 审核
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
  }
}
fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

吐槽模块
发布吐槽
post decltyoes.com\ complain
{
  data:{
    longin_id: ,
    complain_type: ,
    complain_detail: "";
    picture: [],
    video:[]
  }
}
return 
success
{
   status:"success"
   data:{
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
}

fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

put decltyoes.com\complain\ id?type=xx;
{
  data:{
    longin_id: ,
    complain_type: ,
    complain_detail: "";
    picture: [],
    video:[]
  }
}
success
{
   status:"success"
   data:{
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
}

fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

get decltyoes.com\ complain?type=XX&status=XX&audit=bool&like="name:123"&page=0;
return 
success
{
  status:"success"
  data:{
    result:[
      {
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
        status:
        recommend_num: "",
        audit:bool 审核
        auditor_id:int 审核人id。
      }
    ]
  }
}

fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}

get decltyoes.com\ complain\ id?page=0;
return
success
{
  status:"success"
  data:{
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
    status:
    recommend_num: "",
    replay:[
      {

      },
    ]
    audit:bool 审核
    auditor_id:int 审核人id。
  }
}

fail
{
  status:"fail"
  data:{
    reason:""
  }
  code:1,
}
error
{
  status:"error"
  message:""
  code:1,
}


DELETE decltyoes.com\ complain\ id;


文章发表
get decltyoes.com\ article

get decltyoes.com\ article\ id
get ecltyoes.com\ reply_article\ id
说说发表
get decltyoes.com\ talk
get decltyoes.com\ talk\ id
get ecltyoes.com\ reply_talk\ id

post decltyoes.com\ user\ id\ submit
好友模块

post    decltyoes.com\friend
DELETE  decltyoes.com\friend\id:
get     decltyoes.com\friend
get     decltyoes.com\friend\id:
chat聊天服务可能独立一个服务器;
post    decltyoes.com\friend\chat
{
  data:{
    friend_id:[],or room_id;
     message:"";
  }
}

消息模块
post    decltyoes.com\message\id:

审核模块(管理员权限)
post 