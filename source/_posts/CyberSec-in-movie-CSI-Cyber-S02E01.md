---
title: 開車順路經過就入侵你家 - CSI Cyber S02E01
date: 2024-05-02 00:14:49
tags: 
    - secuirty
    - 資訊安全
    - 看電影學資安
    - drama
    - CSI Cyber
categories:
    - 看電影學資安
cover: /images/CyberSec-in-movie-CSI-Cyber-S02E01/13.webp
---

Hi 各位朋友有安全躲過這次WannaCry勒索病毒嗎，記得趕緊把該補的Patch補一補吧，以免被打的嫑嫑的～下一波[Shadow Brokers](http://thehackernews.com/2017/05/shodow-brokers-wannacry-hacking.html)攻擊可能就快來拉～

此集故事起源為某家庭的管家報失竊案，而且主人也聯絡不到，FBI發覺案情並不單純

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/1.webp "圖為示意圖，非當事者FBI本人 XD")

此集的主題為WarDriving，開車就可以入侵？讓我們繼續往下看~

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/2.webp)

1. 小孩子的娃娃也可以被入侵，IoT威脅只會越來越嚴重

故事一開始的畫面就是從小女孩與智慧型娃娃的對話開始，就暗示了智慧型娃娃被入侵，後面的劇情也說明了的確被駭客所利用，雖然這是電影情節，但實際生活也發生了這樣的[智慧娃娃資安漏洞](http://www.appledaily.com.tw/realtimenews/article/new/20170218/1058838/)出現，攻擊者可以藉由有漏洞的藍芽裝置入侵娃娃來進行監聽，因此生活中任何可以連接網路的設備都要非常的小心，尤其是可以接收聲音或影像的設備，更是可以獲得很多使用者資訊的重要一環，因此購買相關設備都要注意是否有資安問題。

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/3.webp "攻擊者欺騙小女孩開啟窗戶以便行竊")


2. 遊戲機與掃地機器人也成為數位鑑識的一環，不連網的電子設備都可能存在敏感資訊

劇中FBI鑑識專家D.B. Russell為追查證據，非常細心地發現房子內某塊地板特別多灰塵，後來又發現了有記憶功能的掃地機器人，便開啟了掃地機器人描繪出那塊區域的樣子，發現那塊區域為一個人的形狀，因此判定可能為屍體，不過我覺得為何不對記憶的區塊進行分析呢？這樣豈不是比較有公信力也可以避免數位證據遺失嗎(*´･д･)?


![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/4.webp)
![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/5.webp)
![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/6.webp) 

掃地機器人的碰撞紀錄成為破案的關鍵之一

另外也從體感遊戲機(類似[XBOX Kinect](http://www.xbox.com/zh-TW/xbox-one/accessories/kinect))的遊戲紀錄中發現受害者最後在玩高爾夫遊戲，並從3D Mapping系統中獲取最後的紀錄，發現爭鬥中竊賊可能的身高體重，並且竊賊有使用遊戲搭配的高爾夫球竿對受害者攻擊，該球桿具有gps功能(到底為什麼一個遊戲的高爾夫球桿需要[gps](https://zh.wikipedia.org/wiki/%E5%85%A8%E7%90%83%E5%AE%9A%E4%BD%8D%E7%B3%BB%E7%BB%9F)，而不是搭配g-sensor, 陀螺儀就好?)，而笨賊又把兇器高爾夫球桿與屍體放在一起，FBI們就藉由gps紀錄追查到了受害者，因此別小看這些不連網的電子設備，可能都存有你不想透露的敏感資訊呢!

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/7.webp)
![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/8.webp)

上圖為遊戲機所擷取的影像資料，發現攻擊者的身形

3. 手機洩漏的資訊超乎你的想像

有時候會看到有人使用智慧型手機完全不上鎖，真心佩服他的勇氣，完全不擔心自己的資訊會被竊取，就跟離開你的電腦要鎖定畫面一樣，手機所存的資訊有時候還比電腦存在更多的敏感資訊，如：通話紀錄、app使用紀錄(如[line](http://www.netadmin.com.tw/article_content.aspx?sn=1411130004)), fb等)、[gps紀錄](http://key.chtouch.com/ContentView.aspx?P=2066)、[相片](https://steachs.com/archives/11537)(通常也會帶著時間資訊與地理位置資訊)，而劇中的FBI就從受害者的手機中擷取出訊息記錄(SMS)與相片，得知了原來受害者的女兒可能就在受害者的身邊，雖然後來確定小女兒在哪裡還是靠其他非數位證據才發現的_(:3 」∠ )_

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/9.webp)

FBI從手機恢復的照片得知受害者還有個女兒

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/10.webp)

FBI從手機恢復的訊息得知受害者已接女兒到身邊

追蹤竊賊也是依靠手機訊號與基地台接觸時間點，推論路過棄屍地點的最短路徑以及可能的時間點，依照這些資訊找出可能的手機號碼，因此可見手機真的是洩露非常多的資訊，想跑路時千萬別把手機帶在身上，轉賣手機的時候也千萬記得要將手機重設以清除個人資訊(當然最好是不要賣掉)，另外有個老弱點[SS7](http://www.ithome.com.tw/news/113893)也是關於手機的，我們就下次有機會再來討論囉～

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/11.webp)

FBI從基地台訊號與路線推測出可能的手機號碼

4. 不可思議的Side Channel Attack，電影情節已成現實

第三點提到的手機洩漏的資訊很多，最後追蹤到幕後的駭客則是依靠G-Sensor與陀螺儀的紀錄的[Side Channel Attack](https://zh.wikipedia.org/wiki/%E6%97%81%E8%B7%AF%E6%94%BB%E5%87%BB) 來計算竊賊在使用電腦的時候，手機放在旁邊接收到鍵盤輸入時的震動來判斷可能輸入的電腦鍵盤按鍵，雖然聽起來太過科幻，但實際上已有許多[類似研究](https://www.inside.com.tw/2017/04/14/side-channel-attack-technique-steals-pins-by-analyzing-smart-device-sensor-readings)與[新聞](https://technews.tw/2017/05/03/are-your-sensors-spying-on-you/)指出是可行的，甚至你的電腦不連網路都可以從[磁場變化](http://www.techbang.com/posts/41833-israel-australian-university-study-100-yuan-materials-can-telekinesis-to-steal-phone-confidential-data)、[硬碟燈](http://cyber.bgu.ac.il/advanced-cyber/system/files/LED-it-GO_0.pdf)與[風扇噪音](http://www.freebuf.com/news/107733.html)都可以竊取敏感資訊，所以如果真的要注重資安，實體安全是需要先考慮的問題

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/12.webp)

攻擊者把手機放在鍵盤旁邊，紀錄了攻擊者打字

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/13.webp)

