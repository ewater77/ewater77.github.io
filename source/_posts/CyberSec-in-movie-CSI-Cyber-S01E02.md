---
title: IoT世代，萬物皆可駭 - CSI Cyber S01E02
date: 2024-05-01 23:03:18
updated: 2026-08-01 14:45:00
tags: 
    - security
    - 資訊安全
    - 看電影學資安
    - drama
    - CSI Cyber
description: "看電影學資安：CSI Cyber 第一季第二集駭客攻擊雲霄飛車釀成死傷，從劇情看 IoT 時代的資安威脅，連汽車警報器都能被入侵的真實案例。"
categories:
    - 看電影學資安
series: 看電影學資安
noticeOutdate: false
cover: /images/CyberSec-in-movie-CSI-Cyber-S01E02/8.webp
---

[撰文 Walter/Eric]

## 前言：黑帽駭客與雲霄飛車命案

於第二集開始，影集內都會介紹一個資訊安全相關的名詞，而此次的專有名詞是[黑帽駭客 (Black hat hacker)](https://blog.trendmicro.com.tw/?p=1857)

意指運用資訊相關技能惡意入侵或攻擊他人的設備，導致他人權益受損

反之如果是出於善意且不踰矩的通常就稱為是白帽駭客囉

希望大家都能夠成為功力高強的白帽駭客，而不是為非作歹的黑帽駭客唷!

![影集開場介紹黑帽駭客定義的字卡畫面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/1.webp)

此集的故事起源於駭客攻擊了遊樂場的雲霄飛車，使得乘客死亡或受傷

![駭客以手機應用程式模擬操控雲霄飛車的畫面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/2.webp)

圖為攻擊者模擬的雲霄飛車以及攻擊用的App
雲霄飛車也能進行攻擊，似乎有點神奇～ 揪竟是怎麼回事呢?
![雲霄飛車出軌釀成死傷的事故現場劇照](/images/CyberSec-in-movie-CSI-Cyber-S01E02/3.webp)

發生事故之後確定煞車、軌道以及車體本身都正常，懷疑是系統被入侵，因此將此案件交由了Cyber Team

首先就是將錄影畫面以及系統診斷的資訊調出以協助判斷案情…
![Cyber Team 調閱監視錄影與系統診斷資訊辦案](/images/CyberSec-in-movie-CSI-Cyber-S01E02/4.webp)


此集讓我們關注的點有哪些呢

## IoT時代，什麼都能入侵，包含你的愛車

Ryan為了警告前黑帽的Nelson，攻擊了他車子的警報器，而且只花五分鐘就攻擊成功了

並且使用可以控制汽車的app就可以控制Nelson的車子了，當然也許拍美劇需要一些戲劇效果，

但是現實生活中的確有發生可以進行網路攻擊造成車子警報器失效的案例：

三菱的一款油電混和車，可透過連線車上的Wi-Fi(一般車子使用GSM模組)，對於車子進行一些操作

因為Wi-Fi本身無法遠距離連線，故車主的手機也一定距離車子在不遠處，藉由封包側錄可以取得handshake的資料

這些資料可以讓攻擊者定位目標的地理位置

另一方面此Wi-Fi的密碼因為太簡單也太短，可在四天內使用4個GPU的電腦破解

於是有了Wi-Fi名稱與密碼，攻擊者可以對車子的設定進行任意修改，例如關閉警報器。可參考[原文](https://www.pentestpartners.com/blog/hacking-the-mitsubishi-outlander-phev-hybrid-suv/)

![Ryan 入侵 Nelson 汽車警報器示警的劇照](/images/CyberSec-in-movie-CSI-Cyber-S01E02/5.webp)
![以手機 App 遠端控制汽車功能的畫面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/6.webp)

### 入侵車用系統的常見方式

在這IoT正夯的時代，什麼都可以入侵，入侵有電腦的車子也不是第一次聽到了

入侵車用系統常見的方式有：

1. 長距離：行動網路、WiFi

2. 短距離：藍芽、胎壓感測器(TPMS)

3. 實體：CanBus、USB

其中比較特別，也是最為多人測試的方式為CanBus

藉由監聽CanBus所有的封包來逆向他傳輸的資料的協定

再藉由傳送偽造的資料對車子進行控制

因車上載著人，車載安全通常關係著人命

因此車商設計系統時更需比一般的網路設備更注意安全才是

## 門禁卡其實沒有你想的那麼安全

FBI檢查操控機房的出入紀錄，竟然短短一分鐘內被17位員工刷卡要進入

![FBI 檢視機房門禁出入紀錄的畫面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/7.webp)
![一分鐘內十七名員工刷卡的異常紀錄清單](/images/CyberSec-in-movie-CSI-Cyber-S01E02/8.webp)


除非這是上班打卡的地方外加快九點了，不然就是一定有鬼XD

而且很明顯的是他並不知道哪一張卡片可以進入機房，因此他是將每一個卡片都嘗試刷卡進入

但是很特別的是沒有一位員工表示卡片遺失或者是被偷竊，那麼他怎麼有辦法進行刷卡呢？

原來攻擊者偽造了卡片認證訊息

現在很多的門禁系統其實沒有想像中的安全

單純都只以卡片流水號當作認證的依據，並且沒有任何的防止偽造能力

所以只要竊聽卡號並記錄起來，加以[重送(Replay Attack)](https://en.wikipedia.org/wiki/Replay_attack)就可以攻擊成功

作為RFID攻擊工具常見的有很有名的[ProxMark3(PM3)](http://bbs.pediy.com/thread-147917.htm)

PM3可以很輕鬆的竊聽資訊，以及輕易的偽造卡號，根本是請同事幫忙上班打卡的好工具呀!! (好孩子不要學

![RFID 攻擊工具 ProxMark3 的實體外觀](/images/CyberSec-in-movie-CSI-Cyber-S01E02/9.webp)
![以 ProxMark3 讀取並複製門禁卡片的操作](/images/CyberSec-in-movie-CSI-Cyber-S01E02/10.webp)

本協會的烏魚子大大利用PM3做了一個簡短但有趣的複製卡片實作影片，有興趣的可以點[Youtube連結參考](https://www.youtube.com/watch?v=7hTYBUFCPuw)

## 便宜好用的單板電腦

劇中稍微講解雲霄飛車的感測器(此部分筆者因對雲霄飛車無研究，還請各位前輩多指教)

每個軌道的接口都有感測器，而這些感測器的目的就是偵測是否發生故障

而在發生故障的時候可以緊急煞車以避免事故發生，但是事故發生的時候沒有一個感測器發出警報

因此判定很有可能為雲霄飛車的系統被入侵了

![劇中講解雲霄飛車軌道感測器運作的畫面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/11.webp)

Krumitz經過檢查之後判定雲霄飛車系統根本不可能被遠端入侵，因為電腦根本沒有接網路線呀

說好的拔網路線就不會被入侵呢？

遊樂園的工程師也說這個系統根本沒有接WiFi或者藍牙，所以FBI判定為攻擊者是直接接觸電腦進行攻擊

![Krumitz 檢查未連網的雲霄飛車控制電腦](/images/CyberSec-in-movie-CSI-Cyber-S01E02/12.webp)
![工程師說明控制系統沒有 WiFi 與藍牙連線](/images/CyberSec-in-movie-CSI-Cyber-S01E02/13.webp)


後來Krumitz找出攻擊者的真正手法原來是利用了[單板電腦(Single Board Computer)](https://zh.wikipedia.org/wiki/%E5%8D%95%E6%9D%BF%E6%9C%BA)

攻擊者進入機房之後將單板電腦接入控制雲霄飛車的[PLC](https://zh.wikipedia.org/wiki/%E5%8F%AF%E7%BC%96%E7%A8%8B%E9%80%BB%E8%BE%91%E6%8E%A7%E5%88%B6%E5%99%A8)

使用手機並以[藍芽](https://zh.wikipedia.org/zh-tw/%E8%97%8D%E7%89%99)為訊號傳輸途徑，藉以控制雲霄飛車，難怪沒有連接網路的雲霄飛車也可以被入侵!

單板電腦簡單來說就是長寬如名片大小的電腦，世界最為知名的單板電腦為[樹莓派(Raspberry Pi)](https://zh.wikipedia.org/wiki/%E6%A0%91%E8%8E%93%E6%B4%BE)

![名片大小的樹莓派單板電腦電路板](/images/CyberSec-in-movie-CSI-Cyber-S01E02/14.webp)

樹莓派便宜的價格、還算夠用的硬體配備、以及眾多的開發資源讓單板電腦的發展突飛猛進

以 Pi 5來說就有內建Ethernet、WiFi以及藍牙，實在是駭客居家旅遊入侵電腦的必備良藥XD

![樹莓派專用的 Kali Linux 滲透測試系統](/images/CyberSec-in-movie-CSI-Cyber-S01E02/15.webp)

Kali還有特別製作一個給Raspberry pi的版本唷，製作方式可以參考這邊跟這邊

另外最近更有叫做PoisonTap的攻擊手法，使用只要五美元且更小的Pi Zero來竊取已經鎖定的電腦裡面的敏感資訊

單板電腦的方便性使得駭客的攻擊範圍越來越廣，手法越來越奇耙

樹莓派如果不拿來做滲透測試的話也還有千千百百種用法等著你唷

## 洩露資訊的無線通訊

因樹莓派上有著攻擊者藍芽連接的紀錄

因此可以從樹莓派上知道攻擊者的藍芽裝置位址(Bluetooth Device Address, BD_ADDR)

BD_ADDR是一組由48bit所組成的唯一數值

顯示的方式都會以如 21:14:15:77:22:a0 的顯示方式出現

![劇中顯示攻擊者藍牙裝置位址的畫面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/16.webp)


接著FBI就使用Bluetooth Scanner來掃描攻擊者的藍芽裝置位址

如果有掃到匹配的位址就代表攻擊者在很近的範圍

FBI藉由藍芽的配對才找到攻擊者的大約位置

![FBI 以藍牙掃描器搜索攻擊者所在位置](/images/CyberSec-in-movie-CSI-Cyber-S01E02/17.webp)

但是發現攻擊者已經把控制樹莓派的手機丟棄

結果最後還是靠心理學才抓到犯人呀! (翻白眼)

至於怎麼靠行為心理學的就請各位自行觀賞吧XD

![探員運用行為心理學逼出嫌犯的劇照](/images/CyberSec-in-movie-CSI-Cyber-S01E02/18.webp)

## 暗網什麼都有，什麼都不奇怪!

攻擊者是血腥愛好者，最喜歡看到血腥畫面

可是礙於社會風俗與法律問題難以找到同好

剛好有[暗網(deep web)](https://zh.wikipedia.org/wiki/%E6%9A%97%E7%BD%91)這種隱匿的網站的存在讓這些人可以找到同好

暗網的網址通常都是以類似 hancl5om3vva1t3r.onion 這樣以onion結尾所構成

但使用暗網必須藉由使用[洋蔥路由器(Tor)](https://zh.wikipedia.org/wiki/Tor)方能訪問

如果直接使用Chrome或其他一般的瀏覽器未使用Tor當Proxy的話是無法上暗網的唷

而Tor是一種讓你可以匿名瀏覽網站的瀏覽器

Tor匿名的原理就如同下圖，串連幾台Tor node(跳板)再連接到目的主機

因此目的主機看到的IP是最後一個node的IP，藉此達到匿名上網的目的

![Tor 洋蔥路由經多重節點跳板的匿名連線示意圖](/images/CyberSec-in-movie-CSI-Cyber-S01E02/19.webp)

### 實際逛逛暗網 HANSA Market

那就來逛逛暗網吧，來看看暗網到底長什麼樣子

我們來到HANSA Market逛一下

左邊的列表分類顯示這邊有賣什麼樣的東西

我們可以看到有賣毒品、詐欺相關、教學、服務、寶石、數位商品等有些看起來就是違法的東西

![暗網 HANSA Market 的商品分類頁面截圖](/images/CyberSec-in-movie-CSI-Cyber-S01E02/20.webp)


我們身為資安研究人員最感興趣的當然是數位商品啦，我們就繼續往下看

竟然有個分類是 Leaks & Databases耶，稍微逛了一下還有最近很嚴重的Y!

裡面內容是包含已經幫你解完密碼的 Email與密碼的組合，共有十萬組，而且價格只需要10.48美金

![暗網販售 Yahoo 外洩帳號密碼資料庫的頁面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/21.webp)

如果有心人士取得這些資料就可能可以拿來登入你Yahoo!的帳號

或者是拿來嘗試看看你別的網站是否使用相同的密碼(中國又稱撞庫)

所以大家要好好養成不同網站不同密碼的好習慣唷～

## 報告很重要，但也很累人

> Hi Walter,
> 
> Please refer to the attached and verify the xxxxxxx vulnerabilities and finished the final report before today leaving. Thanks!

以筆者的經驗，快下班之前收到主管這樣的E-mail總是讓人頭痛不已，剛好此集也有類似的橋段，真是讓人心有戚戚焉XD

整個案子結束之後Nelson邀請Krumitz一起去看電影

但是為了讓上司(如果是一般的測透測試對象則是客戶)了解結果都需要於案子結束之後撰寫報告

可是報告的撰寫往往繁文縟節：遣詞用字、縮排、字體、大小甚至使用Enter還是Shift + Enter都是需要注意

技術人員因此往往對報告很反感，但是不寫又不可能

因此也是主管需要高度關注的事項

![Nelson 邀請 Krumitz 看電影的對話場景](/images/CyberSec-in-movie-CSI-Cyber-S01E02/22.webp)
![Krumitz 為趕結案報告而無法赴約的劇照](/images/CyberSec-in-movie-CSI-Cyber-S01E02/23.webp)


在此推薦一個自動產出滲透測試報告的好軟體Dradis Pro (非業配XD)

希望可以大量降低技術人員撰寫報告的時間

可以把時間花在如技術研究或漏洞挖掘等更有價值的地方

這樣就不會找不到弱點也煩惱，找到很多弱點也很煩惱了，哈哈哈哈

![滲透測試報告產出工具 Dradis Pro 介面](/images/CyberSec-in-movie-CSI-Cyber-S01E02/24.webp)

## 結語：IoT 安全，廠商與消費者都有責任

隨著科技的進步，連網裝置成本越來越低，每個裝置幾乎都有基本的運算能力

但是便利的裝置往往都帶來相對應的風險，只要安全性不足都有可能被駭客利用

因此廠商在設計這些IoT裝置(WebCam也算是IoT設備唷)的時候也要記得把資訊安全設為重要因素之一

別為了急著讓產品上市或降低成本就忽略了安全

消費者也要睜大眼睛，屢出安全問題卻遲遲不修補的廠商就不要再購買該家商品了

以免為了小錢而有可能傷害了自己的生命安全

謝謝各位的觀賞，看電影學資安～ 我們下次見～ (揮手

![劇中角色揮手道別的動態圖](/images/CyberSec-in-movie-CSI-Cyber-S01E02/25.gif)

對資訊安全有興趣的朋友，歡迎至我們Facebook官方粉絲頁按讚並且分享喔！

有任何最新的活動訊息，我們都將第一時間張貼於[Facebook官方粉絲頁](https://www.facebook.com/ISDA.tw/)及[ISDA官方網站](http://www.isda.org.tw/)