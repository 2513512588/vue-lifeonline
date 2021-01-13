
import Mock from 'mockjs'

 Mock.mock('/diary/list','post',function (){
     let rdData = Mock.mock({
         'data|2-20':[
             {
                 index: '@integer(1,300)',
                 id: '@natural',
                 title: '@title',
                 detail: '@ctitle(30)',
                 user:{
                     id: '@natural',
                     nickname: '@name',
                     avatar:'@dataImage(200x200)'
                 },
                 'imageList|1-9':[
                     '@dataImage(336x280)'
                 ],
                 likeNum: '@integer(1,500)',
                 commentNum: '@integer(1,500)',
                 repostNum: '@integer(1,500)',
                 type: '@integer(1,2)',
                 classify:{
                     id: '@integer(1,100)',
                     subject: '@ctitle(2,3)',
                 },
                 createTime: '@now'
             }
         ]
     })
     return rdData.data
 })

Mock.mock('/diary/detail','post',{
    id: '@natural',
    title: '@title',
    detail: '@ctitle(30)',
    createTime: '@datetime',
    user:{
        id: '@natural',
        nickname: '@name',
        avatar:'@dataImage(200x200)',
        describe: '@ctitle(10)',
        isFollow: '@Boolean'
    },
    'imageList|1-9':[
        '@dataImage(336x280)'
    ]
})

Mock.mock('/product/detail','post',{
    id: '@natural',
    title: '@title',
    detail: '@ctitle(30)',
    createTime: '@datetime',
    user:{
        id: '@natural',
        nickname: '@name',
        avatar:'@dataImage(200x200)',
        describe: '@ctitle(10)',
        isFollow: '@Boolean'
    },
    price: Mock.Random.natural(100, 10000) / 100,
    'imageList|1-9':[
        '@dataImage(336x280)'
    ]
})

Mock.mock('/comment/list','post',function (){
    let rdData = Mock.mock({
        'data|2-30':[
            {
                id: '@natural',
                user:{
                    id: '@natural',
                    nickname: '@name',
                    avatar:'@dataImage(200x200)'
                },
                content: '@ctitle(30)',
                replyNum: '@integer(3,20)',
                likeNum: '@integer(3,20)',
                createTime: '@now'
            }
        ]
    })
    return rdData.data
})

Mock.mock('/user/list','post',function (){
    let rdData = Mock.mock({
        'data|2-30':[
            {
                id: '@natural',
                nickname: '@name',
                avatar:'@dataImage(200x200)'
            }
        ]
    })
    return rdData.data
})