FBI將記錄對應到鍵盤輸入

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/14.webp)

Side Channel Attack根本是特異功能等級的攻擊了，摸你的頭就知道你想什麼，摸你的嘴就知道你吃過什麼，再摸…. 你的主機就知道你的密碼了(☉д⊙)

4. WarDriving與脆弱的無線加密

此集的CSI Cyber的關鍵字是[Wardriving](https://zh.wikipedia.org/wiki/%E6%88%98%E4%BA%89%E9%A9%BE%E9%A9%B6)，簡單來說就是藉由到處逛逛收集各種數位資訊，而資訊可能包含了無線AP資訊、Zigbee資訊、地理位置等，在此集的場景中，駭客有可能已經先經過WarDriving收集資訊，接著駭客是將車子開到受害者的家附近，攻擊受害者的AP，而該AP使用了[WEP(Wired Equivalent Privacy)](https://zh.wikipedia.org/wiki/%E6%9C%89%E7%B7%9A%E7%AD%89%E6%95%88%E5%8A%A0%E5%AF%86)，於之前[看電影學資安 — 你的WiFi就是我的WiFi](https://blog.walter.com.tw/2024/05/01/CyberSec-in-movie-Macgyver-S01E02/)中就說明了使用WEP已經是非常危險的，對駭客來說破解密碼已經是輕而易舉，雖然已經提過還是要再提醒各位一定要使用WPA/WPA2，停止使用WPS，並且使用複雜的密碼，千萬別再使用電話號碼或統編了!

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/15.webp)

駭客入侵受害者使用WEP作為加密模式的AP

5. 0day (zero day)的可怕與價值

[0day](https://zh.wikipedia.org/wiki/%E9%9B%B6%E6%97%A5%E6%94%BB%E5%87%BB)意指尚未釋出修補程式的漏洞，因此在尚未釋出修補程式前最有效的防禦的方法只有關閉服務，更何況很多0day是尚未被公布的，因此非常的危險。在劇中提到此攻擊者利用了兩個0day，每個至少價值20萬美元，也就是大約新台幣六百萬呀呀呀呀呀～ 一個弱點竟然價值六百萬，對於弱點價值不熟悉的朋友可能會覺得這是天價，但是實際上都有[Zerodium](https://zerodium.com/program.html)這樣的公司在公開收購有價值的漏洞，最高價值150萬美元! 也就是大約4,500萬新台幣呀，如果到之前所提到的[暗網](https://www.isda.org.tw/index.php/2017/03/27/csi-cyber-s01e02/)進行交易價格自然更高，企業千萬不要小看自己公司產品的漏洞價值呀。另外企業主動提供的漏洞獎勵計劃也可以從該公司的官網或者類似[HackerOne](https://hackerone.com/directory?query=type%3Ahackerone&sort=published_at%3Adescending&page=1)這樣的網站得知目前漏洞的行情唷，有能力的白帽就趕快到這邊註冊帳號試試自己的身手吧。

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/16.webp)
![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/17.webp)

FBI評估這兩個0DAY漏洞的價值每個都值20萬美金以上

![](/images/CyberSec-in-movie-CSI-Cyber-S02E01/18.webp)

Zerodium懸賞表，從1萬到150萬美元都有，最高的為遠端JailBreak