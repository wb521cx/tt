//小心儿悠悠//
var rule = {
    title: '腾讯视频',
    host: 'https://v.qq.com',
    homeUrl: '/x/bu/pagesheet/list?_all=1&append=1&channel=cartoon&listpage=1&offset=0&pagesize=21&iarea=-1&sort=18',
    detailUrl: 'https://node.video.qq.com/x/api/float_vinfo2?cid=fyid',
    searchUrl: '**',
    searchable: 2,
    filterable: 1,
    multi: 1,
    url: '/x/bu/pagesheet/list?_all=1&append=1&channel=fyclass&listpage=1&offset=((fypage-1)*21)&pagesize=21&iarea=-1',
    filter_url: 'sort={{fl.sort or 75}}&iyear={{fl.iyear}}&year={{fl.year}}&itype={{fl.type}}&ifeature={{fl.feature}}&iarea={{fl.area}}&itrailer={{fl.itrailer}}&gender={{fl.sex}}',
    filter_url: 'sort={{fl.sort or 75}}&iyear={{fl.iyear}}&year={{fl.year}}&itype={{fl.type}}&ifeature={{fl.feature}}&iarea={{fl.area}}&itrailer={{fl.itrailer}}&gender={{fl.sex}}',
    filter: {
        "choice": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "83"
            }, {
                "n": "好评",
                "v": "81"
            }]
        }, {
            "key": "iyear",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "tv": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "79"
            }, {
                "n": "好评",
                "v": "16"
            }]
        }, {
            "key": "feature",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "爱情",
                "v": "1"
            }, {
                "n": "古装",
                "v": "2"
            }, {
                "n": "悬疑",
                "v": "3"
            }, {
                "n": "都市",
                "v": "4"
            }, {
                "n": "家庭",
                "v": "5"
            }, {
                "n": "喜剧",
                "v": "6"
            }, {
                "n": "传奇",
                "v": "7"
            }, {
                "n": "武侠",
                "v": "8"
            }, {
                "n": "军旅",
                "v": "9"
            }, {
                "n": "权谋",
                "v": "10"
            }, {
                "n": "革命",
                "v": "11"
            }, {
                "n": "现实",
                "v": "13"
            }, {
                "n": "青春",
                "v": "14"
            }, {
                "n": "猎奇",
                "v": "15"
            }, {
                "n": "科幻",
                "v": "16"
            }, {
                "n": "竞技",
                "v": "17"
            }, {
                "n": "玄幻",
                "v": "18"
            }]
        }, {
            "key": "iyear",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "movie": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "83"
            }, {
                "n": "好评",
                "v": "81"
            }]
        }, {
            "key": "type",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "犯罪",
                "v": "4"
            }, {
                "n": "励志",
                "v": "2"
            }, {
                "n": "喜剧",
                "v": "100004"
            }, {
                "n": "热血",
                "v": "100061"
            }, {
                "n": "悬疑",
                "v": "100009"
            }, {
                "n": "爱情",
                "v": "100005"
            }, {
                "n": "科幻",
                "v": "100012"
            }, {
                "n": "恐怖",
                "v": "100010"
            }, {
                "n": "动画",
                "v": "100015"
            }, {
                "n": "战争",
                "v": "100006"
            }, {
                "n": "家庭",
                "v": "100017"
            }, {
                "n": "剧情",
                "v": "100022"
            }, {
                "n": "奇幻",
                "v": "100016"
            }, {
                "n": "武侠",
                "v": "100011"
            }, {
                "n": "历史",
                "v": "100021"
            }, {
                "n": "老片",
                "v": "100013"
            }, {
                "n": "西部",
                "v": "3"
            }, {
                "n": "记录片",
                "v": "100020"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "variety": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "23"
            }]
        }, {
            "key": "iyear",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "cartoon": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "83"
            }, {
                "n": "好评",
                "v": "81"
            }]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "内地",
                "v": "1"
            }, {
                "n": "日本",
                "v": "2"
            }, {
                "n": "欧美",
                "v": "3"
            }, {
                "n": "其他",
                "v": "4"
            }]
        }, {
            "key": "type",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "玄幻",
                "v": "9"
            }, {
                "n": "科幻",
                "v": "4"
            }, {
                "n": "武侠",
                "v": "13"
            }, {
                "n": "冒险",
                "v": "3"
            }, {
                "n": "战斗",
                "v": "5"
            }, {
                "n": "搞笑",
                "v": "1"
            }, {
                "n": "恋爱",
                "v": "7"
            }, {
                "n": "魔幻",
                "v": "6"
            }, {
                "n": "竞技",
                "v": "20"
            }, {
                "n": "悬疑",
                "v": "17"
            }, {
                "n": "日常",
                "v": "15"
            }, {
                "n": "校园",
                "v": "16"
            }, {
                "n": "真人",
                "v": "18"
            }, {
                "n": "推理",
                "v": "14"
            }, {
                "n": "历史",
                "v": "19"
            }, {
                "n": "经典",
                "v": "3"
            }, {
                "n": "其他",
                "v": "12"
            }]
        }, {
            "key": "iyear",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "child": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "76"
            }, {
                "n": "好评",
                "v": "20"
            }]
        }, {
            "key": "sex",
            "name": "性别",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "女孩",
                "v": "1"
            }, {
                "n": "男孩",
                "v": "2"
            }]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "内地",
                "v": "3"
            }, {
                "n": "日本",
                "v": "2"
            }, {
                "n": "其他",
                "v": "1"
            }]
        }, {
            "key": "iyear",
            "name": "年龄段",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "0-3岁",
                "v": "1"
            }, {
                "n": "4-6岁",
                "v": "2"
            }, {
                "n": "7-9岁",
                "v": "3"
            }, {
                "n": "10岁以上",
                "v": "4"
            }, {
                "n": "全年龄段",
                "v": "7"
            }]
        }],
        "doco": [{
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最热",
                "v": "75"
            }, {
                "n": "最新",
                "v": "74"
            }]
        }, {
            "key": "itrailer",
            "name": "出品方",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "BBC",
                "v": "1"
            }, {
                "n": "国家地理",
                "v": "4"
            }, {
                "n": "HBO",
                "v": "3175"
            }, {
                "n": "NHK",
                "v": "2"
            }, {
                "n": "历史频道",
                "v": "7"
            }, {
                "n": "ITV",
                "v": "3530"
            }, {
                "n": "探索频道",
                "v": "3174"
            }, {
                "n": "ZDF",
                "v": "3176"
            }, {
                "n": "腾讯自制",
                "v": "15"
            }, {
                "n": "合作机构",
                "v": "6"
            }, {
                "n": "其他",
                "v": "5"
            }]
        }, {
            "key": "type",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "自然",
                "v": "4"
            }, {
                "n": "美食",
                "v": "10"
            }, {
                "n": "社会",
                "v": "3"
            }, {
                "n": "人文",
                "v": "6"
            }, {
                "n": "历史",
                "v": "1"
            }, {
                "n": "军事",
                "v": "2"
            }, {
                "n": "科技",
                "v": "8"
            }, {
                "n": "财经",
                "v": "14"
            }, {
                "n": "探险",
                "v": "15"
            }, {
                "n": "罪案",
                "v": "7"
            }, {
                "n": "竞技",
                "v": "12"
            }, {
                "n": "旅游",
                "v": "11"
            }]
        }]
    },
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    cate_exclude: '会员|游戏|全部',
    class_name: '精选&电影&电视剧&综艺&动漫&少儿&纪录片',
    class_url: 'choice&movie&tv&variety&cartoon&child&doco',
    limit: 20,
    play_parse: true,
    lazy: $js.toString(() => {
        try {
            let bata = JSON.parse(response);
            log(bata)
            if (bata.url.includes("http")) {
                input = {
                    header: {
                        'User-Agent': ""
                    },
                    parse: 0,
                    url: bata.url,
                    jx: 0,
                    danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
                };
            } else {
                input = {
                    header: {
                        'User-Agent': ""
                    },
                    parse: 0,
                    url: input.split("?")[0],
                    jx: 1,
                    danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
                };
            }
        } catch {
            input = {
                header: {
                    'User-Agent': ""
                },
                parse: 0,
                url: input.split("?")[0],
                jx: 1,
                danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
            };
        }
    }),

    推荐: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    二级: $js.toString(() => {
        VOD = {};
        let d = [];
        let video_list = [];
        let video_lists = [];
        let QZOutputJson;
        let html = fetch(input, fetch_params);
        let sourceId = /get_playsource/.test(input) ? input.match(/id=(\d*?)&/)[1] : input.split("cid=")[1];
        let cid = sourceId;
        let detailUrl = "https://v.qq.com/detail/m/" + cid + ".html";
        try {
            let json = JSON.parse(html);
            VOD = {
                vod_url: input,
                vod_name: json.c.title,
                type_name: json.typ.join(","),
                vod_actor: json.nam.join(","),
                vod_year: json.c.year,
                vod_content: json.c.description,
                vod_remarks: json.rec,
                vod_pic: urljoin2(input, json.c.pic)
            }
        } catch (e) {}
        if (/get_playsource/.test(input)) {
            eval(html);
            let indexList = QZOutputJson.PlaylistItem.indexList;
            indexList.forEach(function(it) {
                let dataUrl = "https://s.video.qq.com/get_playsource?id=" + sourceId + "&plat=2&type=4&data_type=3&range=" + it + "&video_type=10&plname=qq&otype=json";
                eval(fetch(dataUrl, fetch_params));
                let vdata = QZOutputJson.PlaylistItem.videoPlayList;
                vdata.forEach(function(item) {
                    d.push({
                        title: item.title,
                        pic_url: item.pic,
                        desc: item.episode_number + "\t\t\t播放量：" + item.thirdLine,
                        url: item.playUrl
                    })
                });
                video_lists = video_lists.concat(vdata)
            })
        } else {
            let json = JSON.parse(html);
            video_lists = json.c.video_ids;
            let url = "https://v.qq.com/x/cover/" + sourceId + ".html";
            if (video_lists.length === 1) {
                let vid = video_lists[0];
                let o_url = "https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist=" + vid;
                let o_html = fetch(o_url, fetch_params);
                eval(o_html);
                if (QZOutputJson.results && QZOutputJson.results.length > 0) {
                    let it1 = QZOutputJson.results[0].fields;
                    url = "https://v.qq.com/x/cover/" + cid + "/" + vid + ".html";
                    d.push({
                        title: it1.title,
                        url: url
                    })
                } else {
                    url = "https://v.qq.com/x/cover/" + cid + "/" + vid + ".html";
                    d.push({
                        title: "正片播放",
                        url: url
                    })
                }
            } else if (video_lists.length > 1) {
                for (let i = 0; i < video_lists.length; i += 30) {
                    video_list.push(video_lists.slice(i, i + 30))
                }
                video_list.forEach(function(it, idex) {
                    let o_url = "https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist=" + it.join(",");
                    let o_html = fetch(o_url, fetch_params);
                    eval(o_html);
                    QZOutputJson.results.forEach(function(it1) {
                        it1 = it1.fields;
                        let url = "https://v.qq.com/x/cover/" + cid + "/" + it1.vid + ".html";
                        d.push({
                            title: it1.title,
                            pic_url: it1.pic160x90.replace("/160", ""),
                            desc: it1.video_checkup_time,
                            url: url,
                            type: it1.category_map && it1.category_map.length > 1 ? it1.category_map[1] : ""
                        })
                    })
                })
            }
        }

        let playFrom = [];
        let playUrl = [];

        let ygKeywords = ["预告", "花絮", "片花", "特辑", "幕后", "采访", "制作", "MV", "主题曲"];

        let yg = d.filter(function(it) {
            return it.type && ygKeywords.some(keyword => it.type.includes(keyword));
        });
        let zp = d.filter(function(it) {
            return !(it.type && ygKeywords.some(keyword => it.type.includes(keyword)));
        });

        if (zp.length > 0) {
            playFrom.push("正片");
            playUrl.push(zp.map(it => it.title + "$" + it.url).join("#"));
        }

        if (yg.length > 0) {
            let 预告 = yg.filter(it => it.type && it.type.includes("预告"));
            let 花絮片花 = yg.filter(it => it.type && (it.type.includes("花絮") || it.type.includes("片花")));
            let 特辑 = yg.filter(it => it.type && (it.type.includes("特辑") || it.type.includes("幕后")));

            if (预告.length > 0) {
                playFrom.push("预告");
                playUrl.push(预告.map(it => it.title + "$" + it.url).join("#"));
            }
            if (花絮片花.length > 0) {
                playFrom.push("花絮片花");
                playUrl.push(花絮片花.map(it => it.title + "$" + it.url).join("#"));
            }
            if (特辑.length > 0) {
                playFrom.push("特辑");
                playUrl.push(特辑.map(it => it.title + "$" + it.url).join("#"));
            }
        }

        VOD.vod_play_from = playFrom.join("$$$");
        VOD.vod_play_url = playUrl.join("$$$");
    }),
    搜索: $js.toString(() => {
        let d = [],
            keyword = input.split("/")[3];
        let seenIds = new Set();

        function vodSearch(keyword, page = 0) {
            return request('https://pbaccess.video.qq.com/trpc.videosearch.mobile_search.MultiTerminalSearch/MbSearch?vplatform=2', {
                body: JSON.stringify({
                    version: "25042201",
                    clientType: 1,
                    filterValue: "",
                    uuid: "B1E50847-D25F-4C4B-BBA0-36F0093487F6",
                    retry: 0,
                    query: keyword,
                    pagenum: page,
                    isPrefetch: true,
                    pagesize: 30,
                    queryFrom: 0,
                    searchDatakey: "",
                    transInfo: "",
                    isneedQc: true,
                    preQid: "",
                    adClientInfo: "",
                    extraInfo: {
                        isNewMarkLabel: "1",
                        multi_terminal_pc: "1",
                        themeType: "1",
                        sugRelatedIds: "{}",
                        appVersion: ""
                    }
                }),
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
                    'Content-Type': 'application/json',
                    'Origin': 'https://v.qq.com',
                    'Referer': 'https://v.qq.com/'
                },
                method: 'POST'
            });
        }

        const nonMainContentKeywords = [
            '：', '#', '特辑', '“', '剪辑', '片花', '独家', '专访', '纯享',
            '制作', '幕后', '宣传', 'MV', '主题曲', '插曲', '彩蛋',
            '精彩', '集锦', '盘点', '回顾', '解说', '评测', '反应', 'reaction'
        ];

        function isMainContent(title) {
            if (!title) return false;
            if (title.includes('<em>') || title.includes('</em>')) return false;
            return !nonMainContentKeywords.some(keyword => title.includes(keyword));
        }

        try {
            let html = vodSearch(keyword, 0);
            let json = JSON.parse(html);

            function processItemList(itemList) {
                if (!itemList) return;

                itemList.forEach(it => {
                    if (it.doc && it.doc.id && it.videoInfo && isMainContent(it.videoInfo.title)) {
                        const itemId = it.doc.id;
                        if (!seenIds.has(itemId)) {
                            seenIds.add(itemId);
                            d.push({
                                title: it.videoInfo.title,
                                img: it.videoInfo.imgUrl || "",
                                url: itemId,
                                desc: it.videoInfo.secondLine || ""
                            });
                        }
                    }
                });
            }

            if (json.data && json.data.normalList) {
                processItemList(json.data.normalList.itemList);
            }

            if (json.data && json.data.areaBoxList) {
                json.data.areaBoxList.forEach(box => {
                    processItemList(box.itemList);
                });
            }

        } catch (e) {
            log("搜索出错: " + e.message);
        }

        setResult(d);
    })
};r rule = {
    title: '百忙无果[官]',
    host: 'https://pianku.api.%6d%67%74%76.com',
    homeUrl: '',
    // searchUrl: 'https://mobileso.bz.%6d%67%74%76.com/pc/search/v1?q=**&pn=fypage&pc=10',
    // 新版接口搜索变成v2并且加了验证，蛋疼
    // searchUrl: 'https://mobileso.bz.mgtv.com/pc/search/v2?allowedRC=1&src=mgtv&did=cf03b959-6945-4cb6-bcb3-88762459354d&timestamp=2024-06-21T15%3A52%3A55Z&signVersion=1&signNonce=8dae67a1fafc4bda984ec8deb47666ad&q=**&pn=fypage&pc=10&corr=1&_support=10000000&signature=4e27fddcd2a1a66d6c1764ed6b74bab7',
    // 用手机的吧，搞不定这个
    searchUrl: 'https://mobileso.bz.%6d%67%74%76.com/msite/search/v2?q=**&pn=fypage&pc=10',
    detailUrl: 'https://pcweb.api.mgtv.com/episode/list?page=1&size=50&video_id=fyid',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    // 分类链接fypage参数支持1个()表达式
    // https://www.mgtv.com/lib/3?lastp=list_index&kind=a1&year=all&chargeInfo=a1&sort=c2
    url: '/rider/list/pcweb/v3?platform=pcweb&channelId=fyclass&pn=fypage&pc=80&hudong=1&_support=10000000&kind=a1&area=a1',
    filter_url: 'year={{fl.year or "all"}}&sort={{fl.sort or "all"}}&chargeInfo={{fl.chargeInfo or "all"}}',
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    class_name: '电视剧&电影&综艺&动漫&纪录片&教育&少儿',
    class_url: '2&3&1&50&51&115&10',
    filter: {
        "1": [{
            "key": "chargeInfo",
            "name": "付费类型",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "免费",
                "v": "b1"
            }, {
                "n": "vip",
                "v": "b2"
            }, {
                "n": "VIP用券",
                "v": "b3"
            }, {
                "n": "付费点播",
                "v": "b4"
            }]
        }, {
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最新",
                "v": "c1"
            }, {
                "n": "最热",
                "v": "c2"
            }, {
                "n": "知乎高分",
                "v": "c4"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }],
        "2": [{
            "key": "chargeInfo",
            "name": "付费类型",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "免费",
                "v": "b1"
            }, {
                "n": "vip",
                "v": "b2"
            }, {
                "n": "VIP用券",
                "v": "b3"
            }, {
                "n": "付费点播",
                "v": "b4"
            }]
        }, {
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最新",
                "v": "c1"
            }, {
                "n": "最热",
                "v": "c2"
            }, {
                "n": "知乎高分",
                "v": "c4"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }],
        "3": [{
            "key": "chargeInfo",
            "name": "付费类型",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "免费",
                "v": "b1"
            }, {
                "n": "vip",
                "v": "b2"
            }, {
                "n": "VIP用券",
                "v": "b3"
            }, {
                "n": "付费点播",
                "v": "b4"
            }]
        }, {
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最新",
                "v": "c1"
            }, {
                "n": "最热",
                "v": "c2"
            }, {
                "n": "知乎高分",
                "v": "c4"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }],
        "50": [{
            "key": "chargeInfo",
            "name": "付费类型",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "免费",
                "v": "b1"
            }, {
                "n": "vip",
                "v": "b2"
            }, {
                "n": "VIP用券",
                "v": "b3"
            }, {
                "n": "付费点播",
                "v": "b4"
            }]
        }, {
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最新",
                "v": "c1"
            }, {
                "n": "最热",
                "v": "c2"
            }, {
                "n": "知乎高分",
                "v": "c4"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }],
        "51": [{
            "key": "chargeInfo",
            "name": "付费类型",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "免费",
                "v": "b1"
            }, {
                "n": "vip",
                "v": "b2"
            }, {
                "n": "VIP用券",
                "v": "b3"
            }, {
                "n": "付费点播",
                "v": "b4"
            }]
        }, {
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最新",
                "v": "c1"
            }, {
                "n": "最热",
                "v": "c2"
            }, {
                "n": "知乎高分",
                "v": "c4"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }],
        "115": [{
            "key": "chargeInfo",
            "name": "付费类型",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "免费",
                "v": "b1"
            }, {
                "n": "vip",
                "v": "b2"
            }, {
                "n": "VIP用券",
                "v": "b3"
            }, {
                "n": "付费点播",
                "v": "b4"
            }]
        }, {
            "key": "sort",
            "name": "排序",
            "value": [{
                "n": "最新",
                "v": "c1"
            }, {
                "n": "最热",
                "v": "c2"
            }, {
                "n": "知乎高分",
                "v": "c4"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{
                "n": "全部",
                "v": "all"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }]
    },
    limit: 20,
    play_parse: true,
    lazy: $js.toString(() => {
        try {
            let api = "" + input.split("?")[0];
            console.log(api);
            let response = fetch(api, {
                method: 'get',
                headers: {
                    'User-Agent': 'okhttp/3.14.9',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            let bata = JSON.parse(response);
            if (bata.url.includes("mgtv")) {
                input = {
                    parse: 0,
                    url: bata.url,
                    jx: 0,
                    danmaku: "http://127.0.0.1:9978/proxy?do=danmu&site=js&url=" + input.split("?")[0]
                };
            } else {
                input = {
                    parse: 0,
                    url: input.split("?")[0],
                    jx: 1,
                    danmaku: "http://127.0.0.1:9978/proxy?do=danmu&site=js&url=" + input.split("?")[0]
                };
            }
        } catch {
            input = {
                parse: 0,
                url: input.split("?")[0],
                jx: 1,
                danmaku: "http://127.0.0.1:9978/proxy?do=danmu&site=js&url=" + input.split("?")[0]
            };
        }
    }),
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:print(input);fetch_params.headers["user-agent"]=MOBILE_UA;let html=request(input);let rurl=html.match(/window\\.open\\(\'(.*?)\',/)[1];rurl=urlDeal(rurl);input={parse:1,url:rurl};',
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级: 'json:data.hitDocs;title;img;updateInfo||rightCorner.text;playPartId',
    // 一级:'json:data.hitDocs;title;img;updateInfo;playPartId',
    二级: $js.toString(() => {
        fetch_params.headers.Referer = "https://www.mgtv.com";
        fetch_params.headers["User-Agent"] = MOBILE_UA;
        pdfh = jsp.pdfh;
        pdfa = jsp.pdfa;
        pd = jsp.pd;
        VOD = {};
        let d = [];
        let html = request(input);
        let json = JSON.parse(html);
        let host = "https://www.mgtv.com";
        let ourl = json.data.list.length > 0 ? json.data.list[0].url : json.data.series[0].url;
        if (!/^http/.test(ourl)) {
            ourl = host + ourl
        }
        fetch_params.headers["User-Agent"] = MOBILE_UA;
        html = request(ourl);
        if (html.includes("window.location =")) {
            print("开始获取ourl");
            ourl = pdfh(html, "meta[http-equiv=refresh]&&content").split("url=")[1];
            print("获取到ourl:" + ourl);
            html = request(ourl)
        }
        try {
            let details = pdfh(html, ".m-details&&Html").replace(/h1>/, "h6>").replace(/div/g, "br");
            print(details);
            let actor = "",
                director = "",
                time = "";
            if (/播出时间/.test(details)) {
                actor = pdfh(html, "p:eq(5)&&Text").substr(0, 25);
                director = pdfh(html, "p:eq(4)&&Text");
                time = pdfh(html, "p:eq(3)&&Text")
            } else {
                actor = pdfh(html, "p:eq(4)&&Text").substr(0, 25);
                director = pdfh(html, "p:eq(3)&&Text");
                time = "已完结"
            }
            let _img = pd(html, ".video-img&&img&&src");
            let JJ = pdfh(html, ".desc&&Text").split("简介：")[1];
            let _desc = time;
            VOD.vod_name = pdfh(html, ".vt-txt&&Text");
            VOD.type_name = pdfh(html, "p:eq(0)&&Text").substr(0, 6);
            VOD.vod_area = pdfh(html, "p:eq(1)&&Text");
            VOD.vod_actor = actor;
            VOD.vod_director = director;
            VOD.vod_remarks = _desc;
            VOD.vod_pic = _img;
            VOD.vod_content = JJ;
            if (!VOD.vod_name) {
                VOD.vod_name = VOD.type_name;
            }
        } catch (e) {
            log("获取影片信息发生错误:" + e.message)
        }

        function getRjpg(imgUrl, xs) {
            xs = xs || 3;
            let picSize = /jpg_/.test(imgUrl) ? imgUrl.split("jpg_")[1].split(".")[0] : false;
            let rjpg = false;
            if (picSize) {
                let a = parseInt(picSize.split("x")[0]) * xs;
                let b = parseInt(picSize.split("x")[1]) * xs;
                rjpg = a + "x" + b + ".jpg"
            }
            let img = /jpg_/.test(imgUrl) && rjpg ? imgUrl.replace(imgUrl.split("jpg_")[1], rjpg) : imgUrl;
            return img
        }

        if (json.data.total === 1 && json.data.list.length === 1) {
            let data = json.data.list[0];
            let url = "https://www.mgtv.com" + data.url;
            d.push({
                title: data.t4,
                desc: data.t2,
                pic_url: getRjpg(data.img),
                url: url
            })
        } else if (json.data.list.length > 1) {
            for (let i = 1; i <= json.data.total_page; i++) {
                if (i > 1) {
                    json = JSON.parse(fetch(input.replace("page=1", "page=" + i), {}))
                }
                json.data.list.forEach(function(data) {
                    let url = "https://www.mgtv.com" + data.url;
                    if (data.isIntact == "1") {
                        d.push({
                            title: data.t4,
                            desc: data.t2,
                            pic_url: getRjpg(data.img),
                            url: url
                        })
                    }
                })
            }
        } else {
            print(input + "暂无片源")
        }
        VOD.vod_play_from = "mgtv";
        VOD.vod_play_url = d.map(function(it) {
            return it.title + "$" + it.url
        }).join("#");
        setResult(d);
    }),

    搜索: $js.toString(() => {
        fetch_params.headers.Referer = "https://www.mgtv.com";
        fetch_params.headers["User-Agent"] = MOBILE_UA;
        let d = [];
        let html = request(input);
        let json = JSON.parse(html);
        json.data.contents.forEach(function(data) {
            if (data.type && data.type == 'media') {
                let item = data.data[0];
                let desc = item.desc.join(',');
                let fyclass = '';
                if (item.source === "imgo") {
                    let img = item.img ? item.img : '';
                    try {
                        fyclass = item.rpt.match(/idx=(.*?)&/)[1] + '$';
                    } catch (e) {
                        log(e.message);
                        fyclass = '';
                    }
                    log(fyclass);
                    d.push({
                        title: item.title.replace(/<B>|<\/B>/g, ''),
                        img: img,
                        content: '',
                        desc: desc,
                        url: fyclass + item.url.match(/.*\/(.*?)\.html/)[1]
                    })
                }
            }
        });
        setResult(d);
    }),
}
