---
title: 看電影學資安的第一篇 - 懷念的馬蓋先 新百戰天龍 MacGyver 第一季 第一集 S01E01
date: 2024-05-01 03:12:53
tags: 
    - secuirty
    - 資訊安全
    - 看電影學資安
    - drama
    - Macgyver
categories:
    - 看電影學資安
cover: /images/CyberSec-in-movie-Macgyver-S01E01/2.webp
---

累了嗎，聽首歌好嗎？

https://www.youtube.com/watch?v=y7P2sH2PL-w

一聽音樂，回憶都回來拉!! 相信很多老朋友聽到馬蓋先一定很興奮，那個用物理、化學知識外加一隻瑞士刀就可以突破一堆難關的帥氣男人又回來拉～ 不過如果抱持著這個想法的朋友可能會有點失望，新版的馬蓋先跟以往的馬蓋先有點不太一樣，老皮也不見了，不能在片尾的時候喊一聲：帥呀，老皮，就像只有林正英才是正統殭屍道長，其他的都是假的一樣。不過先別急著失望，在新版的馬蓋先因為有女駭客的加入，因此多了一些資安的元素在裡面，是不是很期待呀，我們就來看看這部影片第一集有哪些資安元素吧

![](/images/CyberSec-in-movie-Macgyver-S01E01/1.webp)

===========有雷分隔線===========

![](/images/CyberSec-in-movie-Macgyver-S01E01/2.webp)

新版馬蓋先Angus “Mac” MacGyver在一個美國的情報單位擔任特務，團隊裡面還有一位軍人退伍的打手Jack Dalton與女駭客Nikki Carpenter外加一位很有氣質的女主管Patricia Thornton，但因為原本團隊的女駭客Nikki在執行任務中被幹掉了，但是又需要她硬碟裡面的壞人照片，但是女駭客Nikki對於自己重要的資料又怎麼可能沒加密與保護呢？

可憐的配角就跑出來說，誒靠！這個硬碟有加密，我也想要拿私鑰進行解密呀，但是

![](/images/CyberSec-in-movie-Macgyver-S01E01/4.webp)
(圖由左到右分別為配角工程師, Jack, Mac, Thornton, Riley)

哎呀，有[邏輯炸彈](https://zh.wikipedia.org/wiki/%E9%82%8F%E8%BC%AF%E7%82%B8%E5%BD%88)ＲＲＲＲＲＲＲ～（抱頭
還比傳說中最猛的國家級惡意軟體[震網](https://zh.wikipedia.org/wiki/%E9%9C%87%E7%BD%91)還要強大，有沒有這麼屌啊!
但是從監獄請來的新女駭客當然比較厲害，馬上拿起旁邊的錘子把電腦槌下去，嚇得氣質女主管Thornton都花容失色了
電腦壞了就沒有邏輯炸彈拉，真不愧是拆彈專家
然後從電腦取出硬碟之後

![](/images/CyberSec-in-movie-Macgyver-S01E01/5.webp)
![](/images/CyberSec-in-movie-Macgyver-S01E01/6.webp)


本鍵人認為配角可能是使用動態分析，而女駭客Riley以[逆向工程](https://zh.wikipedia.org/wiki/%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B#.E8.BD.AF.E4.BB.B6)靜態分析的方式來取得金鑰，不過另外一提，為了保護資料，通常都會將硬碟用特殊工具將硬碟備份幾分再進行分析，不會直接從原本的硬碟進行分析，以免破壞重要資料(我從 [韓劇Phantom](https://zh.wikipedia.org/wiki/%E5%B9%BD%E9%9D%88_(%E9%9F%93%E5%9C%8B%E9%9B%BB%E8%A6%96%E5%8A%87)) 學來的，下次再來跟大家分享)，硬碟的私鑰就這樣被女駭客Riley拿到手拉(做了一堆邏輯炸彈，但是密碼都不用作保護的？哼，還說是高手～)，於是就開始分析資料，資料拿到之後就有壞人的長相的資料拉，但是人海茫茫要如何找到壞人呢？現任女駭客Riley當然不是省油的燈

![](/images/CyberSec-in-movie-Macgyver-S01E01/7.webp)

什麼？撒旦？

![](/images/CyberSec-in-movie-Macgyver-S01E01/8.webp)

當然不是七龍珠的撒旦，而是有[世界上最可怕的搜尋引擎](http://www.aqniu.com/hack-geek/8817.html)之稱的[Shodan](https://www.shodan.io/)，資安的新同學可能會想說不過就是個搜尋引擎嗎？但是Shodan找的可不是網頁，而是

![](/images/CyberSec-in-movie-Macgyver-S01E01/9.webp)

也就是所有連網設備的搜尋引擎

![](/images/CyberSec-in-movie-Macgyver-S01E01/10.webp)

可以攻擊所有有嚴重漏洞、弱密碼、預設密碼的網路攝影機(如轟動一時的[mirai](https://www.inside.com.tw/2016/10/23/what-the-latest-global-ddos-attack-means-for-entrepreneurs)病毒就是大量攻擊IoT設備來進行DDoS攻擊，威力非同小可)，連打手Jack都覺得強大得不真實，再搭配強大的運算能力與影像辨識技術 (大量的影像辨識實際上要做到可能非常難)，馬上就找到壞人在哪邊逛街吃雞排拉，照著劇情走，主角們藉由綁住壞人與壞人問事情的時候偷偷錄音

![](/images/CyberSec-in-movie-Macgyver-S01E01/11.webp)
![](/images/CyberSec-in-movie-Macgyver-S01E01/12.webp)


聲音模仿相關的技術在現在 AI 技術成長快速的環境下，已經有許多的商業軟體可以做到，甚至有許多的詐騙已經開始再利用，接著就用偽造的聲音打電話給另外一位壞人

![](/images/CyberSec-in-movie-Macgyver-S01E01/13.webp)

邊打還邊進行電話追蹤，可惜另外一位壞人也是駭客，透過網路電話外加[Tor](https://zh.wikipedia.org/zh-tw/Tor)隱藏位置，讓主角們無法找到

![](/images/CyberSec-in-movie-Macgyver-S01E01/14.webp)

Tor真是個好東西呀～（菸

接著後面的部分就沒有太多的資安拉，我就不繼續爆雷了，有興趣的朋友就自己去看看吧，不過個人覺得還是舊版的馬蓋先帥多了XD

在這部戲中我們學到了什麼：
1. 即使對於金鑰做了很多保護，只要有一個環節沒做好保護還是很容易被竊取
2. 只要你把機器接上網路就要做好防護，駭客正在覬覦你的機器中，利用Shodan攻擊有弱點的機器只是彈指之間的事
3. Tor是個隱藏身份的好用工具(但目前已經有許多研究單位已經研究出攻擊方法，千萬別以為做壞事沒人知道)
4. 聲音模仿技術已經相當成熟，未來不可以僅聽聲音當作辨認的唯一條件，必須再三確認


給新手的延伸閱讀：

[Freebuf — 逆向工程(三)：实例破解](http://www.freebuf.com/articles/system/87723.html)

[Freebuf — Shodan新手入坑指南](http://www.freebuf.com/sectool/121339.html)


本人才疏學淺，也是本人第一篇關於電影談資安的文章，難免有謬誤遺漏之處，還請各位大大鞭小力一點XD